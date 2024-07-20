document.addEventListener('DOMContentLoaded', function() {
    //declarações sessão de posters
    const poster = document.querySelectorAll('[data-poster]');
    const card = document.querySelector('[data-card]');
    const closeCard = document.querySelector('[data-btnClose]');

    
    //declarações galeria de imagens
    const gallerySection = document.querySelector('.gallery');
    const positionSection = gallerySection.getBoundingClientRect();
    const slides = document.querySelectorAll('[data-slide]');
    let count = 0;
    let delay = 3000;
    const positionNow = window.scrollY;
    const calcPosition = positionSection.top + positionNow;
    

    //declarações sessão de fotos personagens
    const img = document.querySelectorAll('[data-img]');


    //sessão de posters
    for (let i = 0; i < poster.length; i++){
        poster[i].addEventListener('click', function() {
            positionClick = window.scrollY - window.innerHeight;
            card.style.top = positionClick+"px";
            card.classList.add('allMovies__cardMovie--show');
        })
    }

    closeCard.addEventListener('click', function () {
        card.classList.remove('allMovies__cardMovie--show');
        console.log("click");
    })


    //sessão fotos personagens
    for (let i = 0; i < img.length; i++){
        const image = img[i].dataset.img;
        const description = document.querySelector(`[data-description=${image}]`);
        img[i].addEventListener('mouseenter', function() {
            description.classList.remove('characters__container__photo__item__img__description--is-hidden');
        })
        img[i].addEventListener('mouseout', function() {
            
            description.classList.add('characters__container__photo__item__img__description--is-hidden');
        })
    }

    //sessão galeria de imagens
    function startCarrousel() {
        const position = window.scrollY;
        console.log(calcPosition, position);
        if (position > parseInt(calcPosition)) {
            carrousel();
            console.log("next");
        }
    };
    
    function carrousel() {
        slides[count].classList.remove('gallery__container__carrousel__slide--show');
        
        count++;
        if (count >= slides.length) {
            count = 0;
        }
        
        slides[count].classList.add('gallery__container__carrousel__slide--show');
    };
    
    setInterval(() => {
        startCarrousel();
    }, delay);
})
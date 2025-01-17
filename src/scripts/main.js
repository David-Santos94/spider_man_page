document.addEventListener('DOMContentLoaded', function() {
    //DECLARAÇÔES

    //declarações header
    const btnMenu =  document.querySelector('[data-btnMenu]');
    const menu = document.querySelector('[data-menu]');

    //declarações hero
    const btnMore = document.querySelector('[data-btnMore]');
    const heightHero = document.querySelector('.hero');

    //declarações sessão de posters
    const poster = document.querySelectorAll('[data-poster]');
    const card = document.querySelectorAll('[data-card]');
    const closeCard = document.querySelectorAll('[data-btnClose]');
    const container = document.querySelector('[data-allMovies');

    //declarações sessão de fotos personagens
    const img = document.querySelectorAll('[data-img]');
    
    //declarações galeria de imagens
    const gallerySection = document.querySelector('.gallery');
    const positionSection = gallerySection.getBoundingClientRect();
    const slides = document.querySelectorAll('[data-slide]');
    let count = 0;
    let delay = 3000;
    const positionNow = window.scrollY;
    const calcPosition = positionSection.top + positionNow;
    

    //CÔDIGOS

    //sessão header
    btnMenu.addEventListener('click', function(){
        menu.classList.toggle("header__container__links-menu--show");
    })
    
    this.addEventListener('scroll', function(){
        menu.classList.remove("header__container__links-menu--show");
    })

    //sessão hero
    btnMore.addEventListener('click', function(){
        window.scroll(0, heightHero.clientHeight);
    })

    //sessão de posters
    for (let i = 0; i < poster.length; i++){
        poster[i].addEventListener('click', function() {
            card[i].classList.add('allMovies__cardMovie--show');
            positionClick = window.scrollY - card[i].clientHeight - 100;
            card[i].style.top = positionClick+"px";
            container.style.opacity = "0.1";
        })

        closeCard[i].addEventListener('click', function () {
            card[i].classList.remove('allMovies__cardMovie--show');
            container.style.opacity = "1";
        })
    }



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
        if (position >= parseInt(calcPosition)) {
            carrousel();
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
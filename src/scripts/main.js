document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelectorAll('[data-img]');

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
})
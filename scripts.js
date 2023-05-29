document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick= ()  => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider",{
    spaceBetween: 20 ,
    pagination: {
el:".swiper-pagination",
clickable: true
    },
    loop: true,
    grabCursor : true,
    autoplay : {
   delay : 7500 ,
    disableOnInteraction : false,
    },
    breakpoints : {
        0 : {
            slidesPerView: 1,
        },
        768 : {
            slidesPerView: 2,
        },
    },
    
});
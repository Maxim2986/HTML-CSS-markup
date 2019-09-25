// Slider
// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     loop: true,
//     effect: "fade",
//     speed: 1000,
//     loopFillGroupWithBlank: true,
//     autoplay: {
//         delay: 5000
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     }
// });

// Menu
$(document).ready(function () {
    $("#menu").mmenu({
        extensions: [
            "fx-listitems-slide",
            "pagedim-black",
            "position-right",
            "position-front",
            "theme-dark"
        ]
    });
});

// Header-scroll
// jQuery(function(jQuery) {
//     jQuery(window).scroll(function(){
//         if(jQuery(this).scrollTop()>140){
//             jQuery('.header').addClass('header-scroll');
//         }
//         else if ($(this).scrollTop()<140){
//             jQuery('.header').removeClass('header-scroll');
//         }
//     });
// });


// $(document).ready(function(){
//     $(".nav, .arrow").on("click","a", function (event) {
//         event.preventDefault();
//         var id  = $(this).attr('href'),
//             top = $(id).offset().top + (-50);
//         $('body,html').animate({scrollTop: top}, 1500);
//     });
// });

// Animate
//    AOS.init();








// Slider
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    // effect: "fade",
    speed: 1000,
    loopFillGroupWithBlank: true,
    // autoplay: {
    //     delay: 5000
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

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


$(document).ready(function(){
    $("menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top + (-50);
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

// Header-scroll
jQuery(function(jQuery) {
    jQuery(window).scroll(function(){
        if(jQuery(this).scrollTop()>140){
            jQuery('.header').addClass('header-scroll');
            jQuery('.logo img').css({"max-width": "75%"});
        }
        else if ($(this).scrollTop()<140){
            jQuery('.header').removeClass('header-scroll');
            jQuery('.logo img').css({"max-width": "100%"});
        }
    });
});









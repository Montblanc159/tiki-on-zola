$(document).ready(function () {
    $('.slider').slider();
});

$(document).ready(function () {
    $('.modal').modal();
});

$(document).ready(function () {
    $('select').formSelect();
});

$(document).ready(function () {
    $('.sidenav').sidenav();
});

$('.carousel.carousel-slider').carousel({ indicators: true });
var autoplay = true;
setInterval(function () { if (autoplay) $('.carousel.carousel-slider').carousel('next'); }, 6000);
$('.carousel.carousel-slider').hover(function () { autoplay = false; }, function () { autoplay = true; });


$(document).ready(function () {
    $('.parallax').parallax();
});

$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});

$('#return-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});

$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 5,
        loop: true,
        margin: 5,
        autoplay: true,
        autoplayTimeout: 1700,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        stagePadding:50,
        mergeFit:true,
        dots:false,//hien thi dots cham dieu huong o phia duoi slide
        lazyLoadEager:4,
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    })
})

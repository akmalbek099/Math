$('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    loop:true,
    smartSpeed:450,
    margin:0,
    nav:true,
    navText : [
        '<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

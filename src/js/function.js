jQuery(function($) {
    "use strict";
    AOS.init({
        duration: 1200,
    })
    $(function($) {
        $(".menu-btn").on('click', function() {
            $("body").toggleClass("menu-active");
        });
    });
    $(function() {
        var owl = $("#main-slider");
        owl.owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 2000,
            dots: true,
            animateOut: 'fadeOut',
            navText: ['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
            responsiveClass:true,
            responsive:{
                992:{
                    nav: true,
                },
            }
        });
    });
    $(function() {
        var owl = $("#testimonials-slider");
        owl.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            dots: true,
            nav: false,
            navText: ['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
            responsiveClass:true,
            responsive:{
                1200:{
                    nav: true,
                },
            }                
        });
    });
    $(function() {
        var owl = $("#program-slider");
        owl.owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            stagePadding: 80,
            margin:20,
            dots: true,
            nav: true,
            navText: ['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
            responsiveClass:true,
            responsive:{
                0:{
                    items: 1,
                    stagePadding:0,
                    nav: false,
                },
                576:{
                    items: 2,
                },
                768:{
                    items: 2,
                },
                992:{
                    items: 3,
                },
                1200:{
                    items: 4,
                    nav: true,
                },
            }
        });
    });
    $(function() {
        var owl = $("#partner-slider");
        owl.owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            dots: true,
            nav: true,
            navText: ['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
            responsiveClass:true,
            responsive:{
                0:{
                    items: 1,
                },
                576:{
                    items: 2,
                },
                768:{
                    items: 3,
                },
            }
        });
    });
    $(function() {
        var owl = $("#portfolio-slider");
        owl.owlCarousel({
            items: 3,
            margin:20,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            dots: true,
            nav: false,
            navText: ['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
            responsiveClass:true,
            responsive:{
                0:{
                    items: 1,
                },
                576:{
                    items: 2,
                },
                768:{
                    items: 3,
                },
                1200:{
                    nav: true,
                },
            }
        });
    });
    $(function() {
        var owl = $("#menu-slider");
        owl.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            dots: true,
            nav: false,
            navText: ['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
            responsiveClass:true,
            responsive:{
                1200:{
                    nav: true,
                },
            }
        });
    });
});

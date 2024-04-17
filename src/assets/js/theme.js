$(document).ready(function () {
    $('#toggler').on('click', function () {
        $('.navs').hasClass('open')
            ? $('.navs').removeClass('open')
            : $('.navs').addClass('open');
    });
    $('.banner').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        adaptiveHeight: true,
        cssEase: 'linear',
        speed: 500,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        appendDots: $('.bannerControls .dots'),
        appendArrows: $('.bannerControls .arrows'),
        prevArrow: '<i class="fa-thin fa-chevron-circle-left hover:text-vi"></i>',
        nextArrow: '<i class="fa-thin fa-chevron-circle-right hover:text-vi"></i>'
    });
    $('.tmSlider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: 'ease-in-out',
        speed: 500,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: $('.tmDots'),
        appendArrows: $('.tmSlider'),
        prevArrow: '<i class="fa-thin fa-chevron-circle-left hover:text-vi"></i>',
        nextArrow: '<i class="fa-thin fa-chevron-circle-right hover:text-vi"></i>'
    });
    $('.pfSlider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: 'ease-in-out',
        speed: 500,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: $('.pfDots'),
        appendArrows: $('.pfSlider'),
        prevArrow: '<i class="fa-thin fa-chevron-circle-left hover:text-vi"></i>',
        nextArrow: '<i class="fa-thin fa-chevron-circle-right hover:text-vi"></i>'
    });
    $('.pgSlider').slick({
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: 'ease-in-out',
        speed: 500,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        appendDots: $('.pgDots'),
        appendArrows: $('.pgSlider'),
        prevArrow: '<i class="fa-thin fa-chevron-circle-left hover:text-vi"></i>',
        nextArrow: '<i class="fa-thin fa-chevron-circle-right hover:text-vi"></i>',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.prSlider').slick({
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: 'ease-in-out',
        speed: 500,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendDots: $('.prDots'),
        appendArrows: $('.prSlider'),
        prevArrow: '<i class="fa-thin fa-chevron-circle-left hover:text-vi"></i>',
        nextArrow: '<i class="fa-thin fa-chevron-circle-right hover:text-vi"></i>',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.partners').slick({
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: 'ease-in-out',
        speed: 300,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: $('.partners'),
        prevArrow: '<i class="fa-light fa-chevron-left hover:text-vi"></i>',
        nextArrow: '<i class="fa-light fa-chevron-right hover:text-vi"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // var menu = $('#sideBar');
    // var backdrop = $('.sidebarOverlay');
    // $('#sidebarOpener').on('click', function () {
    //     menu.removeClass('-translate-x-full').addClass('translate-x-0');
    //     backdrop.removeClass('invisible').addClass('visible');
    //     $('#sidebarCloser').removeClass('opacity-0 right-0 invisible').addClass('opacity-100 -right-5 visible');
    // });
    // $('#sidebarCloser, .sidebarOverlay').on('click', function () {
    //     menu.removeClass('translate-x-0').addClass('-translate-x-full');
    //     backdrop.addClass('invisible').removeClass('visible');
    //     $('#sidebarCloser').removeClass('opacity-100 -right-5 visible').addClass('opacity-0 right-0 invisible');
    // });
    // $('.pill').each(function () {
    //     $(this).on('click', function () {
    //         var pillName = $(this).attr("data-pill");
    //         if ($('.pill').hasClass('pill-active')) {
    //             $('.pill').removeClass('pill-active');
    //             $(this).addClass('pill-active');
    //         }
    //         $('.pill-tab.block').removeClass('block').addClass('hidden');
    //         $("#" + pillName).removeClass('hidden').addClass("block");
    //     });
    // });

    // });
    // $('.toggleSidebarDropdown').each(function () {
    //     $(this).on('click', function () {
    //         var sidebarDrop = $(this).parent().next();
    //         var dropCaret = $(this).find('img');
    //         sidebarDrop.hasClass('h-0') 
    //         ? sidebarDrop.removeClass('h-0').addClass('h-auto') && dropCaret.addClass('rotate-180') 
    //         : sidebarDrop.removeClass('h-auto').addClass('h-0') && dropCaret.removeClass('rotate-180')
    //     });
    // });
});

$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        mobileFirst: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 426,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true
    });

    $('[data-modal=signin]').on('click', function() {
        $('.overlay, #signin').fadeIn('slow');
        console.log(1);
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #signin').fadeOut('slow');
        console.log(2);
    });

    $('[data-modal=registration]').on('click', function() {
        $('#signin').fadeOut('slow');
        $('#registration').fadeIn('slow');
        console.log(3);
    });
    $('.modal__close_registration').on('click', function() {
        $('.overlay, #registration').fadeOut('slow');
        console.log(4);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('ul.receiving__tabs').on('click', 'li:not(.receiving__tab_active)', function() {
        $(this)
          .addClass('receiving__tab_active').siblings().removeClass('receiving__tab_active')
          .closest('div.container').find('div.receiving__content').removeClass('receiving__content_active').eq($(this).index()).addClass('receiving__content_active');
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                surname: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
                password: "required",
                repassword: "required"
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите не менее {0} символов!")
                  },
                surname: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите не менее {0} символов!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                },
                password: "Пожалуйста, введите пароль",
                repassword: "Пожалуйста, повторите пароль"
            }
        });
    };

    validateForms('.sign-in');
    validateForms('.registration-form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('button_reg').click(function() {
        window.location.href = "index.html"
    });

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.promo'),
        menuItem = document.querySelectorAll('.promo_item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('promo_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('promo_active');
            })
        })
    });
});
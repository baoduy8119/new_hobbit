window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

$(document).ready(function () {
    $('.bisiness-slider').slick({
        dots: true,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        appendArrows: $('.slider-controls'),
        appendDots: $('.slider-controls'),
    });
    $('.toggle-menu').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('open')
        $(this).next().toggleClass('show')
    })
    $(document).on('click', function closeMenu(e) {
        if ($('.navbar').has(e.target).length === 0) {
            $('.navbar-collapse').removeClass('show')
        }
    })
    $('.show-more').click(function (e) {
        e.preventDefault()
        if (!$(this).hasClass('less')) {
            $('.portfolio-short-list').addClass('d-none')
            $('#backers-tab').removeClass('active')
            $('#backers-tab').trigger('click')
            $('.nav-wrapper').removeClass('first-show')
            $('.portfolio-subtitle').addClass('d-none')
            $(this).addClass('less')
        } else {
            $(this).removeClass('less')
            $('.nav-wrapper').addClass('first-show')
            $('.portfolio-short-list').removeClass('d-none')
            $('#portfolio-tabContent > .tab-pane').removeClass('show').removeClass('active')
        }
    })
    $('#portfolio-tab .nav-link').click(function () {
        $('.portfolio-short-list').addClass('d-none')
        $('.nav-wrapper').removeClass('first-show')
    })
    AOS.init();
    // $('#investorsModal').modal('show')
});
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
});
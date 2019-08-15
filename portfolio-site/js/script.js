$(window).on('load', function() {
    // first icon fades out, then the background
    $('.loader .inner').fadeOut(1000, function() {
        $('.loader').fadeOut(1250);
    });

    // call isotope plugin - place here to fix image overlap bug
    $('.items').isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
});

$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 4000,
        pagination: false
    });

    var typed = new Typed('.typed', {
        strings: [
            'Web Developer',
            'Game Programmer',
            'Computer Science Student'
        ],
        typeSpeed: 100,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        nav: true,
        smartSpeed: 900,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        // screen widths
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });

    // start the skills animation when user scrolls down

    // offset gets the hor ver pos of the element, or here just the top
    var skillsTopOffset = $('.skillsSection').offset().top;
    // window.pageYOffset - how far user has scrolled from the top
    // add 200 for more of a delay while scrolling
    $(window).scroll(function() {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el)
                        .find('.percent')
                        .text(Math.round(percent));
                }
            });
        }
    });

    // now add data-fancybox attribute to html element
    $('[data-fancybox]').fancybox();

    $('#filters a').click(function() {
        // remove current class from default and add to this
        $('#filters .current').removeClass('current');
        $(this).addClass('current');

        // grab the value of the data-filter attribute
        var selector = $(this).attr('data-filter');

        // now call isotope with selector
        $('.items').isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        // end click handler - cancel default behavior
        return false;
    });

    $('#navigation li a').click(function(e) {
        e.preventDefault();

        // this gets the current element called on so <a> href att
        var targetElement = $(this).attr('href');
        var targetPosition = $(targetElement).offset().top;

        $('html, body').animate({ scrollTop: targetPosition - 50 }, 'slow');
    });

    const nav = $('#navigation');
    const navTop = nav.offset().top; // get top position of nav
    // when nav is at the top, add a class that fixes it to the top

    $(window).on('scroll', stickyNavigation);

    function stickyNavigation() {
        var body = $('body');

        // if the position scrolled is past navtop
        if ($(window).scrollTop() >= navTop) {
            body.css('padding-top', nav.outerHeight() + 'px');
            body.addClass('fixedNav');
        } else {
            body.css('padding-top', 0);
            body.removeClass('fixedNav');
        }
    }
});

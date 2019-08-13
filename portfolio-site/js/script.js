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
});

$(document).ready(function () {

    var $window = $(window),
        scrolled = $window.scrollTop();

    $('.in-view--js').each(function() {
        inView($(this));
    });

    $window.on('scroll resize', function() {
        scrolled = $window.scrollTop();

        $('.in-view--js').each(function() {
            inView($(this));
        });
    });

    function inView($el) {

        // Element dimensions
        var height  = $el.outerHeight(),
            top     = $el.offset().top,
            bottom  = top + height,
            multiplier = 1;

        // Window dimensions
        var windowHeight    = $window.height(),
            windowBottom    = scrolled + windowHeight;

        // InView
        var _inViewTop = top < windowBottom,
            _inViewBottom = bottom > scrolled,
            _inView = _inViewTop && _inViewBottom;

        // Get multiplier
        if ($el.attr('data-multiplier') !== undefined) {
            multiplier = parseFloat($el.attr('data-multiplier'));
        }

        // Get percentage
        var percent = 100 / (bottom + windowHeight - top) * (scrolled + windowHeight - top) * multiplier;

        $el.toggleClass('in-view', _inView);

        if (percent >= 0 && percent <= 100) {
            $el.css('--percent', percent);
        } else if (percent <= 100) {
            $el.css('--percent', 0);
        } else if (percent >= 0) {
            $el.css('--percent', 100);
        }
    }

});
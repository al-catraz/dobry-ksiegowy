(function() {
    function windowScrollHandler() {
        var scrollTop = $(window).scrollTop(),
            ratio = $('.parallax').is('#hero') ? 2 : 10,
            offset = -(Math.round(scrollTop / ratio));

        $('.parallax:not(#map)').css({
            backgroundPosition: '50% ' + offset + 'px'
        });

        return false;
    }

    $(function() {
        $(window).on('load scroll', windowScrollHandler);
    });
}());

(function($) {

    $.fn.carousele = function() {

        var leftUIEl = $(".carousel-arrow-left");
        var rightUIEl = $(".carousel-arrow-right");
        var elementsList = $(".carousel-list");
        var pixelsOffset = 525;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
        var maximumOffset = 0;

        // установка стилей блока, содержащего карусель
        $(this).css({
            "width": "682px",
            "margin": "20px auto",
            "background": "#eee",
            "padding": "5px",
            "border-radius": "2px"});

        leftUIEl.click( function() {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue +=525;
                elementsList.animate({left: currentLeftValue + "px"}, 500);
                };
            });

        rightUIEl.click( function () {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -=525;
                elementsList.animate({left: currentLeftValue + "px"}, 500);
                };
        });
        return this;
    }

})(jQuery);

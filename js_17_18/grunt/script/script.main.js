$(function () {

    $(".carousele").carousele();

    var template = $("#profile").html();
    var user = {
        name: "ARTEM MANZHOS",
        picture: "img/me.png",
        job: "Творческий человек",
        study1: "IT - это создание чего-то нового",
        study2: "Сделать мир лучше",
        study3: "Сделать сложные вещи простыми для понимания",
        mail: "itsgood7887@gmail.com",
        vk: "https://vk.com/art_sokolov",
        feedback: "Пишу музыку"
    };
    var userContent = tmpl(template, user);

    $(".wrapper").append(userContent);

});

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

;// see:
// http://ejohn.org/blog/javascript-micro-templating/

// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();

$(function() {
    $("a").click( function() {
        event.preventDefault();
    } );

    $('.jcarousel').jcarousel({

    });

    /*прокрутка слайдера влево*/
    $(".carousel-prev")
    .on("jcarouselcontrol:active", function() {
        $(this).removeClass("inactive");
    })
    .on("jcarouselcontrol:inactive", function() {
        $(this).addClass("inactive");
    })
    .jcarouselControl({
        target: '-=1'
    });

    /*прокрутка слайдера вправо*/
    $(".carousel-next")
    .on("jcarouselcontrol:active", function() {
        $(this).removeClass("inactive");
    })
    .on("jcarouselcontrol:inactive", function() {
        $(this).addClass("inactive");
    })
    .jcarouselControl({
        target: '+=1'
    });

    /*кнопки страниц слайдера*/
    $('.carousel-pagination')
    .on("jcarouselpagination:active", "a", function() {
        $(this).addClass("active");
    })
    .on("jcarouselpagination:inactive", "a", function() {
        $(this).removeClass("active");
    })
    .jcarouselPagination({
    });


    /*custom checkbox*/
    var params = {
        changedEl: "#region",
        visRows: 4
    }
    cuSel(params);

    $(".nice-check").each(
    function() {
        changeCheckStart($(this));
    });

    function changeCheck(el){
        var el = el,
        input = el.find("input").eq(0);
        if(el.attr("class").indexOf("nice-check-disabled")==-1)
        {
            if(!input.attr("checked")) 
            {
                el.addClass("nice-checked");
                input.attr("checked", true);
            }
            else {
            el.removeClass("nice-checked");
            input.attr("checked", false).focus();
            }
        }
    return true;
    }

    function changeVisualCheck(input){
        var wrapInput = input.parent();
        if (!input.attr("checked")) {
            wrapInput.removeClass("nice-checked");
        }
        else{
            wrapInput.addClass("nice-checked");
        }
    }

    function changeCheckStart(el){
        try{
            var el = el,
            checkName = el.attr("name"),
            checkId = el.attr("id"),
            checkChecked = el.attr("checked"),
            checkDisabled = el.attr("disabled"),
            checkTab = el.attr("tabindex"),
            checkValue = el.attr("value");
            
            if(checkChecked)
                el.after("<span class='nice-check nice-checked'>"+
                "<input type='checkbox'"+
                "name='"+checkName+"'"+
                "id='"+checkId+"'"+
                "checked='"+checkChecked+"'"+
                "value='"+checkValue+"'"+
                "tabindex='"+checkTab+"' /></span>");
            else
                el.after("<span class='nice-check'>"+
                "<input type='checkbox'"+
                "name='"+checkName+"'"+
                "id='"+checkId+"'"+
                "value='"+checkValue+"'"+
                "tabindex='"+checkTab+"' /></span>");

            if(checkDisabled)
            {
                el.next().addClass("nice-check-disabled");
                el.next().find("input").eq(0).attr("disabled", "disabled");
            }

            el.next().bind("mousedown", function(e) { changeCheck($(this)) });
            el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck($(this)) });
                if($.browser.msie)
                {
                    el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck(jQuery(this)) });
                }
                el.remove();
        }
        catch(e)
        {

        }
        return true;
    }

    /*drop-down menu*/
    $(".drop").hover(
        function() {
            $(this).children("ul").slideDown(200);
            $(this).children("ul").animate({
                backgroundColor: "rgb(225, 75, 100)",
                }, 200);
        },

        function() {
            $(this).children("ul").slideUp(200);
            $(this).children("ul").animate({
                backgroundColor: "rgb(225, 75, 75)",
                }, 200);
        });


});
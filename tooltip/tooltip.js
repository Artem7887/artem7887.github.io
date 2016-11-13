  (function() {

      var infoElem = $('.info');

      infoElem.each(function() {
        var self = $(this),
          selfTooltipText = self.data('tooltip-text');
        
        if (selfTooltipText) $('<span/>', {
          class: 'tooltip',
          text: selfTooltipText
       
        }).appendTo(self);
      });


    })();
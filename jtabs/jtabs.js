$(document).ready(function(){
	$('.tabsContent>div:not(":first-of-type")').hide();

	$('.tabs li').each(function(i){
		$(this).attr('data-tab', 'tab'+i);
	});

	$('.tabsContent>div').each(function(i){
		$(this).attr('data-tab', 'tab'+i);
	});

	$('.tabs-menu li').on('click', function(){

		var dataTab = $(this).data('tab');
		var getTabs = $(this).closest('.tabs');


		getTabs.find('.tabs-menu li').removeClass('active');
		$(this).addClass('active');


		getTabs.find('.tabsContent>div').hide();
		getTabs.find('.tabsContent>div[data-tab='+dataTab+']').fadeIn("slow");

	});

});
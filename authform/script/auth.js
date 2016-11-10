$(document).ready(function(){  
  
    $('#login-trigger').click(function () {
      $('.overlay').fadeIn(0);
        $("#login-content").toggle("slide");
       $("#login-content2").hide(0); // при нажатии на квадрат прячем вторую форму
    });
  
   $('#signup').click(function () {
    if ($("#login-content2").is(":hidden")){
        $("#login-content2").toggle("slide");
        $("#login-content").hide();

    }
    else
    {
        $('#login-content2').hide(); 
       $('#login-content').css('display','none');          
    }
});


  
  $('.overlay').click(function () { // при нажатии на пустую область прячем все
     $("#login-content2").fadeOut(600);
     $("#login-content").fadeOut(600);
     });
});
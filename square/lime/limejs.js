$(document).ready(function(){

     AOS.init({
      });

    $('.slider').bxSlider({
      auto: true,
		  pager: true,
      });

    $('.scroll').click(function() {
  		var id = $(this).attr('href');
  		var position = $(id).offset().top;
  		$('html, body').animate({'scrollTop': position}, 1000);
		});
    //  $('.navToggle').click(function() {
    //     $('#MenuSp').animate({
    //     	'height': '150px',
    //     });
    // });
    //  $('.navToggleClose').click(function() {
    //     $('#MenuSp').animate({
    //     	'height': '0',
    //     });
    // });

  });

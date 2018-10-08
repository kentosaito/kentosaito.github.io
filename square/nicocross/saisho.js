$(function(){
   AOS.init({
      });
   $('#page_top').click(function() {
      $('body,html').animate({scrollTop:0}, 1000);
      return false;
   });

//ナビを上に固定
   var nav = $('#nav'),
   offset = nav.offset();
   $(window).scroll(function () {
     if($(window).scrollTop() > offset.top) {
       nav.addClass('fixed');
     } else {
       nav.removeClass('fixed');
     }
   });

//スクロール
    $('.scroll').click(function() {
      var id = $(this).attr('href');
      var position = $(id).offset().top;
      $('html, body').animate({'scrollTop': position}, 1000);
    });

//チケットのボタン
    $('.btn-info').click(function(){
      $('#information').fadeOut();
    })

//左から出てくる
    $('#slide-nav').hover(
      function(){
        $(this).animate({'marginRight':'100px'},500);
      },
      function () {
        $(this).animate({'marginRight':'0'},500);
      }
    );

});
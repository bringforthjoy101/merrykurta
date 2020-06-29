$(document).ready(function () {
    $('.nav--btn').click(function () { 
      $('.nav--btn span.s1').toggleClass('s1-rot');
      $('.nav--btn span.s2').toggleClass('s2-rot');
      $('.nav--btn span.s3').toggleClass('s3-rot');
      $('.nav--links ul li').toggleClass('li_animi')
      var nav_left= $('.nav--links ul').css('left')
       if(nav_left != "0px" ){
        $('.nav--links ul').css('left' , '0%')
       }else {
        $('.nav--links ul').css('left' , '-100%')
       }
    });
  });
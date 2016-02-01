$(function(){
  $(window).load(function(){

    $('header h1 a[href^=#]').on('click',function(){
          var speed = 2000;
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $('body,html').animate({scrollTop:position-50}, speed, 'swing');
          return false;
      });

    var pict_num,n=1;
    var nameSet = ['bottle','rock','unusual','bulb'];
    //bottleの写真
    $('div[id="bottle"] p img').on('click',function(){
      $('.modal-content').fadeIn();
      $('.bottle').fadeIn();
      pict_num = $(this).attr('class');
      for(var i=1;i<=4;i++){
        var p = $('<p>').append($('<img>').attr({
          'src': 'images/bottle_'+pict_num+'_b.png',
          'alt': 'bottle_'+pict_num
        })).addClass('pic'+i);
        $('.bottle').append(p);
        if(pict_num < 4){
          pict_num++;
        }else{
          pict_num = 1;
        }
      }
    });

    //rockの写真
    $('div[id="rock"] p img').on('click',function(){
      $('.modal-content').fadeIn();
      $('.rock').fadeIn();
      pict_num = $(this).attr('class');
      for(var i=1;i<=4;i++){
        var p = $('<p>').append($('<img>').attr({
          'src': 'images/rock_'+pict_num+'_b.png',
          'alt': 'rock_'+pict_num
        })).addClass('pic'+i);
        $('.rock').append(p);
        if(pict_num < 4){
          pict_num++;
        }else{
          pict_num = 1;
        }
      }
    });

    //unusualの写真
    $('div[id="unusual"] p img').on('click',function(){
      $('.modal-content').fadeIn();
      $('.unusual').fadeIn();
      pict_num = $(this).attr('class');
      for(var i=1;i<=4;i++){
        var p = $('<p>').append($('<img>').attr({
          'src': 'images/unusual_'+pict_num+'_b.png',
          'alt': 'unusual_'+pict_num
        })).addClass('pic'+i);
        $('.unusual').append(p);
        if(pict_num < 4){
          pict_num++;
        }else{
          pict_num = 1;
        }
      }
    });

    //bulbの写真
    $('div[id="bulb"] p img').on('click',function(){
      $('.modal-content').fadeIn();
      $('.bulb').fadeIn();
      pict_num = $(this).attr('class');
      for(var i=1;i<=4;i++){
        var p = $('<p>').append($('<img>').attr({
          'src': 'images/bulb_'+pict_num+'_b.png',
          'alt': 'bulb_'+pict_num
        })).addClass('pic'+i);
        $('.bulb').append(p);
        if(pict_num < 4){
          pict_num++;
        }else{
          pict_num = 1;
        }
      }
    });
    //スライドショー
    //右側の矢印を押した時の処理
    $('.next').on('click',function(){
      $('.pic'+n).fadeOut();
      if(n < 4){
        n++;
      }else{
        n = 1;
      }
      $('.pic'+n).fadeIn();
    });
    //左側の矢印を押した時の処理
    $('.back').on('click',function(){
      $('.pic'+n).fadeOut();
      if(n == 1){
        n = 4;
      }else{
        n--;
      }
      $('.pic'+n).fadeIn();
    });
    //右上のバツボタンを押した時の処理
    $('.close').on('click',function(){
      $('.modal-content').fadeOut();
      for(var n=0;n<4;n++){
        $('.'+nameSet[n]).fadeOut();
        $('.'+nameSet[n]).empty();
      }
    });
  });

  var sec = 0;
  var pass = 0;

  //▼スクロール値の表示
  $(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if(scroll == 0){
      $('h1 img').removeClass('fade');
    }
    if(scroll > 200){
      $('h1 img').addClass('fade');
    }
    if(scroll >= 515){
      $('#sub_title h3').removeClass('fadeOut');
      $('#sub_title h3').addClass('fadeIn');
    }else{
      $('#sub_title h3').addClass('fadeOut');
    }

    if(scroll >= 600){
      $('#sub_title .text_set').removeClass('fadeOut');
      $('#sub_title .text_set').addClass('fadeIn');
    }else {
      $('#sub_title .text_set').addClass('fadeOut');
    }

    var top = 0;
    var left = 0;
    var right = 0;

    if(scroll >= 870){
      $('.t_p1').removeClass('fadeOut');
      $('.t_p1').addClass('fadeIn');
    }else {
      if(sec != 0){
        $('.t_p1').addClass('fadeOut');
      }
    }

    if(scroll < 959){
      $('.t_p1').css({'position':'fixed'});
      $('.t_p1').css('top', top + scroll / 2);
      $('.t_p1').css('left', left + scroll / 3.4);
    }else{
      $('.t_p1').css({'position':'absolute'});
      $('.t_p1').css('top','-28px');
      $('.t_p1').css('left','115px');
    }

    if(scroll >= 1200){
      $('#bottle .p_p1').removeClass('fadeOut');
      $('#bottle .p_p1').addClass('fadeIn');
      sec = 1;
    }else{
      if(sec != 0){
        $('#bottle .p_p1').addClass('fadeOut');
      }
    }

    if(scroll >= 1150){
      $('#bottle .p_p2').removeClass('fadeOut');
      $('#bottle .p_p2').addClass('fadeIn');
    }else{
      if(sec != 0){
        $('#bottle .p_p2').addClass('fadeOut');
      }
    }
    if(scroll < 1349 ){
      $('#bottle .p_p2').css({'position':'fixed'});
      $('#bottle .p_p2').css('top',top + scroll / 10);
      $('#bottle .p_p2').css('left', left + scroll / 1.97);
    }else{
      $('#bottle .p_p2').css({'position':'absolute'});
      $('#bottle .p_p2').css('top','0');
      $('#bottle .p_p2').css('left','518px');
    }

    if(scroll >= 1150){
      $('#bottle .p_p3').removeClass('fadeOut');
      $('#bottle .p_p3').addClass('fadeIn');
    }else{
      if(sec != 0){
        $('#bottle .p_p3').addClass('fadeOut');
      }
    }
    if(scroll < 1355 ){
      $('#bottle .p_p3').css({'position':'fixed'});
      $('#bottle .p_p3').css('top',scroll / 6 );
      $('#bottle .p_p3').css('left', '783px');
    }else{
      $('#bottle .p_p3').css({'position':'absolute'});
      $('#bottle .p_p3').css('top','97px');
      $('#bottle .p_p3').css('left','615px');
    }

    if(scroll >= 1150){
      $('#bottle .p_p4').removeClass('fadeOut');
      $('#bottle .p_p4').addClass('fadeIn');
    }else{
      if(sec != 0){
        $('#bottle .p_p4').addClass('fadeOut');
      }
    }
    if(scroll < 1400 ){
      $('#bottle .p_p4').css({'position':'fixed'});
      $('#bottle .p_p4').css('top',0 + scroll / 5);
      $('#bottle .p_p4').css('left', 1280 - scroll / 2.36);
    }else{
      $('#bottle .p_p4').css({'position':'absolute'});
      $('#bottle .p_p4').css('top','194px');
      $('#bottle .p_p4').css('left','518px');
    }

    //▼rock==================================================

    if(scroll >= 1300){
      $('.t_p2').removeClass('fadeOut');
      $('.t_p2').addClass('fadeIn');
    }else{
      if(sec != 0 && pass != 0){
        $('.t_p2').addClass('fadeOut');
      }
    }

    if(scroll >= 1400){
      $('#rock .p_p1').removeClass('fadeOut');
      $('#rock .p_p1').addClass('fadeIn');
    }else{
        $('#rock .p_p1').addClass('fadeOut');
    }

    if(scroll >= 1376){
      $('#rock .p_p2').removeClass('fadeOut');
      $('#rock .p_p2').addClass('fadeIn');
    }else{
      if(sec != 0 && pass != 0){
        $('#rock .p_p2').addClass('fadeOut');
      }
    }
    if(scroll < 1490 ){
      $('#rock .p_p2').css({'position':'fixed'});
      $('#rock .p_p2').css('top',300 + scroll / 10.5);
      $('#rock .p_p2').css('left', left + scroll / 3.35);
    }else{
      $('#rock .p_p2').css({'position':'absolute'});
      $('#rock .p_p2').css('top','-7px');
      $('#rock .p_p2').css('left','274px');
    }

    if(scroll < 1506){
      $('.t_p2').css({'position':'fixed'});
      $('.t_p2').css('top', top + scroll / 4);
      $('.t_p2').css('right', right + scroll / 4.73);
    }else{
      $('.t_p2').css({'position':'absolute'});
      $('.t_p2').css('top','-37px');
      $('.t_p2').css('right','150px');
    }

    if(scroll >= 1586){
      $('#rock .p_p3').removeClass('fadeOut');
      $('#rock .p_p3').addClass('fadeIn');
    }else{
      if(sec != 0 && pass != 0){
        $('#rock .p_p3').addClass('fadeOut');
      }
    }
    if(scroll < 1777 ){
      $('#rock .p_p3').css({'position':'fixed'});
      $('#rock .p_p3').css('top', scroll / 7 );
      $('#rock .p_p3').css('left', 344 + scroll / scroll);
    }else{
      $('#rock .p_p3').css({'position':'absolute'});
      $('#rock .p_p3').css('top','90px');
      $('#rock .p_p3').css('left','177px');
    }

    if(scroll >= 1658){
      $('#rock .p_p4').removeClass('fadeOut');
      $('#rock .p_p4').addClass('fadeIn');
      pass = 1;
    }else{
      if(sec != 0 && pass != 0){
        $('#rock .p_p4').addClass('fadeOut');
      }
    }
    if(scroll < 1858 ){
      $('#rock .p_p4').css({'position':'fixed'});
      $('#rock .p_p4').css('top', scroll / 7 );
      $('#rock .p_p4').css('left', 1280 - scroll / 2.22);
    }else{
      $('#rock .p_p4').css({'position':'absolute'});
      $('#rock .p_p4').css('top','187px');
      $('#rock .p_p4').css('left','274px');
    }

    //▼unusual============================================
    if(scroll < 1900){
      $('.t_p3','#unusual .p_p1').removeClass('fadeIn');
      $('#unusual .p_p2').removeClass('slide_in_1');
      $('#unusual .p_p3').removeClass('slide_in_2');
      $('#unusual .p_p4').removeClass('slide_in_3');
      $('.t_p4','#unusual .p_p1','#unusual .p_p2','#unusual .p_p3','#unusual .p_p4').addClass('fadeOut');
    }
    if(scroll >= 1900){
      $('.t_p3').removeClass('fadeOut');
      $('.t_p3').addClass('fadeIn');
    }else{
      $('.t_p3').addClass('fadeOut');
    }

    if(scroll >= 1950){
      $('#unusual .p_p1').removeClass('fadeOut');
      $('#unusual .p_p1').addClass('fadeIn');
    }else{
      $('#unusual .p_p1').addClass('fadeOut');
    }

    if(scroll >= 1990){
      $('#unusual .p_p2').addClass('slide_in_1');
    }
    if(scroll >= 2000){
      $('#unusual .p_p3').addClass('slide_in_2');
    }
    if(scroll >= 2010){
      $('#unusual .p_p4').addClass('slide_in_3');
    }

    //▼blub============================================
    if(scroll < 2320){
      $('.t_p4','#bulb .p_p1').removeClass('fadeIn');
      $('#bulb .p_p2').removeClass('slide_in_4');
      $('#bulb .p_p3').removeClass('slide_in_5');
      $('#bulb .p_p4').removeClass('slide_in_6');
      $('.t_p4','#bulb .p_p1','#bulb .p_p2','#bulb .p_p3','#bulb .p_p4').addClass('fadeOut');
    }
    if(scroll >= 2320){
      $('.t_p4').removeClass('fadeOut');
      $('.t_p4').addClass('fadeIn');
    }else{
      $('.t_p4').addClass('fadeOut');
    }

    if(scroll >= 2350){
      $('#bulb .p_p1').removeClass('fadeOut');
      $('#bulb .p_p1').addClass('fadeIn');
    }else{
      $('#bulb .p_p1').addClass('fadeOut');
    }

    if(scroll >= 2370){
      $('#bulb .p_p2').addClass('slide_in_4');
    }
    if(scroll >= 2380){
      $('#bulb .p_p3').addClass('slide_in_5');
    }
    if(scroll >= 2390){
      $('#bulb .p_p4').addClass('slide_in_6');
    }
  });
});

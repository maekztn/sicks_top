$(function(){
    
    $('#about').css({'display':'none'});
    $('.about_title,.about_bg').on('click',function(){
        $('#about').fadeToggle(500);
    });

    //スムーススクロール
    $('a[href^=#]').on('click',function(){
        var speed = 800;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top+50;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});
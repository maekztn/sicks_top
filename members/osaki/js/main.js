$(function(){
    //fullpage.js
    // $('#fullpage').fullpage({
    //     scrollingSpeed: 1000,
    //     navigationToolTips: ['firstSlide','secondSlide'],
    //     scrollBar: true
    // });

    //スムーススクロール
    $('a[href^=#]').on('click',function(){
        var speed = 800;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

    //背景パララックス
    $(document).scroll(function() {
        $("#top").each(function(){
            $(this).css({
                "background-position-y": (-$(this).scrollTop()/20)
            });
        });
    });

       
    //スクロールしたらheaderAnimate
    var scrolled = false;
    $(window).on("scroll", function() {

        headerLine = $("header #line");
        //headerBg = $("header #hBg");
        snsIcon = $(".all_icons");
        if ($(this).scrollTop() > 0) {
            $("h1 .icon-logo").css({'font-size':'calc(220% - 25%)'});
            headerLine.animate({ 'left': "0px"},500);
            $("header").delay(500).css({ 'background':"rgba(30,30,30,.95)"});
            $(".delete").fadeOut(300);
            $("#icons_btns").fadeIn(300);
        } else {
            $("h1 .icon-logo").css({'font-size':'250%'});
            headerLine.stop(true,true).animate({ 'left':"-100%"},300);
            $("header").stop(true,true).css({ 'background':"rgba(30,30,30,0)"});
            $(".delete").stop(true,true).fadeIn(300);
            $("#icons_btns").stop(true,true).fadeOut(300);
            $("header").removeClass('active');
        }

    });


    //sp header処理
    $('#icons_btns').on('click',function(){
        $('header').toggleClass('active');
    });





    //modal処理
    $(".items").on("click",function(){
        //modalを表示
        $("#black_layer").fadeIn(500);
        $("#contents_layer").fadeIn(500);
        
        //sectionの順番取得
        var n = $(this).index("section");
        var modal_list = $('.items_content');
        var container_w = 690*modal_list.length;
        $("#container").css({'width':container_w});
        for(i=0;i<modal_list.length;i++){
            var left_px = 690*i;
            $('.items_content').eq(i).css({
                'left':left_px,
                'top':0
            });
        }

        //クリックしたsectionによる場所指定
        var first_pos = -((n-1)*690);
        $("#container").css({'left':first_pos});

        //prev,nextのボタン操作
        var move_pos = first_pos;
        function move_pos_func(){
            $("#container").not(':animated').animate({
                'left': move_pos
            },700,"easeOutExpo");
            console.log(move_pos);
        }
        $("#next").stop(true,true).on("click",function(){
            if(move_pos > -(container_w-690)){
                move_pos = move_pos-690;
                move_pos_func();
            }else{
                move_pos = 0;
                move_pos_func();
            }
        });
        $("#prev").stop(true,true).on("click",function(){
            if(move_pos < 0){
                move_pos = move_pos+690;
                move_pos_func();
            }else{
                move_pos = -(container_w-690);
                move_pos_func();
            }            
        });
        return false;
    });
    $("#close_btn_wrap").on("click",function(){
        $("#black_layer").fadeOut(800);
        $("#contents_layer").fadeOut(800);
        move_pos = 0;
    });
    
    //モーダル中身イメージスライド
    var slide_i = 0;
    $(".slide_inner_img").on("click",function(){
        alert();
    });
    // $(".slide_inner_img").eq(0).show();
    // var total = $(".slide_inner_img").index();

    // setInterval(function(){
    //     if(i < total){
    //         $(".slide_inner_img").fadeOut(1000);
    //         i++;
    //         setTimeout(function(){
    //             $(".slide_inner_img").eq(i).fadeIn(1000);
    //         },1000);
    //     }else if(i == total){
    //         $(".slide_inner_img").fadeOut(1000);
    //         i = 0;
    //         setTimeout(function(){
    //             $(".slide_inner_img").eq(i).fadeIn(1000);
    //         },1000);
    //     }
    // },6000);
    

});







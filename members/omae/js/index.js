;$(function(){
	var view_sec = 0;
	var sec_color = ['#95d0f9', '#9872af', '#f58d12', '#403e3e', '#efc842'];

	//スクロールでbg変更
	$(window).scroll(function(){
		var scrolltop = $(window).scrollTop();
		for(var i = 0; i < $('.sec').length; i++){
			var sectop = $('.sec').eq(i).offset().top - 30;
			if(i == $('.sec').length-1){
				var next_top = $('.cont-wrap').height();
			}else{
				var next_top = $('.sec').eq(i+1).offset().top - 30;
			}
			if(sectop <= scrolltop && scrolltop < next_top && view_sec != i){
				$('.bg-canvas').stop().animate({
					'backgroundColor': sec_color[i]
				}, 500);
				$('body').css({'backgroundColor': sec_color[i]});
				view_sec = i;
			}
		}//for
		var maxheight = $('body').height() - $('.mv').height();
		$('.nav .pos').css('top', scrolltop / maxheight * 110);
	});//scroll

	//ホバーでイメージ変更
	$('.sec-img').each(function(){
		var src = $('li img', this).eq(0).attr('src');
		var img_wrap = $('<p>').append($('<img>').attr({
			'src': src,
			'width': '400px',
			'height': '400px'
		}));
		img_wrap = $('<div>').addClass('img-wrap').append(img_wrap);
		$(this).append(img_wrap);
	});
	$('.sec-img li').on('mouseover', function(){
		var src = $('img', this).attr('src');
		$(this).parent().parent().find('p img').attr('src', src);
		$(this).parent().find('li').css('border', 'none');
		$(this).css('border', '2px solid #ffee34');
	});

	// #で始まるアンカーをクリックした場合に処理
	$('a[href^=#]').click(function() {
		// スクロールの速度
		var speed = 300; // ミリ秒
		// アンカーの値取得
		var href= $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').not(':animated').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});
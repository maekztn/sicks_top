$(function(){
	//20*20個の六角形を生成
	for(var i=0; i<20; i++){
		if(i<10)i = '0'+i;
		var row = $('<div>').addClass('box-row clearfix');
		for(var n=0; n<20; n++){
			if(n<10)n = '0'+n;
			var box = $('<div>').addClass('hexagon '+i+''+n);
			row.append(box);
		}
		$('.box-wrap').append(row);
	}

	//bodyのheightを設定
	$(window).on('load resize', function(){
		if($(window).height() < 460){
			$('body').height(460);
		}else{
			$('body').height($(window).height());
		}
	});

	timer();

	$('.hexagon').on('click', function(){
		box_rotate($(this));
	})
});

function timer(){
	var time = Math.random()*100;
	random_twincle();
	setTimeout(timer, time);
}

function random_twincle(){
	var num01 = Math.floor(Math.random()*20);
	if(num01 < 10)num01 = '0' + num01;
	var num02 = Math.floor(Math.random()*20);
	if(num02 < 10)num02 = '0' + num02;
	var num = num01 + num02;

	$('.'+num).not(':animated').animate({
		'opacity': 0.3
	}, 100).delay(100).animate({
		'opacity': 1
	}, 100);
}

function box_rotate(target){
	console.log(target);
	var rotate = target.css('rotate') + 60;
	console.log(rotate);
	target.animate({zIndex:1},{
		//1秒かけてアニメーション
		duration: 300,
		//stepは、アニメーションが進むたびに呼ばれる
		step:function(now){
			//nowに現在のz-indexの値（0から1に変化しているところ）が渡してもらえる
			//0から1に向かって変化していくnowを利用して3回転（1080度）させてみる
			$(this).css({transform:'rotate(' + (now * 60) + 'deg)'});
		},
		complete:function(){
			//次のために、元に戻しておく
			$(this).css('zIndex', 0);
		}
	});
}
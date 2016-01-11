$.cssHooks["rotate"] = {
	get: function( elem, computed, extra ) {
		return $(elem).data("rotate")
	},
	set: function( elem, value ) {
		var val = $.isNumeric(value)?value+"deg":value; 
		$(elem).data("rotate",val).css("transform","rotate("+val+")");
	}
};


$(function(){

	//loading処理
	$(window).on("load",function(){
		$('.loading').delay(600).fadeOut(800);
	});

	if(!navigator.userAgent.match(/(iPhone|iPad|Android)/)){
		//20*20個の六角形を生成
		for(var i=0; i<20; i++){
			if(i<10)i = '0'+i;
			var row = $('<div>').addClass('box-row clearfix');
			for(var n=0; n<20; n++){
				if(n<10)n = '0'+n;
				var box = $('<div>').addClass('hexagon box'+i+''+n)
				.append($('<div>').addClass('hexTop')).append($('<div>').addClass('hexBottom'));
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
		//チカチカ光るやつ起動
		twincle_timer();
		rotate_timer();

		//======要素追加　あとで変える======
		//ロゴ追加
		$('.box1110').addClass('logo').append('<img src="./images/logo.png" alt="sicks">');

		var cont_place = ['.box0710', '.box0711', '.box0810', '.box0811', '.box0910', '.box0911', '.box1010', '.box1011', '.box1111', '.box1210', '.box1211']

		$('.box-wrap-sp .cont').each(function(i){
			console.log(i);
			var num = Math.floor(Math.random()*cont_place.length);

			var texturediv = $('<div class="texture">').append($('.texture', this).html());
			var colordiv = $('<div class="color">').append($('.color', this).html());

			$(cont_place[num]).addClass('hexMember cont cont'+i)
				.append(texturediv).append($('<div class="member-txt">').append($('.member-txt', this).html()))
				.append(colordiv);
		});

		$('.hexagon').on('click', function(){box_rotate($(this));});
	}


	//nav-btnにactive追加
	$('.nav-btn').on('click',function(){
        $('.nav-btn,.side-menu').toggleClass('active');
    });
});

function twincle_timer(){
	var time = Math.random()*100;
	random_twincle();
	setTimeout(twincle_timer, time);
}

function random_twincle(){
	var num01 = Math.floor(Math.random()*20);
	if(num01 < 10)num01 = '0' + num01;
	var num02 = Math.floor(Math.random()*20);
	if(num02 < 10)num02 = '0' + num02;
	var num = num01 + num02;

	$('.box'+num).not(':animated').animate({
		'opacity': 0.3
	}, 100).delay(100).animate({
		'opacity': 0.8
	}, 100);
}

function rotate_timer(){
	var time = Math.random()*100;
	var num01 = Math.floor(Math.random()*20);
	if(num01 < 10)num01 = '0' + num01;
	var num02 = Math.floor(Math.random()*20);
	if(num02 < 10)num02 = '0' + num02;
	var num = num01 + num02;

	box_rotate($('.box'+num));
	setTimeout(rotate_timer, time);
}

function box_rotate(target){
	if(target.hasClass('cont'))return false;
	var rotate = target.css('rotate') + 60;
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

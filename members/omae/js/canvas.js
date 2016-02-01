$(function(){

var CJS = createjs;
var canvas;
var stage;
var bobbles = [];
var animationCount = 0;
var isBobbleCreated = false;
var createTiming = 2;

$('.mv').height($(window).height());

set_canvas();
$(window).resize(function(){
	resize();
});


function set_canvas(){
	//canvas要素を生成
	var newCanvas = $('<canvas></canvas>')
	.addClass('bg-canvas').html('このブラウザはcanvasに対応していません。');//canvasに対応していないブラウザへの表示

	//bodyにcanvasを追加
	$('body').append(newCanvas);
	resize();

	//canvas, stageの設定
	canvas = $('.bg-canvas')[0];
	stage = new CJS.Stage(canvas);

	//フレームレートの設定
	CJS.Ticker.setFPS(60);
	CJS.Ticker.addEventListener('tick', tick);

	bobbleInit();
}

//ブラウザリサイズ時の処理
function resize(){
	var win_w = $(window).width();
	var win_h = $(window).height();
	$('.bg-canvas')
	.attr({
		width: win_w * 2,
		height: win_h * 2
	})
	.css({
		width: win_w,
		height: win_h
	});

	$('.sec.mv').height(win_h);
	if($(window).width() > 768){
		// $('.cont-wrap').width(win_w).height(win_h);
		$('.sec').height($(window).height());
	}else{
		$('.sec').height(1800);
	}
}

//canvas 1フレームごとのアニメーション処理
function tick(){
	if(isBobbleCreated) bobbleUpdate();
	stage.update();
}

function bobbleInit(){
	var max = Math.floor(stage.canvas.width / 40);

	isBobbleCreated = true;
}

function bobbleCreate(){
	var bobble = new CJS.Shape();
	var size = Math.floor(5 + Math.random() * 20);
	bobble.radius = size;
	bobble.graphics.beginFill('#fff');
	bobble.graphics.drawCircle(0, 0, bobble.radius);
	bobble.x = Math.random() * (stage.canvas.width + 100) - 50;
	bobble.y = stage.canvas.height + size*2 + Math.random() * 100;
	bobble.alpha = size / 40;

	//揺れるのに必要な変数
	bobble.base_x = bobble.x;
	bobble.angle = 0;
	bobble.vangle = (Math.random() - Math.random()) / size * 10;

	// のぼるスピード
	bobble.vy = size * 1.2;
	// 横に揺れる移動料
	bobble.vx = size * 0.7;

	bobbles.push(bobble);
	stage.addChild(bobble);
}

function bobbleUpdate(){
	animationCount++;

	if(animationCount >= createTiming){
		bobbleCreate();
		animationCount = 0;
		createTiming = Math.floor(Math.random() * 5);
	}

	for(var i = 0; i < bobbles.length; i++){
		var bobble = bobbles[i];

		bobble.angle += bobble.vangle;
		bobble.y -= bobble.vy;
		bobble.x = bobble.base_x + bobble.vx * Math.sin(bobble.angle);

		if(bobble.y <= -50){
			stage.removeChild(bobble);
			bobbles.splice(i, 1);
		}
	}
}


});//$(function)

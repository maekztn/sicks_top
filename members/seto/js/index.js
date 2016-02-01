$(function(){
	//アンカーを取得
	var hash = location.hash;
	if(hash != ''){
		contents_open($(hash),0,0);
	}

	$('a').on('click',function(){
		var target = $(this).attr('href');
		var main_speed = 1000;
		var menu_speed = 1500;
		if(target=='#pearl'||target=='#flower'||target=='#button'){
			if($(window).width() > 760){
				contents_open(target);
			}else{
				contents_link(target);
			}
			
		}
	});

	function contents_open(target,main_speed,menu_speed){
		$('#pearl,#flower,#button').fadeOut(main_speed);
		$(target).fadeIn(main_speed);
		$(target).find('.inner').delay(main_speed).fadeIn(menu_speed);
		return false;
	}

	function contents_link(target){
		var link = target.replace('#', '');
		link = link+'.html';
		document.location = link;
	}

});

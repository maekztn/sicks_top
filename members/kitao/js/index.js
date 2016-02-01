$(function(){
	var activeLink = function(){
		$('.link a').off('click').on('click',function(){
			var self = this;
			$(self).parent().addClass('active');
			$(self).parent().removeClass('link');
			var target = $(self).attr('href');
			$('span', this).fadeOut(500);
			$(target).fadeIn(500);
			setTimeout(function(){
				$(self).parent().addClass('_js-hover');
			},1000);
			unActiveLink();
			return false;
		});
	}

	var unActiveLink = function(){
		$('.active a').off('click').on('click',function(){
			var self = this;
			$(self).parent().addClass('link');
			$(self).parent().removeClass('active');
			$(self).parent().removeClass('_js-hover');
			$(self).parent().css({
				zIndex: 10,
				opacity: 1
			});
			var target = $(self).attr('href');
			$('span', this).fadeIn(500);
			$(target).fadeOut(500,function(){
				$(self).parent().css({zIndex:'',opacity:''});
			});
			activeLink();
			return false;
		});
	}

	activeLink();

	$(window).on('load resize', function(){
		var win_w = $(window).width();
		if(win_w < 960){
			var wariai = win_w / 960;
		}
	});
});
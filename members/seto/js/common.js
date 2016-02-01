$(function(){
	$('.white_layer').fadeOut(500);

	$('a').on('click',function(){
		var link = $(this).attr('href');
		if(link.charAt(0) != '#'){
			if($(window).width() > 760){
				$('.white_layer').fadeIn(500);
				setTimeout(function(){
					document.location = link;
				},500);
				return false;
			}else{
				if(link.match('index.html#')){
					link = link.replace('index.html#','');
					link = link + '.html';
					document.location = link;
					return false;
				}else{
					document.location = link;
					return false;
				}
			}
		}
	});

	$('#menuBtn,.backBtn,header ul li').on('click',function(){
        $('header ul').toggleClass('active');
    });
});
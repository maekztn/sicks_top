// JavaScript Document
$(function(){
	$.ajax({
		type: 'GET',
		url: 'ajax.xml',
		dataType: 'xml',
		success: function(xml) {
			$(xml).find("item").each(function(){
				//dlにタイトル・説明文追加
				$("#theTarget").append('<div class="content'+$('id',this).text()+' items_content"><div class="txtContents"><h2 class="content'+$('id',this).text()+' medium mgn-btm10 items_num">'+$('itemNum',this).text()+'</h2><h3 class="content'+$('id',this).text()+' bold mgn-btm10 items_title">'+$('title',this).text()+'</h3><h4 class="content'+$('id',this).text()+' medium genre items_genre">'+$('genre',this).text()+'</h4><p class="content'+$('id',this).text()+' txt items_txt">'+$('caption',this).text()+'</p></div><ul class="slide_inner"><li style="background-image:url(./images/'+$('img01',this).text()+'.jpg)" class="slide_inner_img"></li><li style="background-image:url(./images/'+$('img02',this).text()+'.jpg)" class="slide_inner_img"></li><li style="background-image:url(./images/'+$('img03',this).text()+'.jpg)" class="slide_inner_img"></li><li style="background-image:url(./images/'+$('img04',this).text()+'.jpg)" class="slide_inner_img"></li></ul></div>');
			});
		},
		error:function(){
		}
	});
});
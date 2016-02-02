<!DOCTYPE html>
<html>
<head  prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>SICKS | JUN'S COLLECTION</title>
<meta charset="utf-8">
<meta name="description" content="京都コンピュータ学院鴨川校３回生デザイン学科のメンバーによるハンドメイドアイテム紹介サイト"/>
<meta name="keywords" content="SICKS,KCG,京都コンピュータ学院鴨川校,鴨川校,デザイン,ハンドメイド"/>
<link rel="canonical" href="http://sicks.work/"/>
<meta name="author" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta property="og:locale" content="ja_JP"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="SICKS"/>
<meta property="og:description" content="京都コンピュータ学院鴨川校３回生デザイン学科のメンバーによるハンドメイドアイテム紹介サイト"/>
<meta property="og:url" content="http://sicks.work/"/>
<meta property="og:site_name" content="SICKS"/>
<meta property="og:image" content="../../images/ogp.png"/>
<link rel="stylesheet" type="text/css" href="css/reset.css">
<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" type="text/css" href="css/animsition.min.css">
<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="../../common/css/common.css">

<?php
  $ua=$_SERVER['HTTP_USER_AGENT'];
  $browser = ((strpos($ua,'iPhone')!==false)||(strpos($ua,'iPod')!==false)||(strpos($ua,'Android')!==false));
    if ($browser == true){
    $browser = 'sp';
  }
?>
</head>
<body id="fullpage">
	<header class="clearfix">
		<h1 class="flt-lft"><a href="#top"><span class="all_icons icon-logo"></span></a></h1>
		<ul id="icons" class="flt-rgt clearfix">
				<li class="flt-lft"><a href="../../"><span class="all_icons icon-sicksLogo"></span></a></li>
				<li class="flt-lft"><a href="http://www.facebook.com/share.php?u=http://sicks.work/" target="_blank"><i class="all_icons fa fa-facebook"></i></a></li>
				<li class="flt-lft"><a href="https://twitter.com/share?url=http://sicks.work/&text=SICKS&hashtags=SICKS" target="_blank"><i class="all_icons fa fa-twitter"></i></a></li>
				<li class="flt-lft"><a href="https://plus.google.com/share?url=http://sicks.work/" target="_blank"><i class="all_icons fa fa-google-plus"></i></a></li>
		</ul>
		<div id="icons_btns">
			<span class="icons_btn1"></span>
			<span class="icons_btn2"></span>
			<span class="icons_btn3"></span>
		</div>
		<div id="line"></div>
	</header>

	<div id="top" class="section">
			<div class="top_inner">
				<h2 class="overlay"><span class="icon-logo"></span></h2>
				<p class="topBtn bold btn"><a href="#site_caption">LEARN MORE</a></p>
			</div>
	</div>
	<article>
		<section id="site_caption" class="section">
				<div id="capBg"></div>
			<div class="inner">
				<h2 class="bold mgn-btm30">THE JUN'S COLLECTION ?</h2>
				<p class="mgn-btm30">JUN'S COLLECTIONは大崎潤がデザイン・製作したモノの集まりです。<br>
				大きく3種類に分けて、<br>
				・素材から調達し製作したアクセサリーデザイン<br>
				・部屋のインテリアに使えるオブジェデザイン<br>
				・Adobe IllustratorやPhotoshopを使ったグラフィックデザイン<br>
				のジャンルに分けています。</p>
				<?php if($browser == 'sp'): ?>
					<h3 class="medium btn"><a href="#accessory">GO TO SEE A <br class="sp">JUN'S COLLECTION</a></h3>
				<?php else: ?>
					<h3 class="medium btn"><a href="#itemsWrap">GO TO SEE A <br class="sp">JUN'S COLLECTION</a></h3>
				<?php endif; ?>
			</div>
		</section>
		
		<?php if($browser == 'sp'): ?>

			<!-- sp版 itemsWrap -->
			<h2 class="bold itemWrap-title">LINE UP ITEMS</h2>
			<div class="itemswrap_sp section accessory" id="accessory">
				<ul class="itemswrap_sp_list">
					<li class="itemswrap_sp_list_item">
						<h2 class="light mgn-btm10">JUN'S COLLECTION01</h2>
						<h3 class="bold mgn-btm5">NECKLESS</h3>
						<p class="itemswrap_sp_list_item_text">チェーンネックレス。どんなコーディネートにも合うよう、ごくごくシンプルなものにしました。</p>
						<p class="genre light">ACCESSORY</p>
					</li>
					<li class="itemswrap_sp_list_item">
						<h2 class="light mgn-btm10">JUN'S COLLECTION02</h2>
						<h3 class="bold mgn-btm5">BRACELET</h3>
						<p class="itemswrap_sp_list_item_text">シンプルなチェーンのブレスレット。何もない腕へのちょっとしたアクセントに。</p>
						<p class="genre light">ACCESSORY</p>
					</li>
					<li class="itemswrap_sp_list_item">
						<h2 class="light mgn-btm10">JUN'S COLLECTION03</h2>
						<h3 class="bold mgn-btm5">EIRCUFF</h3>
						<p class="itemswrap_sp_list_item_text">三角を模った引っ掛けるたタイプのイヤーカフ。これひとつで少しオシャレ気分。</p>
						<p class="genre light">ACCESSORY</p>
					</li>
				</ul>
			</div>
			<div class="itemswrap_sp section objet">
				<ul class="itemswrap_sp_list">
					<li class="itemswrap_sp_list_item">
						<h2 class="light mgn-btm10">JUN'S COLLECTION04</h2>
						<h3 class="bold mgn-btm5">LAMP SHADE</h3>
						<p class="itemswrap_sp_list_item_text">ボンドに浸した麻紐をボールに巻きつけ、乾燥させて固めたハンドメイドランプシェード。</p>
						<p class="genre light">OBJET</p>
					</li>
					<li class="itemswrap_sp_list_item">
						<h2 class="light mgn-btm10">JUN'S COLLECTION05</h2>
						<h3 class="bold mgn-btm5">TERRARIUM</h3>
						<p class="itemswrap_sp_list_item_text">空中の水分を体に取り入れて育つ「エアプランツ」をガラス容器に入れ部屋のオブジェに。</p>
						<p class="genre light">OBJET</p>
					</li>
					<li class="itemswrap_sp_list_item">
						<h2 class="light mgn-btm10">JUN'S COLLECTION06</h2>
						<h3 class="bold mgn-btm5">CANDLE</h3>
						<p class="itemswrap_sp_list_item_text">ロウを溶かし、刻んだクレヨンを混ぜて色付けられたキャンドル。傾けて固めることで３層に。</p>
						<p class="genre light">OBJET</p>
					</li>
				</ul>
			</div>
			<div class="itemswrap_sp section graphic">
				<ul class="itemswrap_sp_list">
					<li class="itemswrap_sp_list_item">
						<h2 class="light mgn-btm10">JUN'S COLLECTION07</h2>
						<h3 class="bold mgn-btm5">NEW YEAR'S CARD</h3>
						<p class="itemswrap_sp_list_item_text">2016年、申年の年賀状デザイン。十二支の中で猿が引き立つようなデザインに。</p>
						<p class="genre light">GRAPHIC</p>
					</li>
					<li class="itemswrap_sp_list_item">
						<h2 class="light mgn-btm10">JUN'S COLLECTION08</h2>
						<h3 class="bold mgn-btm5">CALENDER</h3>
						<p class="itemswrap_sp_list_item_text">2016年版のカレンダーデザイン。三角をモチーフに月ごとのイメージを抽象的に表しています。</p>
						<p class="genre light">GRAPHIC</p>
					</li>
					<li class="itemswrap_sp_list_item">
						<h2 class="light mgn-btm10">JUN'S COLLECTION09</h2>
						<h3 class="bold mgn-btm5">IPHONE CASE</h3>
						<p class="itemswrap_sp_list_item_text">シンプルなiPhoneケースをデザイン。</p>
						<p class="genre light">GRAPHIC</p>
					</li>
				</ul>
			</div>

		<?php else: ?>

			<!-- PC版 itemsWrap -->
			<div id="itemsWrap" class="section">
				<h2 class="bold itemWrap-title">LINE UP ITEMS</h2>
				<div id="accessory" class="genreWrap clearfix">
					<section class="items wq flt-lft clearfix">
						<p class="genre light"><span>ACCESSORY</span></p>
						<div class="mask">
							<h2 class="light">JUN'S COLLECTION01</h2>
							<div class="item_contents">
								<h3 class="bold">NECKLESS</h3>
								<p class="moreTxt light">LEARN MOER</p>
							</div>
						</div>
					</section>
					<section class="items wq flt-lft clearfix">
						<p class="genre light"><span>ACCESSORY</span></p>
						<div class="mask">
							<h2 class="light">JUN'S COLLECTION02</h2>
							<div class="item_contents">
								<h3 class="bold">BRACELET</h3>
								<p class="moreTxt light">LEARN MOER</p>
							</div>
						</div>
					</section>
					<section class="items wh flt-lft clearfix">
						<p class="genre light"><span>ACCESSORY</span></p>
						<div class="mask">
							<h2 class="light">JUN'S COLLECTION03</h2>
							<div class="item_contents">
								<h3 class="bold">EIRCUFF</h3>
								<p class="moreTxt light">LEARN MOER</p>
							</div>
						</div>
					</section>
				</div><!-- /# accessory -->
				<div id="objet" class="genreWrap clearfix">
					<section class="items wh flt-lft clearfix">
						<p class="genre light"><span>OBJET</span></p>
						<div class="mask">
							<h2 class="light">JUN'S COLLECTION04</h2>
							<div class="item_contents">
								<h3 class="bold">LAMP SHADE</h3>
								<p class="moreTxt light">LEARN MOER</p>
							</div>
						</div>
					</section>
					<section class="items wq flt-lft clearfix">
						<p class="genre light"><span>OBJET</span></p>
						<div class="mask">
							<h2 class="light">JUN'S COLLECTION05</h2>
							<div class="item_contents">
								<h3 class="bold">TERRARIUM</h3>
								<p class="moreTxt light">LEARN MOER</p>
							</div>
						</div>
					</section>
					<section class="items wq flt-lft clearfix">
						<p class="genre light"><span>OBJET</span></p>
						<div class="mask">
							<h2 class="light">JUN'S COLLECTION06</h2>
							<div class="item_contents">
								<h3 class="bold">CANDLE</h3>
								<p class="moreTxt light">LEARN MOER</p>
							</div>
						</div>
					</section>
				</div><!-- /# objet -->
				<div id="graphic" class="genreWrap clearfix">
					<section class="items wq flt-lft clearfix">
						<p class="genre light"><span>GRAPHIC</span></p>
						<div class="mask">
							<h2 class="light">JUN'S COLLECTION07</h2>
							<div class="item_contents">
								<h3 class="bold">NEW YEAR'S CARD</h3>
								<p class="moreTxt light">LEARN MOER</p>
							</div>
						</div>
					</section>
					<section class="items wh flt-lft clearfix">
						<p class="genre light"><span>GRAPHIC</span></p>
						<div class="mask">
							<h2 class="light">JUN'S COLLECTION08</h2>
							<div class="item_contents">
								<h3 class="bold">CALENDER</h3>
								<p class="moreTxt light">LEARN MOER</p>
							</div>
						</div>
					</section>
					<section class="items wq flt-lft clearfix">
						<p class="genre light"><span>GRAPHIC</span></p>
						<div class="mask">
							<h2 class="light">JUN'S COLLECTION09</h2>
							<div class="item_contents">
								<h3 class="bold">IPHONE CASE</h3>
								<p class="moreTxt light">LEARN MOER</p>
							</div>
						</div>
					</section>
				</div><!-- /# graphic -->
			</div><!-- /# itemsWrap -->
		<?php endif; ?>
		

		<section id="last" class="section">
			<div class="inner">
				<h2 class="bold">THANK YOU <br class="sp">FOR BLOWSING !</h2>
				<p class="medium btn last_sicksbtn"><a href="../../">BACK TO SICKS</a></p>
			</div>
		</section>
	</article>

	<footer>
		<div id="pagetop"><a href="#top"></a></div>
		<p class="footer_text"><a href="#top">TO THE TOP</a></p>

		<ul id="icons" class="footer_icons clearfix">
			<li class="footer_icons_item flt-lft"><a href="http://www.facebook.com/share.php?u=http://sicks.work/" target="_blank"><i class="all_icons fa fa-facebook"></i></a></li>
			<li class="footer_icons_item flt-lft"><a href="https://twitter.com/share?url=http://sicks.work/&text=SICKS&hashtags=SICKS" target="_blank"><i class="all_icons fa fa-twitter"></i></a></li>
			<li class="footer_icons_item flt-lft"><a href="https://plus.google.com/share?url=http://sicks.work/" target="_blank"><i class="all_icons fa fa-google-plus"></i></a></li>

		</ul>
		<p class="footer_text">SHARE THE JUN'S COLLECTION</p>
		<p class="footer_copy"><small>© JunOsaki All Rights Reserved</small></p>
	</footer>


	<div id="black_layer"></div>
	<div id="contents_layer">
		<div class="contents_layer_content">
			<div class="slide" id="container"><div id="theTarget"></div></div>
		</div>
		<div id="tl" class="contents_frame"></div><div id="tr" class="contents_frame"></div>
		<div id="bl" class="contents_frame"></div><div id="br" class="contents_frame"></div>
		<div id="next"></div>
		<div id="prev"></div>
		<div id="close_btn_wrap"><div id="close_btn"></div></div>
	</div>

	<div class="top_link">
	    <p><a href="../../"><img src="../../common/images/ico_top.png" height="122" width="140">
	    <img src="../../common/images/ico_top_on.png"></a></p>
	</div>

	<script type="text/javascript" src="./js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="./js/jquery.easing.1.3.js"></script>
	<script type="text/javascript" src="./js/ajax.js"></script>
	<script type="text/javascript" src="./js/main.js"></script>
</body>
</html>
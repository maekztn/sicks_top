<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title></title>
<meta charset="utf-8">
<meta name="description" content="">
<meta name="author" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="../css/reset.css">
<link rel="stylesheet" href="../css/index.css">
<link rel="stylesheet" href="../css/animsition.min.css">
<link rel="shortcut icon" href="">
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="../js/index.js"></script>
<?php
  $ua=$_SERVER['HTTP_USER_AGENT'];
  $browser = ((strpos($ua,'iPhone')!==false)||(strpos($ua,'iPod')!==false)||(strpos($ua,'Android')!==false));
    if ($browser == true){
    $browser = 'sp';
  }
?>
</head>
<body id="about">
<div class="loading">
    <div class="loading-inner">
        <p class="loading-txt">Loading</p>
        <div class="loading-img"><img src="../images/loading.gif" alt="ロード中"></div>
    </div>
</div>
<div class="nav-btn">
    <div class="icons_btn">
        <span class="icons_btn1"></span>
        <span class="icons_btn2"></span>
        <span class="icons_btn3"></span>
    </div>
</div>
<nav class="side-menu">
    <dl class="side-menu-list">
        <dt><a href="/">HOME</a></dt>
        <dt><a href="/about/">ABOUT</a></dt>
        <dt>SUBJECT</dt>
        <dd><a href="/">All</a></dd>
        <dd><a href="/">Art &amp; Design</a></dd>
        <dd class="disabled"><a href="#">Business &amp; Management</a></dd>
        <dd class="disabled"><a href="#">Computer Science</a></dd>
        <dd class="disabled"><a href="#">DigitalGame &amp; Amusument</a></dd>
        <dd class="disabled"><a href="#">Engineering for Embedded Systems</a></dd>
        <dt>SHARE</dt>
        <dd><a href="http://www.facebook.com/share.php?u=http://sicks.work/" target="_blank">Facebook</a></dd>
        <dd><a href="https://twitter.com/share?url=http://sicks.work/&text=SICKS&hashtags=SICKS" target="_blank">Twitter</a></dd>
        <dd><a href="http://line.me/R/msg/text/?SICKS | 京都コンピュータ学院鴨川校3回生デザイン学科のメンバーによるハンドメイドアイテム紹介サイト%0D%0Ahttp://sicks.work/" target="_blank">LINE</a></dd>
        <dt><a href="../privacypolicy/index.php">PRIVACY POLICY</a></dt>
    </dl>
</nav>

<article class="ab-container">
    <h2 class="ab-ttl">ABOUT</h2>
    <section class="ab-section">
        <h3 class="ab-section-ttl">このサイトについて</h3>
        <div class="">
          <ul class="images1 clearfix">
            <li><img src="../images/kitao_about.png" alt="parson1" class="frame"/></li>
            <li><img src="../images/seto_about.png" alt="parson2" class="frame"/></li>
            <li><img src="../images/oosaki_about.png" alt="parson3" class="frame"/></li>
          </ul>
          <ul class="images2 clearfix">
            <li><img src="../images/oomae_about.png" alt="parson4" class="frame"/></li>
            <li><img src="../images/oomae_about.png" alt="parson5" class="frame"/></li>
            <li><img src="../images/tanimoto_about.png" alt="parson6" class="frame"/></li>
          </ul>
        </div>
        <p>京都コンピュータ学院で勉強している違う学科の生徒との交流を促進させるためのサイトです。<br />
普段違う校舎で勉強していることもありお互い「何ができてどのようなものが作れるのか」知る機会が少ないと思います。<br />
本サイトで自分を紹介することでプロジェクト演習でのマッチングや各校舎間、校舎内の交流を活発していくことが可能ではないかと考えています。</p>
    </section>
</article>

<footer class="footer">
    <p><small>Copyright &copy; sicks All Rights Reserved.</small></p>
</footer>

</body>
</html>

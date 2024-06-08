$('.slider').slick({
    autoplay: true,//自動的に動き出すか。
    infinite: true,//スライドをループさせるかどうか。
    speed: 500,//スライドのスピード。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
  });


  $(document).ready(function() {
    // 全てのナビゲーションリンクにクリックイベントを設定
    $('.nav-link, #cart-icon-link, .logo').on('click', function(event) {
        event.preventDefault(); // デフォルトのリンク動作を防止
        var goTo = this.getAttribute("href"); // リンク先のURLを取得

        $('body').addClass('fade-out'); // bodyタグにfade-outクラスを追加

        setTimeout(function() {
            window.location = goTo; // 指定時間後にページ遷移
        }, 800);
    });
});




$(document).ready(function() {
	const numStars = 100; // 星の数
	const starContainer = $('#star-background');
  
	for (let i = 0; i < numStars; i++) {
	  const star = $('<div class="star"></div>');
	  const size = Math.random() * 3; // 星のサイズをランダムに
	  const posX = Math.random() * 100; // 星の位置Xをランダムに
	  const posY = Math.random() * 100; // 星の位置Yをランダムに
	  const animationDuration = Math.random() * 10 + 5; // アニメーションの長さをランダムに
  
	  star.css({
		width: size + 'px',
		height: size + 'px',
		top: posY + '%',
		left: posX + '%',
		animation: `twinkle ${animationDuration}s infinite alternate`
	  });
  
	  starContainer.append(star);
	}
  });
  

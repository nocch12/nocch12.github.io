/*
	Tessellate by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

$(function ($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		wide: ['1281px', '1680px'],
		normal: ['1001px', '1280px'],
		narrow: ['737px', '1000px'],
		mobile: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Scrolly.
	$('.scrolly').scrolly();

	// gnav.
	$('.menu').on('click', function () {
		$(this).toggleClass('active-line');
		$('.menu__line').toggleClass('active');
		$('.gnav').fadeToggle();
	});




	$(function () {
		// #で始まるリンクをクリックしたら実行されます
		$('.gnav').find('a[href^="#"]').click(function () {
			// スクロールの速度
			var speed = 600; // ミリ秒で記述
			var href = $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$('body,html').animate({ scrollTop: position }, speed, 'swing');
			return false;
		});
	});

	$(function () {
		let topBtn = $('#to_top');

		// スクロールして下に行くと表示される
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				topBtn.fadeIn();
			} else {
				topBtn.fadeOut();
			}
		});

		//ボタンクリックでスクロールしてトップ
		topBtn.click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
	});


});

// gallary.
var options = {
	caption: function (trigger) {
		return trigger.querySelector('img').getAttribute('alt');
	},
}
var luminousTrigger = document.querySelectorAll('.luminous');
new LuminousGallery(luminousTrigger, {}, options);  //LuminousGalleryで第二引数galleryOptsを特に指定しない場合は {} でOK


$(function () {
	$(window).on('load', function () {
		$('.fade-in').each(function (i) {
			$(this).delay(1000 * i).fadeIn(2000);
		});

		return false;
	});
});
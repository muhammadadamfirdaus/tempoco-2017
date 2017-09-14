/*
==============
JS for - New TEMPO.CO 2017
Developed and Customized by
Muhammad Adam Firdaus
http://www.muhammadadamfirdaus.com/
==============
 */

$(function(){
	// PreLoad
	// setTimeout(function removepreload(){
	// 	$('#preload').hide();
	// 	$('.container').css({'visibility':'visible'});
	// }, 3000);

	// if(!localStorage.getItem('viewed')){
  //   setTimeout(function () {
  //     console.log('pertama-kali');
  //     localStorage.setItem('viewed','yes');
  //   }, 8000);
	// };
	
	//sticky-search notification
	if(!localStorage.getItem('saya mengerti')){
		var contentTooltipHeaderBottom = $('<div class="tooltip red-500"><div class="wrapper"><div class="arrow-up"></div><p>Manfaatkan kemudahan pencarian artikel TEMPO.CO</p><div class="wrapper"><a class="white" href="#">Saya mengerti</a></div></div></div>');
		$('.header-bottom li a.search-button').append(contentTooltipHeaderBottom);
		setTimeout(function(){
			var tooltipHeaderBottom = $('.header-bottom .tooltip');
			tooltipHeaderBottom.addClass('active');
			tooltipHeaderBottom.add('a .white').on('click', function(e){
				e.preventDefault();
				e.stopImmediatePropagation();
				tooltipHeaderBottom.removeClass('active');
				setTimeout(function(){
					contentTooltipHeaderBottom.detach();
				}, 800);
				localStorage.setItem('saya mengerti','yes');
			});
		}, 2500);
	}
	

	// survey front-end
	// $('.container').append('<div class="sticky survey-front"><a class="survey" href="https://goo.gl/forms/zmBQRN3CJIGI4qog1?utm_source=Close&utm_medium=Survey&utm_campaign=ButtonSurveyClose" target="blank"><h4>Kami ingin mendengar dari Anda</h4><p>Berikan penilaian seputar tampilan baru TEMPO.CO</p></a><center><a class="survey button" href="https://goo.gl/forms/zmBQRN3CJIGI4qog1?utm_source=Close&utm_medium=Survey&utm_campaign=ButtonSurveyClose" target="blank">Klik Di Sini</a></center><span>* kami jamin tidak akan lama</span><a href="#" class="close">x</a></div>');
	// $('.survey-front a.close').on('click', function(e){
	// 	e.preventDefault();
  //   e.stopImmediatePropagation();
  //   $('.survey-front').removeClass('active').addClass('survey-closed');
  //   $('.survey-front a.close').attr('data-click', 'clicked');
	// 	
	// 	if($('.survey-closed').length || $('.survey-front a.close[data-click]').length){
	// 		// console.log('ada close');
	// 		setTimeout(function(){
	// 			$('.survey-front').detach();
	// 		}, 300);
	// 	}
	// });
	
	// $('.survey-front a.survey').on('click', function(e){
	// 	// e.preventDefault();
  //   e.stopImmediatePropagation();
  //   // $('.survey-front').removeClass('active').addClass('survey-closed');
  //   $('.survey-front a.survey').attr('data-click', 'clicked');
	// 	
	// 	if($('.survey-closed').length || $('.survey-front a.survey[data-click]').length){
	// 		console.log('ada close');
	// 		setTimeout(function(){
	// 			$('.survey-front').detach();
	// 		}, 3000);
	// 	}
	// });

	var tempo2017forthefirsttime = new Swiper('.tempo-2017-tutorial', {
		pagination: '.swiper-pagination',
		paginationClickable: true
	});

	// Go To
	$('a[href^="#"].scroll').on('click', function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 2000);
		return false;
	});

	/* head focus */
	var headFocus = new Swiper('.head-focus', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
		paginationClickable: true,
		direction: 'vertical',
		autoplay: 2000,
		autoplayDisableOnInteraction: false,
		loop: true,
		spaceBetween: 20,
		onAutoplayStop: function(){
			setTimeout(function(){
				headFocus.updateContainerSize();
			}, 2000);
		}
	});
	/* end head focus */

	/* desktop menu */
	var submenuDesktop = $(this).find('.sub ul');
	$('.menu li.sub').on('mouseenter', function(){
		// console.log('ox');
		$(this).not(submenuDesktop).addClass('sub-menu-active');
		$(this).siblings(submenuDesktop).removeClass('sub-menu-active');
	}).on('mouseleave', function(){
		$('.sub').removeClass('sub-menu-active');
	});
	/* end desktop menu */

  function resetmobileMenu(){
    $('.menu').removeClass('menu-collapsed menu-expanded');
    menubutton.removeClass('close');
    $('#menu-button').detach();
  }

  function mobileMenu(){
    menubutton = $('.menu-mobile');
		menu = $('.menu');

    if($('.menu-mobile a').filter(function() {
        return $.trim($.text(this)) === 'Close';
      }).length){
      $('.menu-mobile a').html('Menu');
    }

    function menumobileexpand(){
      if(menu.hasClass('menu-expanded')){
        menubutton.removeClass('close');
        removemenumobile();
      } else {
        menubutton.addClass('close');
        menu.addClass('menu-expanded').removeClass('menu-collapsed');
      }

      if($('.close').length){
        $('.menu-mobile a').html('Close');
      } else {
        $('.menu-mobile a').html('Menu');
      }
    }

    function removemenumobile(){
      if($('.menu-collapsed').length){
        menu.removeClass('menu-collapsed');
      } else {
        menu.removeClass('menu-expanded').addClass('menu-collapsed').delay(1000).queue(function(){
          $('.sub').css({'display':'none'});
        });
      }
    }

    removemenumobile();

    /* buka menu */
    $('.menu-mobile').on('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();

      menumobileexpand();
    });

    /* klik link menunya */
    $('.menu a').off('click').on('click', function(e){
      e.stopImmediatePropagation();
      return true;
    });

		$('.night-mode-button').off('click').on('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();

			if($('.night-mode-button-active').length){
				// console.log('night mode off');
				$('.night-mode-button').removeClass('night-mode-button-active');
				// setTimeout(function(){
					$('.container').removeClass('night-mode');
				// }, 2200);
			} else {
				// console.log('night mode activated');
				$('.night-mode-button').addClass('night-mode-button-active');
				// setTimeout(function(){
					$('.container').addClass('night-mode');
				// }, 2200);
			}
    });

    /* expand collapse sub menu */
		$('.has-sub').off('click').on('click', function(e){
			e.preventDefault();
      e.stopPropagation();
			var submenu = $(this).find('.sub');
			$('.sub').not(submenu).css({'display':'none'});
			submenu.css({'display':'block'});
		});

		/* tutup menu */
		$(document).on('click', function(e){
			e.preventDefault();
			e.stopPropagation();
			if(e.target.className != 'menu-mobile'){
				removemenumobile();

				menubutton.removeClass('close');
				$('.menu-mobile a').html('Menu');
				menu.removeClass('menu-expanded').addClass('menu-collapsed').delay(1000).queue(function(){
					$('.sub').css({'display':'none'});
				});
			}
		});
	}

	var submenuDesktop = $(this).find('.sub ul');
	$('.menu li.sub').on('mouseenter', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		$(this).not(submenuDesktop).addClass('sub-menu-active');
		$(this).siblings(submenuDesktop).removeClass('sub-menu-active');
	}).on('mouseleave', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		$('.sub').removeClass('sub-menu-active');
	});

	/* tab */
	$('.tab .tab-pagination li a').on('click', function(e) {
    var $tabs = $(this).closest('.tab');
    $tabs.find('.tab-pagination a.current').removeClass('current');
    $(this).addClass('current');

    $tabs.find('div.tab-content-slide:not(:hidden)').removeClass('selected');
    $(this.hash).addClass('selected');

    e.preventDefault();
  });

	$('.tab .tab-pagination li:last-child a').on('click', function(e){
		window.location.href = $(this).attr("href");
	});

	var subTab = $(this).find('.sub-tab ul');
	$('.tab-pagination li.sub-tab').on('mouseenter', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		$(this).not(subTab).addClass('sub-tab-active');
		$(this).siblings(subTab).removeClass('sub-tab-active');
	}).on('mouseleave', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		$('.sub-tab').removeClass('sub-tab-active');
	});
	/* end tab */

	/* onscroll */
	var stickyheader = $('.header-bottom');
	var iklanTeratasDesktop = $('.ads.top-banner.premium-head');
	var jarakheader = stickyheader.offset().top + 50;

	var stickyrectangle3 = $('.r3');
	var jarakstickyrectangle3 = stickyrectangle3.offset().top;

	var navigationHeader = $('.tab-pagination');
	var hasScrolled = $('.header-top').offset().top + 1000;
	
	var searchPindah = $('#search');

	var timer;
	var headerBottom = $('.header-bottom');
	var stickySearch = $('.search-button');
	var extension = $('#extension');
	var trendingList = $('#trending.list');
	stickySearch.on('click', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		headerBottom.addClass('sticky-search-active');
		extension.add('.sticky-search').addClass('active');
	});
	
	var inputSearch = $('#sticky-search.col input.col');
	inputSearch.on('click', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		extension.add(trendingList).addClass('active');
	});
	
	$('#back.button').on('click', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		headerBottom.removeClass('sticky-search-active');
		extension.add('.sticky-search').removeClass('active');
		extension.add(trendingList).removeClass('active');
	});
	
	$(document).on('click', function(e){
		e.stopImmediatePropagation();
		trendingList.removeClass('active');
	});
	
	function sticky(){
		var scroll = getCurrentScroll();
		
  	if(scroll > jarakheader){
			iklanTeratasDesktop.css('margin-top', jarakheader);
			$('header').addClass('sticky sticky-header');
			$('#skin-ad').addClass('sticky');
  	} else {
			iklanTeratasDesktop.css('margin-top', '10px');
			headerBottom.removeClass('sticky-search-active');
			extension.add('.sticky-search').removeClass('active');
  		$('header').removeClass('sticky sticky-header');
			$('#skin-ad').removeClass('sticky');
		}

		var section3 = $('.kanal-pilihan');
		if($('#home .r3').length){
			if(scroll > jarakstickyrectangle3){
				$('.r3').removeClass('lepas').addClass('sticky');
			} else {
				$('.r3').removeClass('sticky');
			}
		
			var overSection3 = section3.offset().top - 300;
			if(scroll > overSection3){
				$('.r3').addClass('lepas').removeClass('sticky');
			}
		}

		if($('#home').length){
			if(scroll > hasScrolled){
				$('.survey-front').addClass('active');
			} else {
				$('.survey-front').removeClass('active');
			}
		}
		
		//indikator
		var	indikatorLainnya = $('#list-indikator.indikator');
		if($('#list-indikator.indikator').length){
			var hasilSurveyContainer = $('.data-hasil');
					indikatorLainnyaJarak = indikatorLainnya.offset().top - hasilSurveyContainer.offset().top;
			
			if(scroll < indikatorLainnyaJarak){
				console.log('lepas');
				hasilSurveyContainer.removeClass('sticky');
				$('#list-indikator.indikator').css('margin-top', 'initial');
			} else {
				console.log('pasang');
				hasilSurveyContainer.addClass('sticky');
				$('#list-indikator.indikator').css('margin-top', '400px');
			}
		}

		// var article = $('article'),
		// 		komentar = $('.comments'),
		// 		komentarHasScrolled = section3.offset().top + section3.height();
		// if(komentar.length || article.length){
		// 	if(scroll >= komentarHasScrolled){
		// 		komentar.addClass('sticky');
		// 	} else {
		// 		komentar.removeClass('sticky');
		// 	}
		// }

		// if($('#category').length){

		// 	var jaraknavigationHeader = navigationHeader.offset().top - 0;
		// 	var listkategoripertama = $('#category .tab-content li:nth-of-type(1)');
		// 	if(scroll > jaraknavigationHeader){
		// 		console.log('hi');
		// 		navigationHeader.addClass('sticky');
		// 		listkategoripertama.css('margin-top', '40px');
		// 	} else {
		// 		navigationHeader.removeClass('sticky');
		// 		listkategoripertama.css('margin-top', 0);
		// 	}
		// }
	}

  $(window).on('load scroll', function(){
		/* clear the old timeout */
    clearTimeout(timer);
    /* wait until 400 ms for callback */
    timer = setTimeout(sticky, 0);
	});

	function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
	/* end onscroll */
	
	/* datepicker */
	var inputTanggal = $('input#tanggal');
	var picker = new Pikaday({
		field: document.getElementById('tanggal'),
		firstDay: 0,
		minDate: new Date(2011, 11, 31),
		maxDate: new Date,
		yearRange: [2000],
		container: document.getElementById('datepicker'),
		format: 'DD/MM/YYYY',
		toString(date, format) {
			// you should do formatting based on the passed format,
			// but we will just return 'D/M/YYYY' for simplicity
			var day = date.getDate();
			var month = date.getMonth() + 1;
			var year = date.getFullYear();

			if(day < 10){
				day = '0'+day;
			}
			if(month < 10){
				month = '0'+month;
			}
			var dmy = +year+'/'+month+'/'+day;
			// return `${day}/${month}/${year}`;
			return dmy;
		},
		parse(dateString, format) {
			// dateString is the result of `toString` method
			const parts = dateString.split('/');
			var day = parseInt(parts[0], 10);
			var month = parseInt(parts[1] - 1, 10);
			var year = parseInt(parts[1], 10);
			if(day < 10){
				day = '0'+day;
			}
			if(month < 10){
				month = '0'+month;
			}
			var dmy = +year+'/'+month+'/'+day;
			//return new Date(year, month, day);
			return dmy;
		}
	});

	inputTanggal.on('change', function(e) {
		e.preventDefault();
		var tanggal = $('#tanggal').val();
		window.location = "https://www.tempo.co/indeks/"+tanggal;
	});

	var fotoHome = new Swiper('.foto-home', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		paginationClickable: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
      rotate: 10,
      stretch: 0,
      depth: 120,
      modifier: 1,
      slideShadows : true
    }
  });

	var categoryHeadline = new Swiper('.category-headline', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		paginationClickable: true,
		grabCursor: true,
		centeredSlides: true,
		loop: true,
		slidesPerView: 4,
		spaceBetween: 25
	});

	//detail foto
	var fotoDetail = new Swiper('#detail-foto .foto-home', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		paginationClickable: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflow: {
      rotate: 30,
      stretch: 0,
      depth: 120,
      modifier: 1,
      slideShadows : true
    }
  });
	
	var kolomKonten = new Swiper('.kolom-konten', {
      spaceBetween: 10,
			centeredSlides: true,
  });
	
  var kolomNavigation = new Swiper('.kolom-navigation', {
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
			freeMode: true,
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
  });
	
  kolomKonten.params.control = kolomNavigation;
  kolomNavigation.params.control = kolomKonten;
	
	$('.swiper-container.kolom-navigation').on('mouseenter', function(e){
		e.preventDefault();
		kolomNavigation.startAutoplay();
	});
	
	var majalahSlide = new Swiper('.majalah', {
		autoplay: 5000,
		pagination: '.swiper-pagination',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true,
		effect: 'flip'
	});

	if($('#gallery').length){
		// console.log('foto');
		$('body').attr('id', 'gallery');
		var fotoDetail = '.foto-home img'
		$('.foto-home').photoSwipe();

		if($('.pswp--open').length){
			$('.foto-home figcaption').css({
				'display':'block'
			});
		} else {
			$('.foto-home figcaption').css({
				'display':'none'
			});
		}
	}

	// Photoswipe
	if($('figure').length){
		var slideSelector = 'figure img',
		options     = {bgOpacity: 0.8},
   	events      = {
        close: function () {
            // console.log('closed');
        }
    };
		$('article').photoSwipe(slideSelector, options, events);
	}

	// curl ads
	var curlAds = $('.curl-ads');
	curlAds.add('.curl').on('mouseenter', function(){
		// console.log('hi');
		curlAds.addClass('expanded').removeClass('collapsed');
	});
	curlAds.on('mouseleave', function(e){
		e.stopImmediatePropagation();
		// console.log('out');
		curlAds.addClass('collapsed').removeClass('expanded');
	});

	// bottom ads
  if($('.bottom-banner').length){
    var bottomAdsCloseButton = $('.bottom-banner button');
    bottomAdsCloseButton.on('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      // console.log('closing');
      $('.bottom-banner').addClass('bottom-banner-closed');
    });
  }

	// premium head
	var premiumHead = $('.premium-head');
	var premiumSmall = $('.premium-head-small');
	var premiumBig = $('.premium-head-big');
  if(premiumSmall.length){
    premiumHead.on('mouseenter', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      // console.log('opening');
	    premiumSmall.addClass('deactive');
	    premiumBig.addClass('active');
    });
		premiumHead.on('mouseleave', function(e){
			e.preventDefault();
			e.stopImmediatePropagation();
			premiumSmall.removeClass('deactive');
			premiumBig.removeClass('active');
		});
  }
	
	// full width
	if($('.ads-full-width').length){
		$('main.ads-full-width .container-desktop > .wrapper').css({
			'background-color': '#fff',
			'padding': '10px'
		});
		$('#skin-ad .container-desktop.skin-ad .wrapper, main > .container-desktop:first-child').css({
			'background-color': 'none',
			'padding': 0
		});
	}

	// popup ads
	// if($('.popup-ads').length){
	// 	var popupAdsCloseButton = $('.popup-ads button');
	// 	setTimeout(function(){
	// 		$('.popup-ads').addClass('active');
	// 	}, 3000);
	// 	setTimeout(function(){
	// 		$('.popup-ads').addClass('popup-ads-closed');
	// 	}, 15000);
	// 	popupAdsCloseButton.on('click', function(e){
	// 		e.preventDefault();
	// 		e.stopImmediatePropagation();
	// 		// console.log('closing');
	// 		$('.popup-ads').addClass('popup-ads-closed');
	// 	});
	// }

	// Ads Zoom
	// if($('.xzoom').length){
	// 	$(".xzoom").xzoom({
	// 		tint: '#333',
	// 		position: '#ads-screen',
	// 		smoothLensMove: 1,
	// 		defaultScale: 2,
	// 		zoomWidth: 200
	// 	});
	// }

	function windowopen(url, title, w, h) {
	    // Fixes dual-screen position Most browsers Firefox
	    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
	    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

	    width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	    height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

	    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
	    var top = ((height / 2) - (h / 2)) + dualScreenTop;
	    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

	    // Puts focus on the newWindow
	    if (window.focus) {
	        newWindow.focus();
	    }
	}

	// Google Analytics
	// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	// })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	// 
	// ga('create', 'UA-57161828-3', 'auto', {'allowAnchor': true});
	// ga('set', {
	// 	page: '/#terbaru'
	// });
	// 
	// ga('send', 'pageview', {
	// 	'page': location.pathname + location.search + location.hash
	// });
	// 
	// // Google Tag Manager
	// (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  // })(window,document,'script','dataLayer','GTM-TVGQF5T');

	
});


		$(document).ready(function(){

			var swiper = new Swiper('.swiper-container', {
		      effect: 'coverflow',
		      grabCursor: true,
		      centeredSlides: true,
		      slidesPerView: 'auto',
		      coverflowEffect: {
		        rotate:50,
		        stretch: 0,
		        depth: 100,
		        modifier: 1,
		        slideShadows : true,
		      },
		      pagination: {
		        el: '.swiper-pagination',
		      },
		    });
		    
			$(".gooey span").draggable();

			var mainSlider = $(".main-slider").bxSlider({
				stopAutoOnClick:true,
				auto:true,
				controls:false,
				pager:true,
				mode:'horizontal',
				speed:800,
			});
			
			$(".nextBtn").click(function(){
				mainSlider.goToNextSlide();
			});

			$(".prevBtn").click(function(){
			   mainSlider.goToPrevSlide();
			});

			var gamesSlider = $(".gamesSlider").bxSlider({
				controls:false,
				pager:true,
				mode:'horizontal',
				speed:1000,
			});

			var kpopSlider = $(".kpopSlider").bxSlider({
				auto:true,
				stopAutoOnClick:true,
				controls:false,
				pager:true,
				mode:'horizontal',
				speed:1000,
			});


			var riftSlider = $(".riftSlider").bxSlider({
				auto:true,
				controls:false,
				pager:true,
				mode:'horizontal',
				speed:1000,
			});

			var testSlider = $(".TestSlider").bxSlider({
				auto:true,
				controls:false,
				pager:true,
				mode:'horizontal',
				speed:1500,
			});

				
			$('.navMenu').click(function(){
				$('.navMenu').removeClass('active');
				$(this).addClass('active');
			});	

			$('.languege').click(function(){
				$('.languege').removeClass('active');
				$(this).addClass('active');
			});

			$('.newsMainVideoHoverBox').mouseover(function(){
				$(this).addClass('active');
			});

			$('.gamesSliderHoverBox').mouseover(function(){
				$(this).addClass('active');
			});

			$('.zurkerberg_productContent_Box').mouseover(function(){
				$(this).addClass('active');
				$(".zurkerberg_questText").addClass('bounceIn','wow');
				$(".zurkerberg_riftText").addClass('bounceIn','wow');
				$(".zurkerberg_goText").addClass('bounceIn','wow');
			});

			$('.hamberger').click(function(){
				$(".main-nav").toggleClass('reponsive');
			});

			$('.navMenuC').click(function(){
				alert("준비중입니다.");
			});	

			$(".alert").click(function(){
				alert("Rift S, Go 는 현재 준비중입니다:)")
			});

			$(".gameCardsTopText > a").click(function(){
				alert("포트폴리오 사이트입니다. 공식 사이트를 이용해주세요:)")
			});


			$(window).on('scroll',function(){
				if($(window).scrollTop()){
					$('.main-navBox').addClass('black');
				}
				else{
					$('.main-navBox').removeClass('black');
				}
			});

			$('.modal').colorbox({
				rel:"modal"
				});

			$(".youtube").colorbox({
				iframe:true,
				innerWidth:"70%",
				innerHeight:"70%",
			})
			new WOW().init();
		});

		var footerback = document.getElementById('footerQuestBack');
		window.onmousemove = function (e) {
		    var x = - e.clientX/50,
		        y = - e.clientY/50;
		    footerback.style.backgroundPositionX = x + 'px';
		    footerback.style.backgroundPositionY = y + 'px';
		};

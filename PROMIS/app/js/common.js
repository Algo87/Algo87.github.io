$('.search').click(function(){
	$('.search_form').addClass("show-search-form");
	$('.nav').addClass('hidden-nav');
});

$('#close-search').click(function(){
	$('.search_form').removeClass("show-search-form");
	$('.nav').removeClass('hidden-nav');
});





$('.main_slider').slick({

	dots: false,
	infinite: true,
	slidesToShow: 1,
	arrows: true,
	nextArrow: '<button id="prev"  class="arrow_prev"></button>',
	prevArrow: '<button id="next"  class="arrow_next"></button>',
	responsive: [
	{
		breakpoint: 1024,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true,
			arrows: false
		}
	}
	]


});


$('.client-slider').slick({
	arrows:false,
	dots: false,
	infinite: true,
	slidesToShow: 2,
	adaptiveHeight: true,
	draggable:true,
	variableWidth: true,
	autoplay:true, 
	autoplaySpeed:600,
	pauseOnFocus:true
});



function mapActive(){
	
	if(!!$('.svg-map').length){

		var arrSuf = ['uk', 'kz', 'ui', 'nl', 'lt', 'cz', 'it', 'de', 'fr', 'tr', 'ru'];
		var arr=[];
		for (let i=0; i<arrSuf.length; i++){
			arr.push({idMap: arrSuf[i]+'-map', idLine:arrSuf[i]+'-line', idTriangle:arrSuf[i]+'-triangle', idFlag: arrSuf[i]+'-flag', idPoint:arrSuf[i]+'-point'})
		}

		for(let i=0; i<arr.length; i++){

			function showPartMap(){
				document.getElementById(arr[i].idLine).classList.add('active-line');
				document.getElementById(arr[i].idTriangle).classList.add('active-triangle');
				document.getElementById(arr[i].idPoint).classList.add('active-point');
			};

			function hidePartMap(){
				document.getElementById(arr[i].idLine).classList.remove('active-line');
				document.getElementById(arr[i].idTriangle).classList.remove('active-triangle');
				document.getElementById(arr[i].idPoint).classList.remove('active-point');
			};


			document.getElementById(arr[i].idMap).addEventListener('mouseover', function(){
				document.getElementById(arr[i].idFlag).classList.add('active-flag');
				document.getElementById(arr[i].idMap).classList.add('active-color');

				showPartMap();

			});
			document.getElementById(arr[i].idMap).addEventListener('mouseout', function(){
				document.getElementById(arr[i].idFlag).classList.remove('active-flag');
				document.getElementById(arr[i].idMap).classList.remove('active-color');

				hidePartMap();
			});

			document.getElementById('by-map').addEventListener('mouseover', function(){
				showPartMap();
				document.getElementById('by-point').style.stroke='#5e574c';
			});
			document.getElementById('by-map').addEventListener('mouseout', function(){
				hidePartMap();
				document.getElementById('by-point').style.stroke='#ff9729';
			});
			document.getElementById(arr[i].idPoint).addEventListener('mouseover', function(){
				document.getElementById(arr[i].idFlag).classList.add('active-flag');
				document.getElementById(arr[i].idMap).classList.add('active-color');

				showPartMap();
			});
			document.getElementById('by-point').addEventListener('mouseover', function(){
				showPartMap();
				document.getElementById('by-point').style.stroke='#5e574c';
			})

		}



	}
	

}
mapActive();





$('.mCustomScrollbar').mCustomScrollbar({ 
	axis: "x",
	theme:"my-theme",
        // setHeight:'367px',
        setWidth: '100%',
        scrollbarPosition: "inside",
        keyboard:{ enable: true },
        mouseWheel:{ enable: true },   
        scrollInertia:1000

    });

$(document).ready(function() {

	$('#subscription-form').validate({

		rules: {
			email: {
				email: true,
				required: true
			}
		},

		messages: {

			email: {
				email: "Введите корректный e-mail",
				required: "Поле обязательно к заполнению"
			}

		},
		errorElement: "div",
		
		submitHandler: function(form) {
			event.preventDefault();
			$('#subscription-button').removeClass('subscription-button-active');
			
			$('.btn').removeClass('btn-active');
			alert();
			cleanForm('subscription-form');
		},
		highlight: function (element, errorClass, validClass) { 
			$('#subscription-button').removeClass('subscription-button-active');
			$('.btn').removeClass('btn-active');


		}, 

		unhighlight: function (element, errorClass, validClass) { 
			
			$('#subscription-button').addClass('subscription-button-active');
			$('.btn').addClass('btn-active');
		}
	});


	$('#contacts-form').validate({

		rules: {
			email: {
				email: true,
				required: true,
				remote: {
					url: "js/form.json"

					

				}
			},
			name: {
				required:true,
				minlength: 2,
				

				
			},
			phone: {
				required:true,
				minlength:5,
				

			}

		},

		messages: {

			email: {
				email: "Введите корректный e-mail",
				required: "Поле обязательно к заполнению"


			},
			name: {
				required:"Поле обязательно к заполнению",
				minlength: "введите не менее 2-х символов"
			},
			phone:{
				required:"Поле обязательно к заполнению",
				minlength: "введите не менее 5-х символов"
			},
			remote:{ }

		},
		errorElement: "div",

		submitHandler: function(form) {
			
			
			event.preventDefault();
			$(form).find('input').css('border', '2px solid #e5e1db');
			$(form).find('textarea').css('border', '2px solid #e5e1db');
			alert("thank you!!!");
			cleanForm('contacts-form');

		},
		highlight: function (element, errorClass, validClass) { 
			console.log(element)
			$(element).css('border', '2px solid #ff4141');

		}, 

		unhighlight: function (element, errorClass, validClass) { 

			$(element).css('border', '2px solid #ff8b11');
		}
	});


	function cleanForm(formId){
		var form = document.getElementById(formId);
		for(var i=0; i<form.elements.length;i++){
			form.elements[i].value="";
		}
	}
});

function burgerToggle(){
	$('.burger_menu').click(function(){
		if($('.burger-menu-button').hasClass('burger_menu_close')){

			$('.burger-menu-button').addClass('burger_menu_open');	
			$('.burger-menu-button').removeClass('burger_menu_close');	

			$('.nav-mobile').addClass('nav-mobile-open');
			$('.nav-mobile').removeClass('nav-mobile-close');

			$('.body').addClass('body_position_close');
			$('.body').removeClass('body_position_open');

			$('.header_mobile').addClass('scroll-no');

		}else{

			$('.burger-menu-button').addClass('burger_menu_close');	
			$('.burger-menu-button').removeClass('burger_menu_open');

			$('.nav-mobile').addClass('nav-mobile-close');
			$('.nav-mobile').removeClass('nav-mobile-open');

			$('.body').addClass('body_position_open');
			$('.body').removeClass('body_position_close');

			$('.header_mobile').removeClass('scroll-no');
		}
	})
}

burgerToggle();

function mobileCatalogList(){
	$('.mobile-catalog-list').click(function(){
		if($('.mobile-catalog').hasClass('mobile-catalog-close')){

			$('.mobile-catalog').addClass('mobile-catalog-open');
			$('.mobile-catalog').removeClass('mobile-catalog-close');

			$('.burger_menu').css('z-index', '5');

		}else{
			$('.mobile-catalog').addClass('mobile-catalog-close');
			$('.mobile-catalog').removeClass('mobile-catalog-open');



		}
	});
	$('.back').click(function(){
		$('.mobile-catalog').addClass('mobile-catalog-close');
		$('.mobile-catalog').removeClass('mobile-catalog-open');
		$('.burger_menu').css('z-index', '10');
	})

}
mobileCatalogList();


function changeMainNews(){
	var navArticle=$(".nav-article").find( $(".article-page") );
	
	navArticle.click(function(){

		var dataIdArticle=$(this).attr('data-id');
		
		$('.article-page').removeClass('active-main-article');
		$('#' + dataIdArticle).addClass('active-main-article');

		var lastHeadBreadcrumbs=$('.header-breadcrumbs').find('a').last();

		var textLastHeadBreadcrumbs=$(this).find('h3').html();

		lastHeadBreadcrumbs.html(textLastHeadBreadcrumbs);

	})
}
changeMainNews();


function productionSliderOpen(){
	if(!!$('.production-container').length){

		
		
		$('.production-img').click(function(){

			var slide = $(this).attr('data-img');

			var altText=$(this).find('img').attr('alt');
			
			var countSlide=$('.production-slide').length;

			$('.body').css('overflow', 'hidden');
			$('.popup-slider').addClass('popup-slider-open');
			
			

			$('.production-slider').on('init reInit', function(event, slick) {

				$('.production-slide-text').find('span').text((1+Number(slide)) + ' / ' + slick.slideCount);
				$('.production-slide-text').find('h4').text(altText);
			});

			$('.production-slider').on(`afterChange`, function(event, slick, currentSlide) {
				
				$('.production-slide-text').find('span').text(currentSlide + 1 + ' / ' + slick.slideCount);
				$('.production-slide-text').find('h4').text($('.production-slider .slick-active').find('img').attr('alt'));

			});

			$('.production-slider').slick({
				arrows:true,
				infinite: true,
				slidesToShow: 1,
				initialSlide: parseInt(slide),
				nextArrow: '<button id="next_popup"  class="arrow_next arrow_popup-next"></button>',
				prevArrow: '<button id="prev_popup"  class="arrow_prev arrow_popup-prev"></button>',
				responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
						arrows: false
					}
				}
				]

			});
			if(($(window).height()<=500)&&($(window).width()>=1024)){
				
				var sliderHeight=$(window).height()*0.9 - 30;
				$('.production-slide').height(sliderHeight);

			}
			
			if($(window).width()<=1024){
				var topDots=($(window).height()) / 2 + ($('.production-slide').find('img').height())/2 + 30;
				
				$('.slick-dots').css('top',  topDots );
			}
			$(window).resize(function(){
				if($(window).width()<=1024){
					var topDots=($(window).height()) / 2 + ($('.production-slide').find('img').height())/2 + 30;
					
					$('.slick-dots').css('top',  topDots );
				}
				if(($(window).height()<=500)&&($(window).width()>=1024)){

					var sliderHeight=$(window).height()*0.9 - 30;
					$('.production-slide').height(sliderHeight);

				}
			});
			console.log( $('.popup-slider'));
			console.log(countSlide);
		});


		$('.popup-exit').click(function(){
			$('.body').css('overflow', 'visible');
			$('.popup-slider').removeClass('popup-slider-open');
			$('.production-slider').slick('unslick');
		});

		

	}
	

}
productionSliderOpen();


function tabsChange(){

	


	if(!!$('.contacts-rigth-part-title').length){

		$(window).ready(function(){

			$("#right-select option:first").attr('selected','selected');
			$('.select-visible option:first').attr('selected','selected');
		});




		var arrContactsClass=['belarus', 'export'];
		var arr=[];

		for (let i=0; i<arrContactsClass.length; i++){

			arr.push('contact-' + arrContactsClass[i]);

		}


		$('.contacts-rigth-part-item ').click(function(e){

			$('.contacts-rigth-part-item ').removeClass('active-contacts-main-title');
			$(this).addClass('active-contacts-main-title');


			for(let i=0; i<arr.length; i++){

				if($(this).hasClass(arr[i])){

					$('.contact').removeClass('contact-visible');

					$( '.' + arr[i] ).addClass('contact-visible');

					$('.contacts-left-part'+'.'+arr[i]).find('a').removeClass('contacts-active');
					$('.contacts-left-part'+'.'+arr[i]).find('a').filter(':first').addClass('contacts-active');


				}

			}


		});

		if(!!$('#right-select')){


			if($('.select-left-part').hasClass('select-visible')){
				$('.select-visible option:first').attr('selected','selected');
			}


			$(document).on('change','#right-select', function(){
				$('.select-left-part').find('option').prop('selected', false);

				$('.select-visible option:first').attr('selected','selected');
				
				


				for(let i=0; i<arr.length; i++){
					if($("#right-select").find(":selected").hasClass(arr[i])){


						$('.contacts-left-part.contact').removeClass('contact-visible');

						$( '.' + arr[i] ).addClass('contact-visible');

						$('.contact-visible option:first').attr('selected','selected');

						$('.contacts-left-part'+'.'+arr[i]).find('a').removeClass('contacts-active');
						$('.contacts-left-part'+'.'+arr[i]).find('a').filter(':first').addClass('contacts-active');

						$('.contacts-main.contact').removeClass('contact-visible');
						$('.contacts-main.contact'+'.'+arr[i]).addClass('contact-visible');

						if ($(window).width() <= '768'){

							$('.select-left-part').removeClass('select-visible');
							$('.'+arr[i]+'.select-left-part').addClass('select-visible');


						}

					}

				}
			});
		}



		var arrLeftPart=['vitebsk-region', 'minsk-region', 'specialist-3', 'specialist-2', 'specialist-1'];

		var contactsLeftPartLink=$('.contacts-left-part').find('a');

		contactsLeftPartLink.click(function(e){
			e.preventDefault();

			contactsLeftPartLink.removeClass('contacts-active');
			$(this).addClass('contacts-active');

			$('.contacts-main').removeClass('contact-visible');

			for(let i=0; i<arrLeftPart.length; i++){
				

				if($(this).parent().hasClass(arrLeftPart[i])){
					
					if($('.contacts-main').hasClass(arrLeftPart[i])){
						

						$('.' + arrLeftPart[i]).addClass('contact-visible');
					}

					
				}

			}

		});

		if ($(window).width() <= '768'){


			for(let i=0; i<arr.length; i++){

				$(document).on('change','.select-left-part.'+arr[i], function(){

					$('.select-left-part.'+arr[i]+' option:first').attr('selected','selected');

					var currentOption= $('.select-left-part.'+arr[i]).find(":selected");

					console.log(currentOption);

					$('.contacts-main').removeClass('contact-visible');

					for(var j=0; j<arrLeftPart.length; j++){

						if(currentOption.hasClass(arrLeftPart[j])){


							if($('.contacts-main').hasClass(arrLeftPart[j])){
								$('.contacts-main'+'.' + arrLeftPart[j]).addClass('contact-visible');
							} 

						}

					}
				})	

			}

		}


	}

}

tabsChange();

$(window).resize(tabsChange);
function contactsMapActive(){

	if(!!$('#contact-map').length){

		ymaps.ready(function () {
			var myMap = new ymaps.Map('contact-map', {
				center: [53.87533657065839, 27.645733499999945],
				zoom: 16
			}, {
				searchControlProvider: 'yandex#search'
			}),


			// MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			// 	'<div style="color: #ccc; font-weight: normal;">$[properties.iconContent]</div>'
			// 	),

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: 'Promis Беларусь,220021  <br>г. Минск, переулок Бехтерева, д.12, офис 7',
				balloonContent: 'Promis Беларусь,220021  <br>г. Минск, переулок Бехтерева, д.12, офис 7'
			}, {

				iconLayout: 'default#image',

				iconImageHref:'img/contacts-map.svg',

				iconImageSize: [55, 60],

				iconImageOffset: [-25, -55]
			});



			myMap.geoObjects
			.add(myPlacemark);

		});


	}

}

contactsMapActive();

// $(document).ready(heightWindow);
// $(window).resize(heightWindow);


// // function heightWindow(){

// // 	if(!!$('.production-slider').length){



// // 		console.log($('.production-slide').find('img').height());

// // 	}

// // }


// heightWindow();
// $(document).ready(heightWindow);
// $(window).resize(heightWindow);

function mobileSearchOpen(){

	$('.search-mobile').click(function(){


		if(!$('.search-mobile').hasClass('search-mobile-open')){

			$('.body').css('overflow', 'hidden');
			$('.popup-search').addClass('popup-search-open');
		}
	});
	$('.popup-search-inner').find('img').click(function(){
		$('.body').css('overflow', 'visible');
		$('.popup-search').removeClass('popup-search-open');
	})
}
mobileSearchOpen();

function catalogListToggle(){
	if(!!$('.catalog-wrapper').length){

		$('.table-view-icon').click(function(){

			$('.list-view-icon').find('svg').removeClass('view-icon-active');
			$('.table-view-icon').find('svg').addClass('view-icon-active');

			$('.catalog-products-list-view').addClass('catalog-products-container');
			$('.catalog-products-container').removeClass('catalog-products-list-view');


			$('.catalog-right-part').addClass('table-rigth-part');
		});

		$('.list-view-icon').click(function(){

			$('.table-view-icon').find('svg').removeClass('view-icon-active');
			$('.list-view-icon').find('svg').addClass('view-icon-active');

			$('.catalog-products-container').addClass('catalog-products-list-view');
			$('.catalog-products-container').removeClass('catalog-products-container');


			$('.catalog-right-part').removeClass('table-rigth-part');

		});

		if($(window).width()<768){

			$('.catalog-products-container').addClass('catalog-products-list-view');
			$('.catalog-products-container').removeClass('catalog-products-container');

		}

		$(window).resize(function() {

			if($(window).width()<768){

				$('.catalog-products-container').addClass('catalog-products-list-view');
				$('.catalog-products-container').removeClass('catalog-products-container');

				$('.table-view-icon').find('svg').removeClass('view-icon-active');
				$('.list-view-icon').find('svg').addClass('view-icon-active');
			}
		// else{
		// 	$('.catalog-products-list-view').addClass('catalog-products-container');
		// 	$('.catalog-products-container').removeClass('catalog-products-list-view');
		// }
	})
	}
}
catalogListToggle();

function popupFilterActive(){
	if(!!$('.catalog-wrapper').length){
		
		$('.filter-box').click(function(){
			$('.body').css('overflow', 'hidden');
			$('.popup-filter').addClass('popup-filter-open');
		})
		$('.popup-exit').click(function(){
			$('.body').css('overflow', 'visible');
			$('.popup-filter').removeClass('popup-filter-open');
		})

	}

}
popupFilterActive();

function addHeaderbreadcrumbs(){
	if(!!$('.catalog-wrapper').length){

		$(document).on('change','#main-catalog-desctop', function(){
			
			var optionText=$('#main-catalog-desctop').find(":selected").text();

			
			if($('.header-breadcrumbs').find('li').length ==3){

				$('.header-breadcrumbs li:last').remove();

			}

			$('.header-breadcrumbs').find('ul').append('<li><a href="#">' + optionText+ '</a></li>');

			if(optionText=='Все'){
				$('.header-breadcrumbs li:last').remove();
			}
			
		});
		

	}
}
addHeaderbreadcrumbs();
function navWidth(){

	$(window).resize(function() {
		if($(window).width()>=1280){
			$('.nav').find('.level-2').width($('.nav').width() + 200);
		}else{
			$('.nav').find('.level-2').width($('.nav').width() + 90);
		}
		$('.nav').find('.level-3').width($('.nav').find('.level-2').width()-290);

	});

	
	$(document).ready(function(){
		if($(window).width()>=1280){
			$('.nav').find('.level-2').width($('.nav').width() + 200);
		}else{
			$('.nav').find('.level-2').width($('.nav').width() + 90);
		}
		$('.nav').find('.level-3').width($('.nav').find('.level-2').width()-290);
	});


	
}
navWidth();

function catalogUlListActive(){
	
	var contactMainNavLink=document.getElementsByClassName('catalog-ul-list')[0];
	var levelTwoUL=document.getElementsByClassName('level-2')[0];
	var levelTwoLi=levelTwoUL.children;
	var levelThreeUl=document.getElementsByClassName('level-3');
	var levelFourUl=document.getElementsByClassName('level-4');
	
	
	contactMainNavLink.onmouseover=function(){
		levelTwoUL.style.display='block';
		

		for (let i=0; i<levelTwoLi.length; i++){

			levelTwoLi[i].onmouseover=function(){
				
				this.querySelectorAll('a')[0].classList.add('nav-a-active');
				
				for(let j=0; j<levelThreeUl.length; j++){

					if(levelThreeUl[j]){

						if(levelThreeUl[j].getAttribute('data-id-ul')==this.getAttribute('data-id')){

							levelThreeUl[j].style.display='block';

							for(let k=0; k<levelThreeUl[j].children.length; k++){

								if(levelThreeUl[j].children){
									
									levelThreeUl[j].children[k].onmouseover=function(){
										
										this.querySelectorAll('a')[0].classList.add('nav-a-active');
										for(let a=0; a<levelFourUl.length; a++){
											
											if(this.getAttribute('data-id')==levelFourUl[a].getAttribute('data-id-ul')){
												levelFourUl[a].style.display='block';
											}

										}

									}
									levelThreeUl[j].children[k].onmouseout=function(){
										this.querySelectorAll('a')[0].classList.remove('nav-a-active');
										for(let a=0; a<levelFourUl.length; a++){
											
											if(this.getAttribute('data-id')==levelFourUl[a].getAttribute('data-id-ul')){
												levelFourUl[a].style.display='none';
											}

										}

									}

								}
								
							}

						}
					}
					
				}

			}
			levelTwoLi[i].onmouseout=function(){
				for(let j=0; j<levelThreeUl.length; j++){
					this.querySelectorAll('a')[0].classList.remove('nav-a-active');
					if(levelThreeUl[j]){

						if(levelThreeUl[j].getAttribute('data-id-ul')==this.getAttribute('data-id')){
							levelThreeUl[j].style.display='none';
						}
					}
					
				}
			}

		}

		
	}
	contactMainNavLink.onmouseout=function(){
		levelTwoUL.style.display='none';
	}

	
}
catalogUlListActive();

function productPageTabs(){
	if(!!$('.product-wrapper').length){
		var productTextArr=['main-product-specifications', 'main-product-description'];

		$('.main-product-tabs-title').find('h4').click(function(){
			
			$('.main-product-tabs-title').find('h4').removeClass('active-product-tabs-title');
			$(this).addClass('active-product-tabs-title');

			$('.product-text-style').removeClass('product-text-show');
			for(let i=0; i<productTextArr.length; i++){
				if($(this).attr('data-id-title')==productTextArr[i]){
					$('[data-id-text='+productTextArr[i]+']').addClass('product-text-show');
				}
			}


			// if($(this).attr('data-id-title')==$('.product-text-style').attr('data-id-text')){
			// 	console.log($(this).attr('data-id-title'));
			// }

			
		})

	}
}
productPageTabs();

function productPageSliderActive(){
	if(!!$('.main-product-tabs').length){
		if($(window).width()<650){
			console.log('ok')
			$('.main-product-img-slider').slick({
				arrows:false,
				dots: true,
				infinite: true,
				slidesToShow: 1

			})
		}
	}
}
productPageSliderActive();
// $(window).resize(productPageSliderActive);

function popupHonorActive(){
	if(!!$('.about-wrapper').length){

		$('.about-honor').find($('.about-honor-img')).click(function(e){

			e.preventDefault();

			var slideAbout = $(this).attr('data-img-number');

			var altText=$(this).find('img').attr('alt');
			

			
			$('.body').css('overflow', 'hidden');
			$('.popup-honor').addClass('popup-honor-open');

			$('.about-slide').find($('.production-slide-text')).width($('.about-slide').find('img').width());
			
			$('.about-slider').on(`init reInit`, function(event, slick) {
				
				$('.production-slide-text').find('span').text(1+(Number(slideAbout)) + ' / ' + slick.slideCount);

				$('.production-slide-text').find('h4').text(altText);
			})
			$('.about-slider').on(`afterChange`, function(event, slick, currentSlide) {
				
				var a=currentSlide;
				$('.production-slide-text').find('span').text((a+1)+ ' / ' + slick.slideCount);
				$('.production-slide-text').find('h4').text($('.about-slider .slick-active').find('img').attr('alt'));

				

			});

			$('.about-slider').slick({
				arrows:true,
				infinite: true,
				slidesToShow: 1,
				initialSlide: parseInt(slideAbout),
				nextArrow: '<button id="next_popup"  class="arrow_next arrow_popup-next"></button>',
				prevArrow: '<button id="prev_popup"  class="arrow_prev arrow_popup-prev"></button>',
				responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
						arrows: false
					}
				}
				]

			})

			
			var dotsTop=($('.slick-slide').height());
			$('.about-slider').find('.slick-dots').css('top', dotsTop);
			
			$(window).resize(function(){
				var dotsTop=($('.slick-slide').height());
				$('.about-slider').find('.slick-dots').css('top', dotsTop);
				$('.about-slide').find($('.production-slide-text')).width($('.about-slide').find('img').width());
			})
		})	
		$('.popup-exit').click(function(){
			$('.body').css('overflow', 'visible');
			$('.popup-honor').removeClass('popup-honor-open');
			
			$('.about-slider').slick('unslick');
		})
	}
}
popupHonorActive();

$(window).resize(popupHonorActive);



function newsPageBorderBottom(){
	if(!!$('.news-block').length){
		if($(window).width()>1020){

			let amountItem=$('.news-page').length;
			let a=amountItem % 4;
			
			
			$('.news-page').css('border-bottom', '1px solid transparent');

			if(a==0){

				for(let i=0; i<(amountItem-4); i++){
					document.getElementsByClassName('news-page')[i].style.borderBottomColor='#ede8e1';
					
				}
			}else{

				for(let i=0; i<(amountItem-a); i++){
					document.getElementsByClassName('news-page')[i].style.borderBottomColor='#ede8e1';
				}
			}
		}
		if($(window).width()<=1020){

			let amountItem=$('.news-page').length;
			let a=amountItem % 3;
			
			$('.news-page').css('border-bottom', '1px solid transparent');

			if(a==0){

				for(let i=0; i<(amountItem-3); i++){
					document.getElementsByClassName('news-page')[i].style.borderBottomColor='#ede8e1';
				}
			}else{

				for(let i=0; i<(amountItem-a); i++){
					document.getElementsByClassName('news-page')[i].style.borderBottomColor='#ede8e1';
				}
			}
		}
		if($(window).width()<=768){

			let amountItem=$('.news-page').length;
			let a=amountItem % 2;
			$('.news-page').css('border-bottom', '1px solid transparent');

			if(a==0){
				for(let i=0; i<(amountItem-2); i++){
					document.getElementsByClassName('news-page')[i].style.borderBottomColor='#ede8e1';
				}
			}else{
				for(let i=0; i<(amountItem-a); i++){
					document.getElementsByClassName('news-page')[i].style.borderBottomColor='#ede8e1';
				}
			}
		}if($(window).width()<=650){
			$('.news-page').css('border-bottom', 'none');
			

		}
	}
}
$(window).resize(newsPageBorderBottom);

newsPageBorderBottom();


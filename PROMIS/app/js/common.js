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
console.log($('.slick-dots'));


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



// function mapActive(){
	
// 	var arrSuf = ['uk', 'kz', 'ui', 'nl', 'lt', 'cz', 'it', 'de', 'fr', 'tr', 'ru'];
// 	var arr=[];
// 	for (let i=0; i<arrSuf.length; i++){
// 		arr.push({idMap: arrSuf[i]+'-map', idLine:arrSuf[i]+'-line', idTriangle:arrSuf[i]+'-triangle', idFlag: arrSuf[i]+'-flag', idPoint:arrSuf[i]+'-point'})
// 	}

// 	for(let i=0; i<arr.length; i++){

// 		function showPartMap(){
// 			document.getElementById(arr[i].idLine).classList.add('active-line');
// 			document.getElementById(arr[i].idTriangle).classList.add('active-triangle');
// 			document.getElementById(arr[i].idPoint).classList.add('active-point');
// 		};

// 		function hidePartMap(){
// 			document.getElementById(arr[i].idLine).classList.remove('active-line');
// 			document.getElementById(arr[i].idTriangle).classList.remove('active-triangle');
// 			document.getElementById(arr[i].idPoint).classList.remove('active-point');
// 		};


// 		document.getElementById(arr[i].idMap).addEventListener('mouseover', function(){
// 			document.getElementById(arr[i].idFlag).classList.add('active-flag');
// 			document.getElementById(arr[i].idMap).classList.add('active-color');

// 			showPartMap();

// 		});
// 		document.getElementById(arr[i].idMap).addEventListener('mouseout', function(){
// 			document.getElementById(arr[i].idFlag).classList.remove('active-flag');
// 			document.getElementById(arr[i].idMap).classList.remove('active-color');

// 			hidePartMap();
// 		});

// 		document.getElementById('by-map').addEventListener('mouseover', function(){
// 			showPartMap();
// 			document.getElementById('by-point').style.stroke='#5e574c';
// 		});
// 		document.getElementById('by-map').addEventListener('mouseout', function(){
// 			hidePartMap();
// 			document.getElementById('by-point').style.stroke='#ff9729';
// 		});
// 		document.getElementById(arr[i].idPoint).addEventListener('mouseover', function(){
// 			document.getElementById(arr[i].idFlag).classList.add('active-flag');
// 			document.getElementById(arr[i].idMap).classList.add('active-color');

// 			showPartMap();
// 		});
// 		document.getElementById('by-point').addEventListener('mouseover', function(){
// 			showPartMap();
// 			document.getElementById('by-point').style.stroke='#5e574c';
// 		})

// 	}



// }
// mapActive();





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
			console.log($('.btn'));
			$('.btn').removeClass('btn-active');
			alert();
			cleanForm();
		},
		highlight: function (element, errorClass, validClass) { 
			$('#subscription-button').removeClass('subscription-button-active');
			$('.btn').removeClass('btn-active');


		}, 

		unhighlight: function (element, errorClass, validClass) { 
			// console.log(element);
			$('#subscription-button').addClass('subscription-button-active');
			$('.btn').addClass('btn-active');
		}
	});


	function cleanForm(){
		var form = document.getElementById('subscription-form');
		for(var i=0; i<form.elements.length;i++){
			form.elements[i].value="";
		}
	}
});

function burgerToggle(){
	$('.burger-menu-button').click(function(){
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
		console.log(dataIdArticle);
		$('.article-page').removeClass('active-main-article');
		$('#' + dataIdArticle).addClass('active-main-article');

		var lastHeadBreadcrumbs=$('.header-breadcrumbs').find('a').last();

		var textLastHeadBreadcrumbs=$(this).find('h3').html();

		lastHeadBreadcrumbs.html(textLastHeadBreadcrumbs);

	})
}
changeMainNews();


function productionSliderOpen(){
	var countSlide=$('.production-slide').length;
	$('.production-img').click(function(){


		var slide = $(this).attr('data-img')
		
		
		if(!$('.popup-slider').hasClass('popup-slider-open')){
			$('.body').css('overflow', 'hidden');
			$('.popup-slider').addClass('popup-slider-open');


			$('.production-slider').on(`init reInit`, function(event, slick) {
				$('.production-slide-text').find('span').text((1+Number(slide)) + ' / ' + slick.slideCount);
			})
			$('.production-slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
				$('.production-slide-text').find('span').text(currentSlide + 1 + ' / ' + slick.slideCount);
			})



			$('.production-slider').slick({
				arrows:true,
				infinite: true,
				slidesToShow: 1,
				initialSlide: slide,
				nextArrow: '<button id="prev_popup"  class="arrow_prev arrow_popup-prev"></button>',
				prevArrow: '<button id="next_popup"  class="arrow_next arrow_popup-next"></button>',
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
		}


	});

	$('.popup-exit').click(function(){
		$('.body').css('overflow', 'visible');
		$('.popup-slider').removeClass('popup-slider-open');
	});



}
productionSliderOpen();

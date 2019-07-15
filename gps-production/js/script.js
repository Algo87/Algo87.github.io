// валидация формы
$(document).ready(function() {

	$('#form').validate({

		rules: {

			email: {
				email: true,
				required: true
			},

			name: {
				required: true
			}

		},

		messages: {

			email: {
				email: "введите корректный e-mail",
				required: "Поле обязательно к заполнению"
			},

			name: {
				required: "Поле обязательно к заполнению"
			} 	

		},
		errorElement: "div",
		errorPlacement: function(error, element) {
			element.before(error);
		},
		submitHandler: function(form) {
			event.preventDefault();
			
			alert("Thank You!!!");
			cleanForm();
		},
	});
});


$('.input_color').on('input', function(){ 
	$('.input_color').css('filter', 'none')
}); 

$(document).ready(function() {
	function cleanForm(){
		var form = document.forms["form"];
		for(var i=0; i<form.elements.length;i++){
			form.elements[i].value="";
		}
	}
});
// портфолио
$(document).ready(function() {
	$('.portfolio_menu_name').click(function(){
		$('.portfolio_clients_list').toggle();

	});
});
$(document).ready(function() {
	$('.portfolio_menu_name').click(function(){

		if ($('.portfolio_menu_name').hasClass('rotate')) {
			$(".portfolio_menu_name").removeClass('rotate');
		} else {
			$(".portfolio_menu_name").addClass('rotate');
		}
	})
});

$(document).ready(function() {

	$('.nav_link').click(function(){

		$('.nav_link').removeClass('active');
		$(this).addClass('active');
		
	})
		
});


//плееры
var players={}
var mainPlayers={}
function onYouTubePlayerAPIReady(){
	
	
	$('.video_slide').each(function(e){
				
		players[$(this).data('video-id')] = new YT.Player('player-'+$(this).data('video-id'), 
		{
			playerVars: {
				'rel': 0,
				'controls': 0,
			},
			videoId: $(this).data('video-id'),
			events: {

				onStateChange: onPlayerStateChange
			}
		})

	})


	$('.video_main').each(function(e){
		
		var videoId = $(this).data('video-id');
		mainPlayers[videoId] = new YT.Player('mainPlayer-'+videoId,{
			
			videoId: videoId,
			events: { 

				'onReady': function(){
					if(e==0){

						mainPlayers[videoId].playVideo();
					}
				
				},
				onStateChange: onPlayerStateChange
			}
		})
	})
}


function onPlayerStateChange(event) {        
	if(event.data === 0) {          
		event.target.playVideo();
	}
}

$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: false,
 	focusOnSelect: true,
  	arrows: true,
  	nextArrow: '<button id="prev"  class="arrow_prev"></button>',
  	prevArrow: '<button id="next"  class="arrow_next"></button>'
});

// функция для определения количества слайдов в слайдере job
$(document).ready(function() {
	
	var sliderLength=$('.slide').length;
	if (sliderLength==1){
		$('.slider-nav').css("display", "none");
		
		$('.block_after').removeClass('description_block_title').addClass('description_block_title2');
	}
});

$('.slider-for').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	var currSlide=$('.slick-slide')[currentSlide];
	var next=$('.slick-slide')[nextSlide];

	
	if($(currSlide).data('video-id')){
		players[$(currSlide).data('video-id')].stopVideo();
	}
	
	if($(next).data('video-id')){
		players[$(next).data('video-id')].playVideo();

	}

});



$('.slider_video_container').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	fade:true,
 

});


$('.slider_video_container').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	var currSlide=$('.slick-slide ')[currentSlide];
	var next=$('.slick-slide ')[nextSlide];

	
	if($(currSlide).data('video-id')){
		mainPlayers[$(currSlide).data('video-id')].stopVideo();
	}
	
	if($(next).data('video-id')){
		mainPlayers[$(next).data('video-id')].playVideo();

	}

});


function heightMainSlider (){
	// console.log($('.video_main').width())
	var widthMainSlider = $('.video_main').width()
	var heightMainSlider = widthMainSlider *  0.56232427366448;
	
	var VideoMainIframe=$('.video_main').find("iframe");
	VideoMainIframe.height(heightMainSlider);

}

$(document).ready(function() {
	heightMainSlider()
});
$( window ).resize(function() {
	heightMainSlider()
});


function MainInformHeight(){
	
	var mainSlideHeight=$('.video_main').height();
	var mainInformHeight=$('.main_inform').height(mainSlideHeight - 80);
}
$(document).ready(function() {
	MainInformHeight()
});
$( window ).resize(function() {
	MainInformHeight()
});

// burger_menu

$('.burger_menu').click(function(){
		
	if($('.body').hasClass('body_position_open')){

		$('.body').removeClass('body_position_open');
		$('.body').addClass('body_position_close');
		$('.main_container').css('z-index','-1');

	}else{
		$('.body').removeClass('body_position_close');
		$('.body').addClass('body_position_open');
		$('.main_container').css('z-index','1');
				
	}
	
});
// слайдер работ высота блока-обертки

function heightSliderJob(){
	var widthJobSlider = $('.video_slide').width()
	var heightJobSlider = widthJobSlider *  0.56232427366448;
	$('.slider-for .slide').height(heightJobSlider);
}


$(document).ready(function() {
	heightSliderJob()

});
$( window ).resize(function() {
	heightSliderJob()
});

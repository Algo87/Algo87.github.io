// nav padding-top
function NavPaddigTop(){
	var height=document.documentElement.clientHeight;
	if (height<590){
		var navPadding=$('.nav').css('paddingTop', '60px');
	}else{
		navPadding=$('.nav').css('paddingTop', '200px');
	}
}
$(window).resize(function() {
	NavPaddigTop();
});
$(document).ready(function() {
	NavPaddigTop();
});

// slider
$(document).ready(function(){
	$('.slider').slick({
		centerMode: true,
		variableWidth: true, 
		infinite:false,
		arrows:false,
		focusOnSelect :true,
	});
});
// slider navigation


$('.portfolio-item').find('a').on('click', function(event){
	event.preventDefault();
	var slide=$(this).data('slide');
	// console.log(slide);
	$('.slider').slick('slickGoTo', slide);

});
$('.slider').on('afterChange', function(event, slick, currentSlide){
  // console.log(currentSlide);
  var slide=$('.slide')[currentSlide];
   // console.log(slide);
   var linkId=$(slide).data('id');
   // console.log(linkId);

   $("#" + linkId).parent().addClass('portfolio-item-active');
   // console.log($("#" + linkId));
   $('.portfolio-item').find('a').not("#" + linkId).parent().removeClass('portfolio-item-active');
});




// main navigation

$(document).ready(function(){
	$('.nav-item').on('click', function(){
		event.preventDefault();
		$(this).addClass('active');
		$('.nav-item').not($(this)).removeClass('active');

	});
});

$('.nav-item').on('click', function(){
	var id=$(this).attr('data-id');
	// console.log(id);
	$('html, body').animate({ scrollTop: $('#' + id).offset().top }, 1500);
});




// $(".nav-item").on("click",  function () {
// 	event.preventDefault();
// 	this.classList.add("active");
// 	var id  = $(this).attr('data-id');
// 	var top = $('#'+id).offset().top;
// 	$('body,html').animate({scrollTop:top}, 1500);

// 	$('.nav-item').not(this).removeClass('active');



// });


var screenHeight=$(window).height();
var screenNeed=screenHeight/3;

function blockPosition(){

	
	var blockItems=$('.block');
	// console.log(blockItems);
	var divId;
	var navItem;

	for(var i=0; i<blockItems.length; i++){

		var blockItem=blockItems[i];
		var blockItemTop=blockItem.getBoundingClientRect().top;
		// console.log(blockItemTop);
		var blockItemBottom=blockItem.getBoundingClientRect().bottom;
		// console.log(blockItemBottom);
		divId=blockItem.id;
		if(blockItemTop<=screenNeed&&blockItemBottom>=screenNeed){

			divId=blockItem.id;
			// console.log(divId);
			navItem=$('[data-id='+divId+']');
			
			console.log(divId);
			navItem.addClass('active');
			$('.nav-item').not(navItem).removeClass('active');

			return;
		}
	}

}
$(window).on('scroll', blockPosition);

$(document).ready(function(){
	$(window).trigger( 'resize' );
});

// calculation
$(document).ready(function(){
	$( "#price-input" ).val('500');
	console.log($( "#price-input" ).val())
});
$('#range').mousemove(function(){
	
  // console.log(this.value);
  var calcValue= document.getElementById('calcValue').value=this.value;
  // console.log(calcValue);  
  var calcResult=document.getElementById('calcResult');
  // console.log(calcResult);  
  if(calcValue<200){
  	calcResult.innerHTML = '35';
  }
  if(calcValue>200&&calcValue<400){
  	calcResult.innerHTML = '30';
  }
  if(calcValue>400&&calcValue<700){
  	calcResult.innerHTML = '25';
  }
  if(calcValue>700){
  	calcResult.innerHTML = '20';
  }
  var priceInput=document.getElementById("price-input").value=this.value;
  // console.log(priceInput);
  // console.log(calcResult.innerHTML);
  var priceResult=document.getElementById("result");
  priceResult.innerHTML= priceInput*calcResult.innerHTML;
});

$(document).ready(function(){
	$( "#range" ).trigger( "mousemove" );
});



$('#price-input').on('input', function(){

	var priceInput=$('#price-input').val();
	// console.log(priceInput);
	var rangeInput=$('#range').val(priceInput);
	$('#calcValue').val(priceInput);
	var calcValue=$('#calcValue').val();
	console.log(calcValue);

	var calcResult=$('#calcResult');

	// console.log(calcResult);

	if(calcValue<200){
		calcResult.html('35');
	}
	if(calcValue>200&&calcValue<400){
		calcResult.html('30');
	}
	if(calcValue>400&&calcValue<700){
		calcResult.html('25');
	}
	if(calcValue>700){
		calcResult.html('20');
	}

	var priceResult=$('#result');

	priceResult.html(calcResult.html()*priceInput);

});



// validation

$(function(){
	$('#contact-form').validate({
		rules: {
			user_name: {
				required: true,
				minlength: 2
			}
		},
		messages: {
			user_name: {
				required: "Поле 'Имя' обязательно к заполнению",
				minlength: "Введите не менее 2-х символов в поле 'Имя'"
			},
			user_email: {
				required: "Поле 'Email' обязательно к заполнению",
				email: "Необходим формат адреса email" 
			}
		},
		errorPlacement: function(error, element) {
			// console.log(element);
			// console.log(error);

			error.insertBefore(element);
		},
		submitHandler: function(form) {
			event.preventDefault();
			
			alert("Thank You!!!");
			cleanForm('contact-form');

			
		},
		highlight: function (element, errorClass, validClass) { 
			// console.log(validClass);
			$(element).addClass(errorClass); 


		}, 

		unhighlight: function (element, errorClass, validClass) { 
			console.log(validClass);
			$(element).removeClass(errorClass);
     		 // alert();
     		 $(element).addClass(validClass);
     		} 


     	});
});
function cleanForm(formId){
	var form = document.getElementById(formId);
	var countInput=form.elements.length - 2;
	for(var i=0; i<countInput; i++){
		form.elements[i].value="";
	}
}
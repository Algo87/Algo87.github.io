var burger = document.getElementById("burger");
var navMenu=document.getElementById("menu");

burger.addEventListener('click', function(){
	
	navMenu.classList.toggle("active");
	var burgerParts=document.getElementsByClassName("burger");
	for (var i=0; i<burgerParts.length; i++){
		burgerParts[i].classList.toggle("burger_close");

	}

});



// собираем все якоря; устанавливаем время анимации и количество кадров
var menuItems=document.getElementsByClassName("menuItem");
var   animationTime = 300;
var   framesCount = 20;

for (var i=0; i<menuItems.length; i++){
	 // каждому якорю присваиваем обработчик события
	menuItems[i].addEventListener("click", function(e){
// убираем стандартное поведение
		e.preventDefault();
		  // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
		var elemId=this.getAttribute("data-id");

		    if(elemId){

		    	var elem=document.getElementById(elemId);
		    	var coordY=elem.getBoundingClientRect().top;
				    
		    }
		     // запускаем интервал, в котором
		    var scroller=setInterval(function(){
		    	 // считаем на сколько скроллить за 1 такт
		    	var scrollBy = coordY / framesCount;
		    	  // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
				   // и дно страницы не достигнуто
		    	if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight){
		    		  // то скроллим на к-во пикселей, которое соответствует одному такту
		    		window.scrollBy(0, scrollBy);
		    		 // иначе добираемся до элемента и выходим из интервала
		    	}else{
		    		window.scrollTo(0, coordY);
		    		clearInterval(scroller);
		    	}
		    	 // время интервала равняется частному от времени анимации и к-ва кадров
		    }, animationTime / framesCount);
	});
}



	




	


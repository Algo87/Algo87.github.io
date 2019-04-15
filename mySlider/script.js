function slider(className){

	var slides=document.getElementsByClassName(className);
	var dots=document.getElementsByClassName("nav_link");

	function firstOpasity(){
		for(var i = 0; i<slides.length; i++){
			slides[0].style.opacity="1";
			dots[0].style.background="red";
		}
	}

	firstOpasity();


	function activeButton(){

		var prev=document.getElementById("prev-btn");
		var next=document.getElementById("next-btn");
		var dots=document.getElementsByClassName("nav_link");
		

		prev.addEventListener("click", function(){
			
			CurrentSlide.prevSlide();
			
		});

		next.addEventListener("click", function(){
			CurrentSlide.nextSlide();
		});
		
		for(var i=0; i<dots.length; i++){

			var dot=dots[i];
			dot.setAttribute("data-index", i);

			var slide=slides[i];
			slide.setAttribute("data-id", i);

			dot.addEventListener("click", function(e){
				
				CurrentSlide.activateDots(this);

			})
		}



		function changeCurrentSlide(currentSlideId){

			var currentSlideId=currentSlideId;
			
			return {

				nextSlide:function(){

					if(currentSlideId==slides.length-1){

						for(var i=0; i<slides.length; i++){

							slides[i].style.left=0+"px";
							slides[i].style.opacity="0.6";
							slides[0].style.opacity="1";
							console.log(dots[0]);
							dots[0].style.background="red";

						}
						return currentSlideId=0;

					}
					currentSlideId++;
					
					for(var i=0; i<slides.length; i++){

						slides[i].style.left=-450*currentSlideId+"px";
						slides[i].style.opacity="0.6";
						slides[currentSlideId].style.opacity="1";
						dots[i].style.background="#ccc";
						dots[currentSlideId].style.background="red";


					}

					
					
					return currentSlideId;

				},


				prevSlide:function(){

					if(currentSlideId==0){

						for(var i=0; i<slides.length; i++){

							slides[i].style.left=-450*(slides.length-1)+"px";
							slides[i].style.opacity="0.6";
							slides[slides.length-1].style.opacity="1";
							dots[i].style.background="#ccc";
							dots[slides.length-1].style.background="red";

						}

						return currentSlideId=slides.length-1;
					}

					currentSlideId--;

					

					for(var i=0; i<slides.length; i++){

						slides[i].style.left=-450*(currentSlideId)+"px";
						slides[i].style.opacity="0.6";
						slides[currentSlideId].style.opacity="1";
						dots[i].style.background="#ccc";
						dots[currentSlideId].style.background="red";
						
					}
					

					return currentSlideId;
					
				},

				activateDots: function(clickedDot){
				

					for(var i=0; i<dots.length; i++){

						var indexClickedDot=clickedDot.getAttribute("data-index");
						slides[i].style.left=-450 * indexClickedDot+"px";
						slides[i].style.opacity="0.6";
						slides[indexClickedDot].style.opacity="1";
						dots[i].style.background="#ccc";
						dots[indexClickedDot].style.background="red";
					}

					return currentSlideId=indexClickedDot;
				}
			}
		}

		var CurrentSlide = changeCurrentSlide(0);


	}




	activeButton();


}	

slider("slide");
	function Accordion (id, settings){

		var containerId=document.getElementById(id);
		var headerClass=document.getElementsByClassName('header');
		var contentClass=document.getElementsByClassName('content');

		this.addTab=function add(headerText, contentText){

			if(headerText){

				for(var i=0; i<headerText.length; i++){

					var headerDiv = document.createElement('div');
					headerDiv.className = "header";

					var headerDivIndex=headerClass.length+1;

					var contentDiv=document.createElement('div');
					contentDiv.className='content';

					headerDiv.innerHTML = headerText[i] + headerDivIndex ;

					contentDiv.innerHTML = contentText[i];

					containerId.appendChild(headerDiv);
					containerId.appendChild(contentDiv);
				}
				
			}
			
		}

		this.addTab(settings.headerText, settings.contentText);

		for(var i=0; i<contentClass.length; i++){

			var headerItem=headerClass[i];
			var dataIndex=headerItem.setAttribute('data-index', i);

			headerItem.addEventListener('click', function(event){

				for(var i=0; i<contentClass.length; i++){

					var headerIndex=this.getAttribute('data-index');
					contentClass[i].classList.remove('show');
					contentClass[headerIndex].classList.add('show');

				}


			})

		}



		this.setActiveTab=function(indexes){
			
				for(var i=0; i<indexes.length; i++){
					if(indexes[i]<=headerClass.length){
					contentClass[indexes[i]].classList.add('show');
				}
			}
			

		}

		this.setActiveTab(settings.activeTab);

		this.setHeaderColor=function(color){

			for(var i=0; i<contentClass.length; i++){

				if(contentClass[i].classList.contains('show')){
					headerClass[i].style.backgroundColor=color;
				}

				headerClass[i].addEventListener('click', function(){

					for(var j=0; j<contentClass.length; j++){

						headerClass[j].style.backgroundColor='#F9F9F9';
						this.style.backgroundColor=color;
					}
				})
			}
		}

		this.setHeaderColor(settings.headerColor);


		this.beforeChange=function(func){
			for(var i=0; i<headerClass.length; i++){
				headerClass[i].addEventListener('click', function(e){
					var currentSlide = e.target.getAttribute('data-index');
					func(currentSlide)
				});
			}

		}

		this.beforeChange(settings.beforeChange); 

	}


	var settings = {
		beforeChange: function (current){
			alert(current )
		},
		headerColor:"#ccc",
		activeTab:[1, 3],
		contentText: ["hfgh fghfh dthyf fty fhy", "ghjmghb", "fgdfhgbfgh", "dlkjf"],
		headerText: ["<b>Block-</b>", "<b>Block-</b>", "lfkjslk"]

	};

	var newAcc = new Accordion('container', settings);



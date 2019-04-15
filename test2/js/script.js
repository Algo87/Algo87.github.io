
var arr=[

{ idMap: 'usa', idCircle: 'purple', color:'#a122ea', idText:'text1'},
{ idMap: 'europe', idLine: 'blueLine', idCircle: 'blueCircle', color: '#0081f1', idText:'text2'},
{ idMap: 'sng', idLine: 'redLine', idCircle: 'redCircle', color: '#ff2953', idText:'text3'},
{ idMap: 'asia', idLine: 'orangeLine', idCircle: 'orangeCircle', color: '#ff7346', idText:'text4'},
{ idMap: 'africa', idLine: 'yellowLine', idCircle: 'yellowCircle', color: '#ffba3d', idText:'text5'},
{ idMap: 'oceania', idLine: 'greenLine', idCircle: 'greenCircle', color: '#68dc00', idText:'text6'},
{ idMap: 'australia', idLine: 'turquoiseLine', idCircle: 'turquoiseCircle', color: '#00ca94', idText:'text7'},
{ idMap: 'america', idLine: 'lightBlueLine', idCircle: 'lightBlueCircle', color: '#00b9f7', idText:'text8'}

]

var i=0;
var timerId = setInterval(function() {

	if(i==arr.length){

		arr.forEach(function(element, i){
			document.getElementById(element.idMap).style.fill='grey';
			document.getElementById(element.idCircle).style.fill='grey';
			if(i>0){
				document.getElementById(element.idLine).style.stroke='grey';
			}


		});


		document.getElementById("cardNumber").innerHTML='0';
		i=0;
	}else{
		document.getElementById(arr[i].idMap).style.fill=arr[i].color;
		document.getElementById(arr[i].idCircle).style.fill=arr[i].color;
		document.getElementById("cardNumber").innerHTML=document.getElementById(arr[i].idText).innerHTML;
		if(i>0){
			document.getElementById(arr[i].idLine).style.stroke=arr[i].color;
		}

		i++;

	}

}, 2500);

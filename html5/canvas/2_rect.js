function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	context.rect(100,100,250,200);
	/* context.stroke(); */
	context.fill();
	
	/* context.fillRect(100,100,250,200);*/ //填滿 fill
	/* context.clearRect(150,150,50,50);*/ //橡皮擦 clear
	/* context.strokeRect(100,100,250,200);*/  //描邊 stroke
	context.clearRect(0,0,canvas.width,canvas.height);
	
}

window.addEventListener('load',doFirst);
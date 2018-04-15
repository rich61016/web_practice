function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	context.moveTo(100,100); //畫直線
	context.lineTo(250,250);
	context.lineTo(350,200);
	context.lineTo(450,250);
	context.closePath();
	context.stroke();


}

window.addEventListener('load',doFirst);
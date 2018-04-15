function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	context.moveTo(45,101.25); //畫直線
	context.lineTo(112.5,112.5);
	
	context.lineTo(90,45);
	context.lineTo(135,101.25);
	context.lineTo(180,45);
	context.lineTo(157.5,112.5);
	context.lineTo(227.5,101.25);
	context.lineTo(168.75,135);
	context.lineTo(227.5,180);
	context.lineTo(157.5,157.5);
	context.lineTo(180,227.5);
	context.lineTo(135,168.75);
	context.lineTo(90,227.5);
	context.lineTo(112.5,157.5);
	context.lineTo(45,180);
	context.lineTo(101.25,135);
	
	context.closePath();
	
	
	
	
	context.stroke();


}

window.addEventListener('load',doFirst);
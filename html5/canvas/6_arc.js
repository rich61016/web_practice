function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	context.arc(200,200,100,0,Math.PI,false);//X,Y,大小,起始位置,結束位置,順逆時針
	context.stroke();
	
	context.beginPath();
	context.arc(500,200,100,0,Math.PI,true);
	context.stroke();
	
	context.beginPath();
	context.arc(200,500,100,0,2*Math.PI,true);
	context.stroke();
	
	context.beginPath();
	context.arc(500,500,100,0.4*Math.PI,1.6*Math.PI,true);
	context.stroke();

}

window.addEventListener('load',doFirst);
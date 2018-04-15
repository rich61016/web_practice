function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	context.strokeStyle = 'red';
	context.lineWidth = 5;
	
	context.moveTo(150,250);
	context.bezierCurveTo(210,150,270,450,350,280);
	context.stroke();	
	
	context.strokeStyle = 'blue';
	context.lineWidth = 1;

	context.beginPath();
	context.moveTo(150,250);	
	context.lineTo(190,150);	
	context.lineTo(270,450);	
	context.lineTo(350,280);	
	context.stroke();

}

window.addEventListener('load',doFirst);
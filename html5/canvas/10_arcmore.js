function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	context.strokeStyle = 'red';
	context.lineWidth = 5;
	

	context.arc(300,300,150,0,2*Math.PI,true);
	context.stroke();
	
	context.strokeStyle = 'blue';
	context.lineWidth = 2;
	
	context.translate(300,300);
	context.beginPath();
	context.moveTo(0,0);	
	context.lineTo(0,-120);

	/* context.beginPath();
	context.moveTo(300,300);	
	context.lineTo(300,180); */	
	
	context.stroke();

}

window.addEventListener('load',doFirst);
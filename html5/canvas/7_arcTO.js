function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	context.strokeStyle = 'red';
	context.lineWidth = 5;
	
	context.moveTo(150,250);
	context.arcTo(250,120,370,300,100);
	context.stroke();	
	
	context.strokeStyle = 'blue';
	context.lineWidth = 1;

	context.beginPath();
	context.moveTo(150,250);	
	context.lineTo(250,120);	
	context.lineTo(370,300);	
	context.stroke();

}

window.addEventListener('load',doFirst);
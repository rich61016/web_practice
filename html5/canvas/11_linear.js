function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	var gradient = context.createLinearGradient(100,250,600,250);
	gradient.addColorStop(0,'red');
	gradient.addColorStop(1,'purple');
	gradient.addColorStop(0.3,'yellow');
	gradient.addColorStop(0.5,'green');
	gradient.addColorStop(0.7,'blue');
	
	context.fillStyle = gradient;
	/* context.fillStyle='yellow'; */
	context.fillRect(100,100,500,300);

}

window.addEventListener('load',doFirst);
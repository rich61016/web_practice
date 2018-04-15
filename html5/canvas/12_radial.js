function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	var gradient = context.createRadialGradient(350,250,50,350,250,120);
	gradient.addColorStop(0,'white');
	gradient.addColorStop(1,'steelblue');

	
	context.fillStyle = gradient;
	/* context.fillStyle='yellow'; */
	context.fillRect(100,100,500,300);

}

window.addEventListener('load',doFirst);
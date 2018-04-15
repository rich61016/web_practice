function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	
	var image = new Image();
	image.src = '../../img/limes.jpg';
	image.addEventListener('load',function(){
		context.drawImage(image,100,100);
	});
	

}

window.addEventListener('load',doFirst);
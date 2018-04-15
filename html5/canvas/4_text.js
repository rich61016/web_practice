function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	context.font = 'bold 50px Tahoma';//字型大小
	
	/* context.strokeStyle = 'red';
	context.fillStyle = 'blue';
	context.fillText('omg',150,150);
	context.strokeText('omg',150,150); */
	
	
	/* context.textBaseline = 'hanging';
	context.strokeStyle = 'red'
	context.strokeText('omg',150,150);
	context.moveTo(150,150);
	context.lineTo(400,150);
	context.stroke();
 */
    context.shadowOffsetX = 5;  //陰影
    context.shadowOffsetY = 5;
    context.shadowColor = 'red';
    context.shadowBlur = 5;
	context.fillText('omg',150,150);
	
	context.shadowOffsetX = 0;  //4邊暈開
    context.shadowOffsetY = 0;
    context.shadowColor = 'red';
    context.shadowBlur = 5;
	context.fillStyle = 'white';
	context.fillText('omg',150,220);
	
	context.shadowOffsetX = 0;  //2層陰影
    context.shadowOffsetY = 0;
    context.shadowColor = 'red';
    context.shadowBlur = 5;
	context.fillText('omg',150,290);
	
	context.shadowOffsetX = 0;  
    context.shadowOffsetY = 0;
    context.shadowColor = 'blue';
    context.shadowBlur = 5;
	context.fillText('omg',150,290);
	
	context.shadowOffsetX = 0;  
    context.shadowOffsetY = 0;
    context.shadowColor = 'blue';
    context.shadowBlur = 5;
	context.shadowOffsetX = -5;  
    context.shadowOffsetY = -5;
    context.shadowColor = 'red';
    context.shadowBlur = -5;
	context.fillText('omg',150,360);


}

window.addEventListener('load',doFirst);
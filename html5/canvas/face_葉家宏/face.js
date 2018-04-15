function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	//X,Y,大小,起始位置,結束位置,順逆時針
	//X1,Y1,X2,Y2,大小
//左上
	context.arc(200,200,150,0,2*Math.PI,true);
	context.stroke();
	
	/* context.beginPath();
	context.arc(180,215,80,0,2*Math.PI,true);
	context.stroke();
	context.fillStyle = 'yellow';
	context.fill(); */
	
	//臉
	context.beginPath();
	context.arc(200,198,98,0,2*Math.PI,true);
	context.arc(172,218,75,0,2*Math.PI,true);
	context.arc(228,218,75,0,2*Math.PI,true);
	context.stroke();
	context.fillStyle = '#FFD924';
	context.fill();
	//左眼
	context.beginPath();
	context.arc(150,180,18,0,2*Math.PI,true);
	context.stroke();
	context.fillStyle = '#886600';
	context.fill();
	context.beginPath();
	context.arc(151,177,15,0,2*Math.PI,true);
	context.stroke();
	context.fillStyle = 'black';
	context.fill();
	//左眼珠
	context.beginPath();
	context.arc(157,171,7,0,2*Math.PI,true);
	context.stroke();
	context.fillStyle = 'white';
	context.fill();
	//右眼
	context.beginPath();
	context.arc(250,180,18,0,2*Math.PI,true);
	context.stroke()
	context.fillStyle = '#886600';
	context.fill();
	context.beginPath();
	context.arc(249,177,15,0,2*Math.PI,true);
	context.stroke();
	context.fillStyle = 'black';
	context.fill();
	//右眼珠
	context.beginPath();
	context.arc(245,171,7,0,2*Math.PI,true);
	context.stroke();
	context.fillStyle = 'white';
	context.fill();
	//右耳
	context.beginPath();
	context.arc(253,45,100,6.3,0.41*Math.PI,false);
	context.arc(359,151,100,3.43,1.48*Math.PI,false);
	context.stroke();
	/* context.fillStyle = 'black';
	context.fill(); */
	context.beginPath();
	context.arc(252,38,100,7.1,0.45*Math.PI,false);
	context.arc(361,153,100,3.4,1.4*Math.PI,false);
	
	/* context.fillStyle = '#FFD924';
	context.fill(); */
	//左耳
	context.beginPath();
	context.arc(48,151,100,4.95,1.89*Math.PI,false);
	context.arc(170,45,100,8.34,0.97*Math.PI,false);
	context.stroke();
	context.fillStyle = 'black';
	context.fill();
	context.beginPath();
	context.arc(47,152,100,5.15,1.89*Math.PI,false);
	context.arc(173,46,100,8.3,0.8*Math.PI,false);
	context.fillStyle = '#FFD924';
	context.fill();
	//鼻子
	context.beginPath();
	context.moveTo(197,190);
	context.lineTo(210,190);
	context.lineTo(206,195);
	context.lineTo(201,195);
	context.stroke();
	context.fillStyle = 'black';
	context.fill();
	//嘴
	context.beginPath();
	context.arc(215,210,15,0.5,0.8*Math.PI,false);
	context.stroke();
	context.beginPath();
	context.arc(190,210,15,0.5,0.8*Math.PI,false);
	context.stroke();
	//腮紅
	context.beginPath();
	context.arc(282,242,20,1.0,1.95*Math.PI,false);
	context.stroke();
	context.fillStyle = 'red';
	context.fill();
	
	context.beginPath();
	context.arc(118,242,20,2.2,1.04*Math.PI,true);
	context.stroke();
	context.fillStyle = 'red';
	context.fill();
//右上
	context.beginPath();
	context.arc(600,200,150,0,2*Math.PI,true);
	context.stroke();
	//左上眼眶
	context.beginPath();
	context.moveTo(430,160);
	context.lineTo(480,180);
	context.stroke();
	//左下眼眶
	context.beginPath();
	context.moveTo(430,200);
	context.lineTo(480,190);
	context.stroke();
	//右上眼眶
	context.beginPath();
	context.moveTo(520,180);
	context.lineTo(570,160);
	context.stroke();
	//右上眼眶
	context.beginPath();
	context.moveTo(520,190);
	context.lineTo(570,200);
	context.stroke();
	//嘴巴
	context.beginPath();
	context.arc(480,250,15,0,1*Math.PI,true);
	context.stroke();
	context.beginPath();
	context.arc(510,250,15,0,1*Math.PI,false);
	context.stroke()
//左下
	context.beginPath();
	context.arc(200,550,150,0,2*Math.PI,true);
	context.stroke();
	//左眼眶
	context.beginPath();
	context.arc(170,470,25,0,2*Math.PI,true);
	context.stroke();
	//右眼眶
	context.beginPath();
	context.arc(230,470,25,0,2*Math.PI,true);
	context.stroke();
	//左眼珠
	context.beginPath();
	context.arc(170,455,10,0,2*Math.PI,true);
	context.stroke();
	context.fill();
	//右眼珠
	context.beginPath();
	context.arc(230,485,10,0,2*Math.PI,true);
	context.stroke();
	context.fill();
	//右眼淚
	context.beginPath();
	context.arc(230,500,5,0,2*Math.PI,true);
	context.stroke();
	context.beginPath();
	context.arc(230,510,4,0,2*Math.PI,true);
	context.stroke();
	context.beginPath();
	context.arc(230,520,3,0,2*Math.PI,true);
	context.stroke();
	//嘴巴
	context.beginPath();
	context.arc(200,560,25,0,1*Math.PI,true);
	context.stroke();
//右下
	context.beginPath();
	context.arc(600,550,150,0,2*Math.PI,true);
	context.stroke();
	
	//左眼眶
	context.beginPath();
	context.arc(470,470,25,0,2*Math.PI,true);
	context.stroke();
	//右眼眶
	context.beginPath();
	context.arc(530,470,25,0,2*Math.PI,true);
	context.stroke();
	//左眼珠
	context.beginPath();
	context.arc(470,455,10,0,2*Math.PI,true);
	context.stroke();
	context.fill();
	//右眼珠
	context.beginPath();
	context.arc(530,455,10,0,2*Math.PI,true);
	context.stroke();
	context.fill();
	//嘴巴
	context.beginPath();
	context.arc(500,550,25,0,1*Math.PI,false);
	context.stroke();
	context.beginPath();
	context.moveTo(475,550);
	context.lineTo(525,550);
	context.stroke();

}

window.addEventListener('load',doFirst);
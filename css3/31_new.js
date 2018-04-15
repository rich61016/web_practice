/* window.onload = doFirst;
window.onload = function(){}; */

/* window.addEventListener('load',function(){}); */
function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)
	img = document.getElementById('img');
	playbutton = document.getElementById('playbutton');
	pausebutton = document.getElementById('pausebutton');
	
	//再建事件聆聽功能
	playbutton.addEventListener('click',playimg);
	pausebutton.addEventListener('click',pauseimg);
}
function playimg(){
	img.style.animationPlayState = 'running';
}
function pauseimg(){
	img.style.animationPlayState = 'paused';
}
window.addEventListener('load',doFirst);
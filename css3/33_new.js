/* window.onload = doFirst;
window.onload = function(){}; */

/* window.addEventListener('load',function(){}); */
function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)
	document.querySelector('p').onclick = talk;
	
	//再建事件聆聽功能
	
}
function talk(){
	alert('hihi');
}
window.addEventListener('load',doFirst);
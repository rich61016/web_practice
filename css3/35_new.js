/* window.onload = doFirst;
window.onload = function(){}; */

/* window.addEventListener('load',function(){}); */
function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)
	var list = document.querySelectorAll('p');//list是陣列，就要用FOR迴圈
	for(var i=0;i<list.length;i++){
		list[i].onclick = talk;
	}
	
	//再建事件聆聽功能
	
}
function talk(){
	alert('hihi');
}
window.addEventListener('load',doFirst);
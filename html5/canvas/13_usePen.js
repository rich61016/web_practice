function doFirst(){
	//先跟HTML畫面產生關連(尋找物件)
	var canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	
	canvas.addEventListener('mousemove',usePen);
}
function usePen(e){
	context.strokeStyle = 'red';
	context.strokeRect(e.pageX,e.pageY,10,10);
}
window.addEventListener('load',doFirst); 
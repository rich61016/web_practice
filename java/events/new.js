function doFirst(){
	document.getElementById('theForm').onsubmit = setevent;
	/* var labels = document.querySelectorAll('label');
	for(var i=0;i<labels.length;i++){
		labels[i].style.color = 'maroon';
	} */
}
function setevent (){
	/* alert('hi'); */
	var events = ['click','select','contextmenu','change','keyup'];
	for(var i=0;i<events.length;i++){ /* events[i] */
		var theevent = document.getElementById(events[i]);/* 尋找物件 */
		if(theevent.checked){
			document.addEventListener(events[i],report);/* 事件聆聽功能 */
		}else{
			document.removeEventListener(events[i],report);
		}
	}
	document.getElementById('result').value = '';
	return false;
}
function report(e){/* 引用事件物件 */
	var result = e.target.nodeName+':'+e.type + '\n';  /* body:click */
	document.getElementById('result').value += result;
}
window.addEventListener('load',doFirst);
/* window.onload = doFirst; */
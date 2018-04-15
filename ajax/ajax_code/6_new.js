/**
 * 
 */
function doFirst(){
	//先跟HTML畫面產生關連
	var loadButton = document.getElementById("loadButton");
	var feedback = document.getElementById("feedback");
	
	//再建事件聆聽的功能
	loadButton.addEventListener('click',function(){
//		feedback.innerHTML = "<h2>Hello AJAX!</h2>";
	
	//step1:建立AJAX物件
		xhr = new XMLHttpRequest();
		xhr.addEventListener('readystatechange',callState);
		
	//step2:發出請求
		xhr.open('GET','jsp/index.jsp',true);	//true:非同步請求; false:同步請求
		xhr.send();
		
	//step3:接收Server的回應--文字檔
//		feedback.innerHTML = xhr.responseText;
	});
}
function callState(){
	//step3:接收Server的回應--文字檔
	if(xhr.readyState == 4){
		if(xhr.status == 200){
			feedback.innerHTML = xhr.responseText;
		}else{
			feedback.innerHTML = xhr.status + ' : ' + xhr.statusText;
		}
	}
}
window.addEventListener('load',doFirst);
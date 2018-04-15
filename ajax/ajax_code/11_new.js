/**
 * 
 */
function doFirst(){
	//先跟HTML畫面產生關連
	var loadButton = document.getElementById("loadButton");
	var feedback = document.getElementById("feedback");
	loadingImage = document.getElementById("loadingImage");
	
	//再建事件聆聽的功能
	loadButton.addEventListener('click',function(){
	//step1:建立AJAX物件
		xhr = new XMLHttpRequest();
		xhr.addEventListener('readystatechange',callState);
		
	//step2:發出請求
		var urlSource = "jsp/index.jsp";				//修改1
		xhr.open('GET',urlSource,true);	//true:非同步請求; false:同步請求
		xhr.send();
		
	});
}
function callState(){
	//step3:接收Server的回應--文字檔
	if(xhr.readyState == 1){
		loadingImage.style.display = 'block';
	}else if(xhr.readyState == 4){
		loadingImage.style.display = 'none';
		
		if(xhr.status == 200){
			feedback.innerHTML = xhr.responseText;		//修改2
		}else{
			feedback.innerHTML = xhr.status + ' : ' + xhr.statusText;
		}
	}	
	
}
window.addEventListener('load',doFirst);
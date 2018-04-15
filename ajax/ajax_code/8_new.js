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
		//第一個練習
		//var urlSource = "jsp/index.jsp";
		//xhr.open('GET',urlSource,true);	//true:非同步請求; false:同步請求
		//xhr.send();
		
		//第二個練習
		//var urlSource = "jsp/useParameter.jsp?name=Anan&age=13";
		//xhr.open('GET',urlSource,true);	//true:非同步請求; false:同步請求
		//xhr.send();
		
		//第三個練習
		var urlSource = "jsp/useParameter.jsp";
		xhr.open('POST',urlSource,true);	//true:非同步請求; false:同步請求
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		//setRequestHeader()
		//getResponsetHeader()
		xhr.send("name=Anan&age=13");
		
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
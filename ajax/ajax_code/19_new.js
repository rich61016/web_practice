function doFirst(){
	//先跟HTML畫面產生關連
	var loadButton = document.getElementById("loadButton");
	feedback = document.getElementById("feedback");
	
	//再建事件聆聽的功能
	loadButton.addEventListener('click',function(){
		
	//step1:建立AJAX物件
		xhr = new XMLHttpRequest();
		xhr.addEventListener('readystatechange',callState);
		
	//step2:發出請求		
		var urlSource = "json/animal.json";			//=====修改1=====	
		xhr.open('GET',urlSource,true);	//true:非同步請求; false:同步請求
		xhr.send();

	});
}
function callState(){
	//step3:接收Server的回應--JSON文字檔
	if(xhr.readyState == 4){
		if(xhr.status == 200){
			//=====修改2=====
			//output的結果是字串
			//var jsonData = xhr.responseText;
			//console.log(jsonData);
			
			//將JSON字串轉換成JSON物件--使用前要記得先轉換
			//第一種：eval()
			//var jsonData = xhr.responseText;
			//jsonData = eval('('+jsonData+')');
			//console.log(jsonData);
			
			//第二種：使用JSON物件 
			//var jsonData = xhr.responseText;
			//jsonData = JSON.parse(jsonData);
			//console.log(jsonData);
			
			var jsonData = xhr.responseText;
			jsonData = JSON.parse(jsonData);
//			for(var i=0;i<jsonData.length;i++){
//				console.log(jsonData[i]);
//			}
//			feedback.innerHTML = jsonData[0].Variety;		
			
		}else{
			feedback.innerHTML = xhr.status + ' : ' + xhr.statusText;
		}
	}
}
window.addEventListener('load',doFirst);



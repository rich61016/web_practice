function doFirst(){
	//先跟HTML畫面產生關連
	var loadButton = document.getElementById("loadButton");
	var feedback = document.getElementById("feedback");
	
	//再建事件聆聽的功能
	loadButton.addEventListener('click',function(){
		
	//step1:建立AJAX物件
		xhr = new XMLHttpRequest();
		xhr.addEventListener('readystatechange',callState);
		
	//step2:發出請求		
		var urlSource = "xml/newTravellocationCHINESE.xml";			//=====修改1=====	
		xhr.open('GET',urlSource,true);	//true:非同步請求; false:同步請求
		xhr.send();

	});
}
function callState(){
	//step3:接收Server的回應--文字檔
	if(xhr.readyState == 4){
		if(xhr.status == 200){
			//=====修改2=====
			var xmlData = xhr.responseXML;				
			//xmlData是一個XML DOM物件
			
			//景點有多少筆?
//			var Section = xmlData.getElementsByTagName('Section');
//			console.log(Section.length);
			
			var Section = xmlData.querySelectorAll('Section');
			var titles = xmlData.querySelectorAll('stitle');
			
//			for(var i=0;i < titles.length;i++){
//				console.log(titles[i].firstChild.nodeValue);
//			}
			
//			console.log(Section[0]);
//			console.log(Section[0].childNodes[0]);
//			console.log(Section[0].childNodes[1]);
//			console.log(Section[0].childNodes[13].firstChild.nodeValue);
//			console.log(Section[0].childNodes[15].firstChild.nodeValue);
			
//			for(var i=0;i<Section.length;i++){
//				console.log(Section[i].childNodes[13].firstChild.nodeValue);
//				console.log(Section[i].childNodes[15].firstChild.nodeValue);
//			}
			
			for(var i=0;i<Section.length;i++){
//				console.log(Section[i].getElementsByTagName('stitle')[0].firstChild.nodeValue);
//				console.log(Section[i].getElementsByTagName('xbody')[0].firstChild.nodeValue);
//				console.log(Section[i].getElementsByTagName('latitude')[0].firstChild.nodeValue);
//				console.log(Section[i].getElementsByTagName('longitude')[0].firstChild.nodeValue);
			}
			
			//出現在console裡
//			console.log(Section[0].querySelector('file').childNodes[1].firstChild.nodeValue);
			//出現在HTML畫面上
//			feedback.innerHTML = Section[0].querySelector('file').childNodes[1].firstChild.nodeValue;
			
			var theImage = document.createElement('img');
			theImage.src = Section[0].querySelector('file').childNodes[1].firstChild.nodeValue;
			
			feedback.appendChild(theImage);
			
		}else{
			feedback.innerHTML = xhr.status + ' : ' + xhr.statusText;
		}
	}
}
window.addEventListener('load',doFirst);
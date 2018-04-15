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
		var urlSource = "xml/newTravellocationCHINESE.xml";			//=====修改1=====	
		xhr.open('GET',urlSource,true);	//true:非同步請求; false:同步請求
		xhr.send();

	});
}
function callState(){
	//step3:接收Server的回應--XML文字檔
	if(xhr.readyState == 4){
		if(xhr.status == 200){
			//=====修改2=====
			var xmlData = xhr.responseXML;		//xmlData是一個XML DOM物件		

			var Section = xmlData.querySelectorAll('Section');
			var titles = xmlData.querySelectorAll('stitle');
			
			for(var i=0;i<5;i++){
				theTitle = Section[i].getElementsByTagName('stitle')[0].firstChild.nodeValue;
				theContent = Section[i].getElementsByTagName('xbody')[0].firstChild.nodeValue;
				lati = Section[i].getElementsByTagName('latitude')[0].firstChild.nodeValue;
				longi = Section[i].getElementsByTagName('longitude')[0].firstChild.nodeValue;
				theImage = Section[i].querySelector('file').childNodes[1].firstChild.nodeValue;
				
				createXMLNodes();
			}			
//			var theImage = document.createElement('img');
//			theImage.src = Section[0].querySelector('file').childNodes[1].firstChild.nodeValue;
//			
//			feedback.appendChild(theImage);
			
		}else{
			feedback.innerHTML = xhr.status + ' : ' + xhr.statusText;
		}
	}
}
function createXMLNodes(){
	var travel = document.createElement('div');
	travel.className = 'travelLocation';		//travel.setAttribute('class','travelLocation');
	
	
//	=====
	
	var leftSide = document.createElement('aside');
	leftSide.className = 'left';
	
	var image = document.createElement('img');
	image.src = theImage;
	
	leftSide.appendChild(image);
	travel.appendChild(leftSide);
	
//	=====
	var rightSide = document.createElement('section');
	rightSide.className = 'right';
	
	var header = document.createElement('header');
		
	var spanTitle = document.createElement('span');
	spanTitle.innerText = theTitle;
	
	var spanCoords = document.createElement('span');
	spanCoords.innerText = lati+' | '+longi;
	
	header.appendChild(spanTitle);
	header.appendChild(spanCoords);	
	
	var footer = document.createElement('footer');
	footer.innerText = theContent.substring(0,200);
	
	rightSide.appendChild(header);
	rightSide.appendChild(footer);
	
//	=====
	var clearBody = document.createElement('div');
	clearBody.style.clear = 'both';
	
	
//	發生load事件時，要先判斷該處是否已有物件，如果有要先刪除，
//	while(feedback.hasChildNodes()){
//		feedback.removeChild(feedback.firstChild);
//	}
//	再新增新的物件
	
//	feedback.appendChild(travel);
//	travel.appendChild(leftSide);
//	travel.appendChild(rightSide);
//	travel.appendChild(clearBody);
}
window.addEventListener('load',doFirst);



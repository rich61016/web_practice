function doFirst(){
	navigator.geolocation.getCurrentPosition(succCallback,errorCallback);
}
function succCallback(e){
	var lati = e.coords.latitude;
	var longi = e.coords.longitude;
	var accuracy = e.coords.accuracy;
	
	if(accuracy > 15000){
		document.getElementById('position').innerHTML = '超過偵測範圍';
		
	}else{
		document.getElementById('position').innerHTML = '緯度: '+lati+'<br>經度: '+longi+'<br>準確度: '+accuracy;
	}
	var myPosition = new google.maps.LatLng(25.042140699999997,121.51987159999999);
	var area = document.getElementById('myMap');

	
	var map = new google.maps.Map(area,{
		zoom: 14,
		center: myPosition,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	var marker = new google.maps.MarKer({
		position:myPosition,
		map: map,
		icon:'../../img/XNJ9A.gif',
		title:'這不是北科大吧'
	});
}
function errorCallback(e){
	/* document.getElementById('position').innerHTML = '錯誤碼: '+e.code+'<br>錯誤訊息: '+e.message; */
	alert('錯誤碼: '+e.code+'\n錯誤訊息: '+e.message);
}
window.addEventListener('load',doFirst); 
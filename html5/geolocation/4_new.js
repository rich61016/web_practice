function doFirst(){
	var myPosition = new google.maps.LatLng(25.042140699999997,121.51987159999999);
	var area = document.getElementById('myMap');
//	var options = {};
	
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
window.addEventListener('load',doFirst); 
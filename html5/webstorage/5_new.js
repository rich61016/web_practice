function storageAccess(accessId){
	var storage = localStorage;
	var key = document.getElementById('keyText').value;
	var value = document.getElementById('valueText').value;
	
	switch(accessId){
		case 1:
		  storage.setItem(key,value);
		  break;
		case 2:
		   var item = storage.getItem(key);
		   alert(item);
		  break;
		case 3:
		storage.removeItem(key);
		  break;
		case 4:
		storage.clear();
		  break;
		default:
		  break; 
	}
}
function doFirst(){
	document.getElementById('thefile').onchange = fileChange;
}
function fileChange(){
	var file = document.getElementById('thefile').files[0];
	var message = '';
	
	message += 'file name: ' + file.name + '\n';
	message += 'file size: ' + file.size + ' byte(s)\n';
	message += 'file type: ' + file.type + ' \n';
	message += 'last modified: ' + file.lastModifiedDate + ' \n';
	
	document.getElementById('fileinfo').value = message;
	
	var readfile = new FileReader();
	readfile.readAsDataURL(file);
	readfile.addEventListener('load',function(){		
		document.getElementById('image').src = this.result;
	});
	
	
}
window.addEventListener('load',doFirst);
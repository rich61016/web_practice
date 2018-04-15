function doFirst(){
	document.getElementById('thefile').onchange = fileChange;
}
function fileChange(){
	var file = document.getElementById('thefile').files;
	var message = '';
	
	for(var i=0; i<files.length; i++){
		message += 'file name: ' + files[i].name + '\n';
	    message += 'file size: ' + files[i].size + ' byte(s)\n';
	    message += 'file type: ' + files[i].type + ' \n';
	    message += 'last modified: ' + files[i].lastModifiedDate + ' \n';
	    message += '======================\n';
	    document.getElementById('fileinfo').value = message;
	}
	get
	
}
window.addEventListener('load',doFirst);
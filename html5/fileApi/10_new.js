function doFirst(){
	document.getElementById('dropzone').ondragover = dragOver;
	document.getElementById('dropzone').ondrop = dropped;
}
function dragOver(e){
	e.preventDefault();
}
function dropped(e){
	e.preventDefault();
	var file = e.dataTransfer.files[0];
	document.getElementById('filename').innerText = file.name;
	
	var readfile = new FileReader();
	readfile.readAsText(file);
	readfile.addEventListener('load',function(e){
		document.getElementById('filecontent').value = this.result;
	});
}
window.addEventListener('load',doFirst);
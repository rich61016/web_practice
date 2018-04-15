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
	readfile.readAsDataURL(file);
	readfile.addEventListener('load',function(e){
		document.getElementById('image').src = this.result;
		var image = document.getElementById('image');
		image.src = this.result;
		image.style.maxWidth = '400px';
		image.style.maxHeight = '300px';
	});
	
}
window.addEventListener('load',doFirst);
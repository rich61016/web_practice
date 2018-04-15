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
		var mymovie = document.getElementById('mymovie');
		mymovie.src = this.result;
		mymovie.controls = true;
		mymovie.width = 510;
	});
	
}
window.addEventListener('load',doFirst);
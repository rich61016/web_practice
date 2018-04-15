function doFirst(){
	barsize = 560;
	//先跟HTML畫面產生連結
	myMovie = document.getElementById('myMovie');
	playButton = document.getElementById('playButton');
	fullButton = document.getElementById('fullButton');
	upButton = document.getElementById('upButton');
	downButton = document.getElementById('downButton');
	mutueButton = document.getElementById('mutueButton');
	defaultBar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');
	
	/* barsize = praseInt(window.getComputedStyle(defaultBar).width); */
	
	//再建事件聆聽功能
	playButton.addEventListener('click',playOrPause);
	fullButton.addEventListener('click',fullScreen);
	upButton.addEventListener('click',upVolume);
	downButton.addEventListener('click',downVolume);
	mutueButton.addEventListener('click',mutueVolume);
	defaultBar.addEventListener('click',clickedBar);
}
function playOrPause(){
	if(!myMovie.paused && !myMovie.ended){     //如果影片正在跑的時候，按按鈕會暫停
		myMovie.pause();
		playButton.innerText = 'play';
		/* clearInterval(updateBar); */
	}else{
		myMovie.play();
		playButton.innerText = 'pause';
		/* updateBar = setInterval(update,300); */
		setInterval(update,300);
	}
}
function update(){
	if(!myMovie.ended){
		var size = barsize / myMovie.duration * myMovie.currentTime;
		progressBar.style.width = size + '0px';
	}else{
		progressBar.style.width = '0px';
		playButton.innerText = 'play';
	}
}
function fullScreen(){
	myMovie.webkitEnterFullScreen();
}
function upVolume(){
	
}
function downVolume(){
	
}
function mutueButton(){
	
}
function clickedBar(e){
	var mouseX = e.clientX - defaultBar.offsetLeft;
	var newTime = mouseX / (barsize / myMovie.duration);
	myMovie.currentTime = newTime;
	progressBar.style.width = mouseX + 'px';
}








window.addEventListener('load',doFirst);
	
	  
	   
	  
	
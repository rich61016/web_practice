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
	
	// 設定網頁載入就須執行的function
	showVolume();
    showPlayTime();
    setInterval(showPlayTime, 1000);

    // 靜音擴充功能，0為正常，1為靜音
    muteState = 0;
    tempVolume = 0;
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
	if (myMovie.volume < 1) {
        if (myMovie.volume + 0.1 > 1) {
            // 音量增加會破表則直接設為最大值1
            myMovie.volume = 1;
        } else {
            myMovie.volume += 0.1;
        }
        showVolume();
    }
}
function downVolume(){
	if (myMovie.volume > 0) {
        if (myMovie.volume - 0.1 < 0) {
            // 音量減少會低於0直接設為最小值0
            myMovie.volume = 0;
        } else {
            myMovie.volume -= 0.1;
        }
        showVolume();
    }
}
function mutueButton(){
	 if (muteState == 0) {
        // 將目前音量存進tempVolume
        tempVolume = myMovie.volume;
        // 將音量設為0，即為靜音
        myMovie.volume = 0;
        muteState = 1;
    } else {
        // 取消靜音，回到原本音量
        myMovie.volume = tempVolume;
        muteState = 0;
    }
    showVolume();
}
function clickedBar(e){
	var mouseX = e.clientX - defaultBar.offsetLeft;
	var newTime = mouseX / (barsize / myMovie.duration);
	myMovie.currentTime = newTime;
	progressBar.style.width = mouseX + 'px';
}
function showVolume() {
    var currentVolume = (myVideo.volume / 1) * 100;
    volumeState.innerHTML = 'Volume: ' + currentVolume.toFixed(0) + '%';
}







window.addEventListener('load',doFirst);
	
	  
	   
	  
	
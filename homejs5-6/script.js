var status = 0;
var time = 0;

function start(){
	status = 1;
	timer();
	document.getElementById("startBtn").disabled = true;
}

function stop(){
	status = 0;
	document.getElementById("startBtn").disabled = false;
}

function clearx(){
	status = 0;
	time = 0;
	document.getElementById("startBtn").disabled = false;
	document.getElementById("timerLabel").innerHTML = "00:00:00:00";
}


function timer(){
	if(status==1){  
		setTimeout(function(){
			time++;
			var hour = Math.floor(time/100/60/60);
			var min = Math.floor(time/100/60);
			var sec = Math.floor(time/100);
			var mSec = time % 100;

			if(hour < 10){
				hour = "0" + hour;
			}
			if(min < 10){
				min = "0" + min;
			}
			if(sec >=60){
				sec = sec % 60;
			}
			if(sec < 10){
				sec = "0" + sec;
			}

			document.getElementById("timerLabel").innerHTML = hour + ":" + min + ":" + sec + ":" + mSec;
			timer();

		}, 10);
	}
}
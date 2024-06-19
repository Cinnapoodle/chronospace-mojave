'use strict';
//this shit was pulled directly from WTV-HD with like 2 changes lmfao
function updateClock(){
	var now=new Date();
	var hours=now.getHours();
	var minutes=now.getMinutes();
	var seconds=now.getSeconds();
	var amPm=hours>=12?'PM':'AM';
	var formattedHours=hours%12||12;
	var a=' ';
	var timeString=`${formattedHours}:${minutes<10?'0':''}${minutes} ${amPm}`;
	document.getElementById('time').textContent=timeString;
}
setInterval(updateClock,1000);
updateClock();
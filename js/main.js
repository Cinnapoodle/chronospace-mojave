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

//Document stuff
const windowTitle=document.getElementById('title');
const browserTitle='Mojave! Master Browser - ';
const windowContents=document.querySelector('.window-content');
const iframe=document.getElementById('document');
const docName=['Chronospace Mojave!','INITIAL BOOT SEQUENCE','EPISODE ONE: THIS INSTALL IS TAKING FOREVER','EPISODE TWO: WELCOME TO THE INTERNET','EPISODE THREE, PART 1: EVERYTHINGSFINE.TXT','EPISODE THREE, PART 2: WIN32K_CRITICAL_FAILURE','EPISODE FOUR: NO MAIN SYSTEM POWER'];
function showIframe(e){
	history.pushState({},'',`#${e.id}`);
	iframe.contentWindow.location.replace(e.href);
	windowContents.classList.add('hidden');
	iframe.classList.add('shown');
	switch(e.id){
		case 'prologue':windowTitle.textContent=browserTitle+docName[1];break;
		case 'ep1':windowTitle.textContent=browserTitle+docName[2];break;
		case 'ep2':windowTitle.textContent=browserTitle+docName[3];break;
		case 'ep3p1':windowTitle.textContent=browserTitle+docName[4];break;
		case 'ep3p2':windowTitle.textContent=browserTitle+docName[5];break;
		case 'ep4':windowTitle.textContent=browserTitle+docName[6];break;
		default:windowTitle.textContent=browserTitle+docName[0];
	}
}
function hideIframe(){
	windowContents.classList.remove('hidden');
	iframe.classList.remove('shown');
	windowTitle.textContent=browserTitle+docName[0];
}
document.querySelectorAll('.window-content a').forEach(function(e){e.addEventListener('click',showIframe)});
window.addEventListener('popstate',function(ev){alert(1);hideIframe();});

//Monitor overlay toggle
function toggleOverlay(){
	const bodyClasses=document.body.classList;
	if(bodyClasses.contains('monitor-overlay')){bodyClasses.remove('monitor-overlay');}else{bodyClasses.add('monitor-overlay');}
}
document.getElementById('think').addEventListener('click',toggleOverlay);
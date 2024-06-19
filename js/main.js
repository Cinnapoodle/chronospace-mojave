'use strict';
//this shit was pulled directly from WTV-HD with like 2 changes lmfao
function updateClock(){
	var now=new Date();
	var hours=now.getHours();
	var minutes=now.getMinutes();
	var seconds=now.getSeconds();
	var amPm=hours>=12?'PM':'AM';
	var formattedHours=hours%12||12;
	var timeString=`${formattedHours}:${minutes<10?'0':''}${minutes} ${amPm}`;
	document.getElementById('time').textContent=timeString;
}
setInterval(updateClock,1000);
updateClock();

//Document stuff
const windowTitle=document.getElementById('title');
const browserTitle='Mojave! Master Browser - ';
const addressBar=document.getElementById('addressBar');
const windowContents=document.querySelector('.window-content');
const iframe=document.getElementById('document');
const docName=['Chronospace Mojave!','INITIAL BOOT SEQUENCE','EPISODE ONE: THIS INSTALL IS TAKING FOREVER','EPISODE TWO: WELCOME TO THE INTERNET','EPISODE THREE, PART 1: EVERYTHINGSFINE.TXT','EPISODE THREE, PART 2: WIN32K_CRITICAL_FAILURE','EPISODE FOUR: NO MAIN SYSTEM POWER'];
function showIframe(e){
	e.preventDefault();
	history.pushState({},'',`#${e.target.id}`);
	iframe.contentWindow.location.replace(e.target.href);
	windowContents.classList.add('hidden');
	iframe.classList.add('shown');
	addressBar.value=e.target.href;
	const d=' - ';
	switch(e.target.id){
		case 'prologue':
			document.title=docName[0]+d+docName[1];
			windowTitle.textContent=browserTitle+docName[1];
		break;
		case 'ep1':
			document.title=docName[0]+d+docName[2];
			windowTitle.textContent=browserTitle+docName[2];
		break;
		case 'ep2':
			document.title=docName[0]+d+docName[3];
			windowTitle.textContent=browserTitle+docName[3];
		break;
		case 'ep3p1':
			document.title=docName[0]+d+docName[4];
			windowTitle.textContent=browserTitle+docName[4];
		break;
		case 'ep3p2':
			document.title=docName[0]+d+docName[5];
			windowTitle.textContent=browserTitle+docName[5];
		break;
		case 'ep4':
			document.title=docName[0]+d+docName[6];
			windowTitle.textContent=browserTitle+docName[6];
		break;
		default:windowTitle.textContent=browserTitle+docName[0];document.title=docName[0];
	}
}
function hideIframe(){
	windowContents.classList.remove('hidden');
	iframe.classList.remove('shown');
	windowTitle.textContent=browserTitle+docName[0];
}
document.querySelectorAll('.window-content a').forEach(function(e){e.addEventListener('click',showIframe)});
window.addEventListener('popstate',function(){hideIframe();});

//Monitor overlay toggle
function toggleOverlay(){
	const bodyClasses=document.body.classList;
	if(bodyClasses.contains('monitor-overlay')){bodyClasses.remove('monitor-overlay');}else{bodyClasses.add('monitor-overlay');}
}
document.getElementById('think').addEventListener('click',toggleOverlay);
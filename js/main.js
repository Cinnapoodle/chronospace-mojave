'use strict';
//Document stuff
const mainWindow=document.getElementById('mainWindow');
const favsWindow=document.getElementById('favsWindow');
const windowTitle=document.getElementById('mainTitle');
const favsTitle=document.getElementById('favsTitle');
const browserTitle=' - Mojave! Master Browser';
const addressBar=document.getElementById('addressBar');
const windowContents=document.querySelector('#mainWindow .window-content');
const iframe=document.getElementById('document');
const docName=[
	'CHRONOSPACE MOJAVE!',
	'INITIAL BOOT SEQUENCE',
	'EPISODE ONE: THIS INSTALL IS TAKING FOREVER',
	'EPISODE TWO: WELCOME TO THE INTERNET',
	'EPISODE THREE, PART 1: EVERYTHINGSFINE.TXT',
	'EPISODE THREE, PART 2: WIN32K_CRITICAL_FAILURE',
	'EPISODE FOUR: NO MAIN SYSTEM POWER',
	`EPISODE FIVE: C:\CON\NUL\PRN`,
	'EPISODE SIX: BAD COMMAND OR FILE NAME',
	'EPISODE SEVEN: ABORT, RETRY, IGNORE, FAIL?',
	'THE FINAL CUT'
];
let lastDoc;
try{if(location.hash!==''){history.replaceState({},'',`https://chronosoft.day/`);}}catch(error){}
function showIframe(e){
	e.preventDefault();
	history.pushState({},'',`#${e.target.id}`);
	iframe.contentWindow.location.replace(e.target.href);
	windowContents.classList.add('hidden');
	iframe.classList.add('shown');
	addressBar.value=e.target.href;
	lastDoc=e.target.id;
	const d=' - ';
	switch(e.target.id){
		case 'prologue':
			document.title=docName[0]+d+docName[1];
			windowTitle.textContent=docName[1]+browserTitle;
		break;
		case 'ep1':
			document.title=docName[0]+d+docName[2];
			windowTitle.textContent=docName[2]+browserTitle;
		break;
		case 'ep2':
			document.title=docName[0]+d+docName[3];
			windowTitle.textContent=docName[3]+browserTitle;
		break;
		case 'ep3p1':
			document.title=docName[0]+d+docName[4];
			windowTitle.textContent=docName[4]+browserTitle;
			document.body.classList.add('vignette');
		break;
		case 'ep3p2':
			document.title=docName[0]+d+docName[5];
			windowTitle.textContent=docName[5]+browserTitle;
			document.body.classList.add('vignette');
		break;
		case 'ep4':
			document.title=docName[0]+d+docName[6];
			windowTitle.textContent=docName[6]+browserTitle;
			document.body.classList.add('vignette');
		break;
		case 'ep5':
			document.title=docName[0]+d+docName[7];
			windowTitle.textContent=docName[7]+browserTitle;
			document.body.classList.add('vignette');
		break;
		case 'ep6':
			document.title=docName[0]+d+docName[8];
			windowTitle.textContent=docName[8]+browserTitle;
			document.body.classList.add('vignette');
			document.body.classList.add('crack');
		break;
		case 'ep7':
			document.title=docName[0]+d+docName[9];
			windowTitle.textContent=docName[9]+browserTitle;
			document.body.classList.add('vignette');
			document.body.classList.add('crack');
		break;
		case 'final':
			document.title=docName[0]+d+docName[10];
			windowTitle.textContent=docName[10]+browserTitle;
			document.body.classList.add('vignette');
		break;
		default:windowTitle.textContent=docName[0]+browserTitle;document.title=docName[0];
	}
}
function hideIframe(){
	document.body.classList.remove('vignette');
	document.body.classList.remove('crack');
	windowContents.classList.remove('hidden');
	iframe.classList.remove('shown');
	iframe.contentWindow.location.replace('about:blank');
	document.title=docName[0];
	addressBar.value='https://chronosoft.day/';
	windowTitle.textContent=docName[0]+browserTitle;
}
function toggleFavs(){if(favsWindow.classList.contains('hidden')){openWindow(1);}else{exit(1);}}

document.querySelectorAll('#mainWindow .window-content a').forEach(function(e){e.addEventListener('click',showIframe)});
addEventListener('popstate',function(){hideIframe();});
function forward(){if(lastDoc){document.getElementById(lastDoc).click();}}

//Monitor overlay toggle
function toggleOverlay(){
	const bodyClasses=document.body.classList;
	if(bodyClasses.contains('monitor-overlay')){bodyClasses.remove('monitor-overlay');}else{bodyClasses.add('monitor-overlay');}
}

//Buttons
function openWindow(win){
	function doOpen(winID){
		if(winID.classList.contains('hidden')){
			minimize(win);
			document.querySelector('.'+winID.id).classList.remove('hidden');
		}else{return;}
	}switch(win){
		case 1:doOpen(favsWindow);break;
		default:doOpen(mainWindow);
	}
}

function minimize(win){
	function doMinimize(winID){
		if(winID.classList.contains('hidden')){
			winID.classList.remove('hidden');
			restore.play();
		}else{
			winID.classList.add('hidden');
			minim.play();
		}
	}switch(win){
		case 1:doMinimize(favsWindow);break;
		default:doMinimize(mainWindow);
	}
}
function maximize(win){
	function doMaximize(winID){
		if(winID.classList.contains('maximized')){
			winID.classList.remove('maximized');
			event.target.title='Maximize';
		}else{
			winID.classList.add('maximized');
			event.target.title='Restore Down';
		}
	}switch(win){
		case 1:doMaximize(favsWindow);break;
		default:doMaximize(mainWindow);
	}
}
function exit(win){
	function doExit(winID){
		winID.classList.add('hidden');
		document.querySelector('.'+winID.id).classList.add('hidden');
	}switch(win){
		case 1:doExit(favsWindow);break;
		default:doExit(mainWindow);
	}
}

function reload(){
	if(windowContents.classList.contains('hidden')){
		//hacky way to "reload" the current doc
		iframe.contentWindow.location.replace('about:blank');
		iframe.contentWindow.location.replace(addressBar.value);
	}else{location.reload(1);}
}

//this shit was pulled directly from WTV-HD with like 2 changes lmfao
function updateClock(){
	const now=new Date();
	const hours=now.getHours();
	const minutes=now.getMinutes();
	const seconds=now.getSeconds();
	const amPm=hours>=12?'PM':'AM';
	const formattedHours=hours%12||12;
	const timeString=`${formattedHours}:${minutes<10?'0':''}${minutes} ${amPm}`;
	const clock=document.getElementById('clock');
	if(clock.textContent!==timeString){clock.textContent=timeString;}
}
setInterval(updateClock,500);
updateClock();

//Sounds
const audioPath='audio/';
const click=new Audio(audioPath+'click.mp3');
const ding=new Audio(audioPath+'ding.mp3');
const minim=new Audio(audioPath+'minimize.mp3');
const restore=new Audio(audioPath+'maximize.mp3');
addEventListener('click',function(){click.play();});
document.getElementById('think').addEventListener('click',function(){ding.play();});
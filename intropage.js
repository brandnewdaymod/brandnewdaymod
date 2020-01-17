var introMusic = document.getElementById("intro")
var homeMusic = document.getElementById("home")
var scene = document.getElementById("bg")
var dreamSound = document.getElementById("static")
var hoverSound = document.getElementById("ping")
var selectSound = document.getElementById("select")
function play() {
  selectSound.play();
  introMusic.play();
  scene.src='titlescrn.png';
  document.getElementById("start").innerHTML = "New Game";
  document.getElementById('start').setAttribute( "onClick", "begin()" ); 
}

function init() {
	document.getElementById('txt');
	txt.style.visibility = "hidden";
}

window.onload = init

function begin() {
	selectSound.play();
	introMusic.pause();
	scene.src='black.jpg';
	document.getElementById("start").className = "startHidden";
	document.getElementById('txt');
	txt.style.visibility = "initial";
	dreamSound.play();
}

function ping() {
	hoverSound.play();
}
var introMusic = document.getElementById("intro")
var homeMusic = document.getElementById("home")
var scene = document.getElementById("bg")
var dreamSound = document.getElementById("static")

function myFunction() {
  document.getElementById("txt").innerHTML = "___, you must prepare for the coming storm! He’s on his way. I will...";
  document.getElementById("start").onkeypress = A;
}
function A() {
  document.getElementById("txt").innerHTML = "I MUST help you be ready.";
}

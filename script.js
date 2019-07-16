var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

var compStyles = window.getComputedStyle(body);

console.log(button);
console.log(compStyles.getPropertyValue('background-image'));
css.textContent = compStyles.getPropertyValue('background-image') + ";";
console.log(color1.value);
console.log(color1.value);

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	console.log(body.style.background);

	css.textContent = body.style.background + ";";
}

function randomColorUpdate() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomColorUpdate);

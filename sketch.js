function setup() {
	createCanvas(windowHeight, windowWidth);
	frameRate(120);
}

function draw() {
	x = map(mouseX, 0, windowHeight, 0, 255);
	y = map(mouseY, 0, windowWidth, 0, 255);
	background(x, y, 0);
}
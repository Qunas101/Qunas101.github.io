function setup() {
	createCanvas(windowHeight, windowHeight);
	background(250, 150, 150);
	frameRate(120);
}

function draw() {
	x = map(mouseX, 0, windowHeight, 0, 255);
	y = map(mouseY, 0, windowHeight, 0, 255);
	noStroke();
	fill(x, 0, y);
	ellipse(mouseX, mouseY, 90, 90);
}

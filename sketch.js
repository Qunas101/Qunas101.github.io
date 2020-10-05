function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(120);
}

function draw() {
	let hr = map(hour(), 0, 23, 0, 255);
	let min = map(minute(), 0, 59, 0, 255);
	let sec = map(second(), 0, 59, 0, 255);
	background(hr, min, sec);
}

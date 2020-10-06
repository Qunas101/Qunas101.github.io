let myFont;
let canvasX = 500;
let canvasY = 500;
function preload() {
	myFont = loadFont('_projects/clock/04B_30__.TTF');
}

function setup() {
	createCanvas(canvasX, canvasY);
}

function draw() {
	translate(canvasX/2, canvasY/2);
	let hr = map(hour(), 0, 23, 0, 255);
	let min = map(minute(), 0, 59, 0, 255);
	let sec = map(second(), 0, 59, 0, 255);
	background(hr, min, sec);

	let hrF = hour();
	let minF = minute();
	let secF = second();
	if(hour() < 10){
		hrF = '0' + hour().toString();
	}
	if(minute() < 10){
		minF = '0' + minute().toString();
	}
	if(second() < 10){
		secF = '0' + second().toString();
	}
	let x = (hr+min+sec)/3;
	textSize(80);
	textFont(myFont);
	textAlign(CENTER);
	fill(255-x, 255-x, 255-x);
	stroke(x, x, x);
	strokeWeight(8);
	text(hrF + ':' + minF + ':' + secF, 0, 0);
}

//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}

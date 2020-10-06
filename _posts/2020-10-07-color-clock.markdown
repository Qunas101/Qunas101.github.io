---
layout: post
title:  "Color Clock"
date:   2020-10-06 21:32:00 +0300
categories: p5.js
---

A simple digital clock that changes it's background color based on what time it is.

<div id="sketch-holder"></div>

<script src="../../../../libraries/p5.js"></script>
<script src="../../../../libraries/p5.dom.js"></script>
<script src="../../../../libraries/p5.sound.js"></script>

<script>

let myFont;
let canvasX = 740;
let canvasY = 460;
function preload() {
	myFont = loadFont('../../../../assets/04B_30__.TTF');
}

function setup() {
  const canvas = createCanvas(canvasX, canvasY);
  canvas.parent('sketch-holder');
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
	text(hrF + ':' + minF + ':' + secF, 0, 30);
}

//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}

</script>

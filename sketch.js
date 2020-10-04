var x1;
var y1;
var x2;
var y2;
var m1 = 20;
var m2 = 20;
var r1 = 200;
var r2 = 210;
var a1 = 0;
var a2 = 0;
var a1_v = 0;
var a2_v = 0;
var g = 9;

function setup() {
	createCanvas(1000, 1000);
	a1 = PI/2
	a2 = a1
}

function draw() {

	var num1 = -g * (2 * m1 + m2) * sin(a1);
	var num2 = -m2 * g * sin(a1 - 2 * a2);
	var num3 = -2 * sin(a1 - a2) * m2;
	var num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2);
	var den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));

	var a1_a = (num1 + num2 + num3 * num4)/den;

	 num1 = 2 * sin(a1 - a2);
	 num2 = a1_v * a1_v * r1 * (m1 + m2);
	 num3 = g * (m1 + m2) * cos(a1);
	 num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
	 den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));

	var a2_a = (num1 * (num2 + num3 + num4))/den;



	background(255);
	translate(width/2, 100);


	x1 = r1 * sin(a1);
	y1 = r1 * cos(a1);

	x2 = r2 * sin(a2) + x1;
	y2 = r2 * cos(a2) + y1;

	line(0, 0, x1, y1);
	line(x1, y1, x2, y2);

	ellipse(x1, y1, m1, m1);
	ellipse(x2, y2, m2, m2);

	a1_v += a1_a
	a2_v += a2_a
	a1 += a1_v;
	a2 += a2_v;

	}

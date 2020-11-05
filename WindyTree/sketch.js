"use strict";

var root = void 0,
    wind = void 0;

function setup() {
	createCanvas(800, 800);
	wind = createVector(0.1, 0);
	root = new Branch(createVector(width / 2, height), createVector(width / 2, height - 100));
}

function draw() {
	background(51);

	// root.applyWind(wind);
	root.show();
}

function mousePressed() {
	root.branch();
}
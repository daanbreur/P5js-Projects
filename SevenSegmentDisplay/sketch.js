"use strict";

var numbers = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B];
var index = 0;
var display = void 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	display = new SevenSegmentDisplay();
	frameRate(5);
}

function draw() {
	background(0);

	display.setValue(numbers[index]);
	display.draw();

	index = (index + 1) % numbers.length;
}
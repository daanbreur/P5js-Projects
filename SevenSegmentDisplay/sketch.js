'use strict';

var index = 0;
var displays = [],
    setValueInput = void 0,
    addDisplay = void 0,
    removeDisplay = void 0;

var counting = true;

function setup() {
	createCanvas(windowWidth, windowHeight);

	displays.push(new SevenSegmentDisplay(40, 20));
	displays.push(new SevenSegmentDisplay(180, 20));

	setValueInput = createInput();
	setValueInput.position(20, windowHeight - 40);
	setValueInput.attribute('placeholder', 'Number to be displayed');
	setValueInput.input(function () {
		counting = false;
		var data = this.value().split('');
		setDisplays(data);
	});

	addDisplay = createButton('Add Display').position(20, windowHeight - 60);
	addDisplay.elt.onclick = function () {
		var x = 40;
		if (displays.length > 0) x = displays[displays.length - 1].x + 140;
		displays.push(new SevenSegmentDisplay(x, 20));
		setDisplays(setValueInput.value().split(''));
	};
	removeDisplay = createButton('Remove Display').position(20 + addDisplay.width, windowHeight - 60);
	removeDisplay.elt.onclick = function () {
		displays.pop();
	};

	frameRate(3);
}

function draw() {
	background(0);

	if (counting) {
		setDisplays(index.toString().split(''));
		index = (index + 1) % (1 * 10 ** displays.length);
	}

	displays.forEach(function (display) {
		display.draw();
	});
}

function setDisplays(n) {
	for (var i = displays.length - 1; i >= 0; i--) {
		displays[i].setNumber(n[i]);
	}
}
let index = 0;
let displays = [],
	setValueInput,
	setValueBtn,
	addDisplay,
	removeDisplay;

let counting = true;

function setup() {
	createCanvas(windowWidth, windowHeight);

	displays.push(new SevenSegmentDisplay(40, 20));
	displays.push(new SevenSegmentDisplay(180, 20));

	addDisplay = createButton('Add Display').position(20, windowHeight - 60);
	addDisplay.elt.onclick = function(){
		let x = 40;
		if (displays.length > 0) x = displays[displays.length-1].x + 140;
		displays.push(new SevenSegmentDisplay(x, 20));
		setDisplays(setValueInput.value());
	}
	removeDisplay = createButton('Remove Display').position(20 + addDisplay.width, windowHeight - 60);
	removeDisplay.elt.onclick = function(){
		displays.pop();
		setDisplays(setValueInput.value());
	}

	setValueInput = createInput().position(20, windowHeight - 40);
	setValueInput.attribute('placeholder', 'Number to be displayed');

	setValueBtn = createButton('Set').position(20 + setValueInput.width, windowHeight - 40);
	setValueBtn.elt.onclick = function () {
		counting = false;
		setDisplays(setValueInput.value());
	}

	frameRate(3);
}

function draw() {
	background(0);

	if (counting) {
		setDisplays(index.toString());
		index = (index + 1) % (1*(10**displays.length));
	}

	displays.forEach((display) => {
		display.draw();
	});
}

function setDisplays(n) {
	n = n.length >= displays.length ? n : new Array(displays.length - n.length + 1).join('0') + n;
	n = n.split('');

	if (displays.length < n.length) {
		let extraDisplays = n.length - displays.length;
		for (let i = 0; i < extraDisplays; i++) {
			let x = 40;
			if (displays.length > 0) x = displays[displays.length-1].x + 140;
			displays.push(new SevenSegmentDisplay(x, 20));
		}
	} else if (displays.length > n.length) {
		let extraDisplays = displays.length - n.length;
		for (let i = 0; i < extraDisplays; i++) {
			displays.pop();
		}
	}
	for (let i = displays.length - 1; i >= 0; i--) {
		displays[i].setNumber(n[i]);
	}
}

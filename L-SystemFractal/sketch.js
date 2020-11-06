'use strict';

var axiom = 'F';
var rules = [{
	a: 'F',
	b: 'FF+[+F-F-F]-[-F+F+F]'
}];

var angle = void 0;
var len = 100;

function turtle() {
	background(51);
	resetMatrix();
	translate(width / 2, height);
	stroke(255, 100);
	for (var i = 0; i < axiom.length; i++) {
		var current = axiom.charAt(i);
		switch (current) {
			case 'F':
				line(0, 0, 0, -len);
				translate(0, -len);
				break;
			case '+':
				rotate(angle);
				break;
			case '-':
				rotate(-angle);
				break;
			case '[':
				push();
				break;
			case ']':
				pop();
				break;
			default:
				break;
		}
	}
}

function generate() {
	len *= 0.7;
	var nextAxiom = '';
	for (var i = 0; i < axiom.length; i++) {
		var current = axiom.charAt(i);
		var found = false;
		for (var j = 0; j < rules.length; j++) {
			if (current == rules[j].a) {
				found = true;
				nextAxiom += rules[j].b;
				break;
			}
		}
		if (!found) nextAxiom += current;
	}
	axiom = nextAxiom;
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	angle = radians(25);

	var genBtn = createButton('Generate').position(0, 0);
	genBtn.elt.onclick = async function () {
		generate();
		turtle();
	};
}
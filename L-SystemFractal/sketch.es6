let axiom = 'F';
let rules = [
	{
		a: 'F',
		b: 'FF+[+F-F-F]-[-F+F+F]',
	},
];

let angle;
let len = 100;

function turtle() {
	background(51);
	resetMatrix();
	translate(width / 2, height);
	stroke(255, 100);
	for (var i = 0; i < axiom.length; i++) {
		var current = axiom.charAt(i);
		if (current == 'F') {
			line(0, 0, 0, -len);
			translate(0, -len);
		} else if (current == '+') {
			rotate(angle);
		} else if (current == '-') {
			rotate(-angle);
		} else if (current == '[') {
			push();
		} else if (current == ']') {
			pop();
		}
	}
}

function generate() {
	len *= 0.7;
	let nextAxiom = '';
	for (let i = 0; i < axiom.length; i++) {
		let current = axiom.charAt(i);
		let found = false;
		for (let j = 0; j < rules.length; j++) {
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

	let genBtn = createButton('Generate').position(0, 0);
	genBtn.elt.onclick = async () => {
		generate();
		turtle();
	};
}

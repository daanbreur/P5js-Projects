let cols, rows;
let w = 5;

let painters = [],
	stacks = [],
	grid = [];

let colors = [
	// [255, 0, 255],
	// [0, 0, 255],
	// [255, 175, 255],
	// [0, 255, 0],
	// [255, 200, 0],
	// [255, 0, 0], 
	// [222, 92, 255],
	// [89, 249, 255],
	// [180, 255, 168],
	// [0, 199, 159],
	// [241, 197, 232],
	// [174, 0, 255],
	// [181, 225, 172],
	// [65, 130, 170],
	// [192, 93, 183],
	// [200, 115, 231],
	// [88, 93, 138],

	[0, 199, 159],
	[0, 199, 159],
	[0, 199, 159],
	[0, 199, 159],
	[0, 199, 159],

	[7, 234, 189],
	[7, 234, 189],
	[7, 234, 189],
	[7, 234, 189],
	[7, 234, 189],
	
	[44, 201, 170],
	[44, 201, 170],
	[44, 201, 170],
	[44, 201, 170],
	[44, 201, 170],
];

function setup() {
	createCanvas(windowWidth, windowHeight);

	rows = floor(width / w);
	cols = floor(height / w);

	for (let i = 0; i < rows; i++) {
		grid[i] = [];
		for (let j = 0; j < cols; j++) {
			let cell = new Cell(i, j);
			grid[i][j] = cell;
		}
	}

	for (let i = 0; i < colors.length; i++) {
		stacks[i] = [];
		painters[i] = random(random(grid));
		console.log(i, painters[i]);
	}
	console.log(`
== Setup ==
	Width: ${width}, Height ${height}
	Rows: ${rows}, Columns: ${cols}
	Colors:
		${colors.join('\n\t\t')}
	`);
}

function draw() {
	background(51);
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			grid[i][j].show();
		}
	}

	for (let i = 0; i < painters.length; i++) {
		painters[i].visited = true;
		painters[i].c = colors[i];

		let next = painters[i].getNeighbor();
		if (next) {
			next.visited = true;
			next.c = colors[i];
			stacks[i].push(painters[i]);
			painters[i] = next;
		} else if (stacks[i].length > 0) painters[i] = stacks[i].pop();
	}
}

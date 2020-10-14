let cols, rows;
let w = 20;

let current,
	grid = [],
	stack = [];

function setup() {
	// createCanvas(windowWidth, windowHeight);
	createCanvas(900, 900);
	
	cols = floor(width / w);
	rows = floor(height / w);

	for (let i = 0; i < rows; i++) {
		grid[i] = [];
		for (let j = 0; j < cols; j++) {
			let cell = new Cell(i, j);
			grid[i][j] = cell;
		}
	}

	current = grid[0][0];
}

function draw() {
	background(51);
	for (let j = 0; j < rows; j++) {
		for (let i = 0; i < cols; i++) {
			grid[j][i].show();
		}
	}

	current.highlight();
	current.visited = true;
	let next = current.getNeighbor();
	// if (!next && stack.length > 0) return current = stack.pop();
	if (next) {
		next.visited = true;
		next.c = 1;
		stack.push(current)
		removeWalls(current, next);
		current = next;
	} else if (stack.length > 0) current = stack.pop();

}

function removeWalls(current, next) {
	let x = current.i - next.i;
	let y = current.j - next.j;

	switch (x) {
		case -1:
			current.walls[1] = false;
			next.walls[3] = false;
			break;
		case 1:
			current.walls[3] = false;
			next.walls[1] = false;
			break;
	}

	switch (y) {
		case -1:
			current.walls[2] = false;
			next.walls[0] = false;
			break;
		case 1:
			current.walls[0] = false;
			next.walls[2] = false;
			break;
	}
}

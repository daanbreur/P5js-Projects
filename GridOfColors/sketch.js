'use strict';

var cols = void 0,
    rows = void 0;
var w = 5;

var painters = [],
    stacks = [],
    grid = [];

var colors = [
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

[0, 199, 159], [0, 199, 159], [0, 199, 159], [0, 199, 159], [0, 199, 159], [7, 234, 189], [7, 234, 189], [7, 234, 189], [7, 234, 189], [7, 234, 189], [44, 201, 170], [44, 201, 170], [44, 201, 170], [44, 201, 170], [44, 201, 170]];

function setup() {
	createCanvas(windowWidth, windowHeight);

	rows = floor(width / w);
	cols = floor(height / w);

	for (var i = 0; i < rows; i++) {
		grid[i] = [];
		for (var j = 0; j < cols; j++) {
			var cell = new Cell(i, j);
			grid[i][j] = cell;
		}
	}

	for (var _i = 0; _i < colors.length; _i++) {
		stacks[_i] = [];
		painters[_i] = random(random(grid));
		console.log(_i, painters[_i]);
	}
	console.log('\n== Setup ==\n\tWidth: ' + width + ', Height ' + height + '\n\tRows: ' + rows + ', Columns: ' + cols + '\n\tColors:\n\t\t' + colors.join('\n\t\t') + '\n\t');
}

function draw() {
	background(51);
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < cols; j++) {
			grid[i][j].show();
		}
	}

	for (var _i2 = 0; _i2 < painters.length; _i2++) {
		painters[_i2].visited = true;
		painters[_i2].c = colors[_i2];

		var next = painters[_i2].getNeighbor();
		if (next) {
			next.visited = true;
			next.c = colors[_i2];
			stacks[_i2].push(painters[_i2]);
			painters[_i2] = next;
		} else if (stacks[_i2].length > 0) painters[_i2] = stacks[_i2].pop();
	}
}
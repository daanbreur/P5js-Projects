"use strict";

var cols = void 0,
    rows = void 0;
var w = 20;

var current = void 0,
    grid = [],
    stack = [];

function setup() {
	// createCanvas(windowWidth, windowHeight);
	createCanvas(900, 900);

	cols = floor(width / w);
	rows = floor(height / w);

	for (var i = 0; i < rows; i++) {
		grid[i] = [];
		for (var j = 0; j < cols; j++) {
			var cell = new Cell(i, j);
			grid[i][j] = cell;
		}
	}

	current = grid[0][0];
}

function draw() {
	background(51);
	for (var j = 0; j < rows; j++) {
		for (var i = 0; i < cols; i++) {
			grid[j][i].show();
		}
	}

	current.highlight();
	current.visited = true;
	var next = current.getNeighbor();
	// if (!next && stack.length > 0) return current = stack.pop();
	if (next) {
		next.visited = true;
		next.c = 1;
		stack.push(current);
		removeWalls(current, next);
		current = next;
	} else if (stack.length > 0) current = stack.pop();
}

function removeWalls(current, next) {
	var x = current.i - next.i;
	var y = current.j - next.j;

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
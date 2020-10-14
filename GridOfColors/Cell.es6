class Cell {
	constructor(i, j) {
		this.i = i;
    this.j = j;
    this.c = [];
    this.visited = false;
	}

	// highlight() {
	// 	let x = this.i * w;
	// 	let y = this.j * w;
	// 	noStroke();
	// 	fill(0, 100, 255, 100);
	// 	rect(x, y, w, w);
	// }

	show() {
		let x = this.i * w;
		let y = this.j * w;

		if (this.visited) {
			noStroke();
			fill(this.c[0], this.c[1], this.c[2], /*100*/);
			rect(x, y, w, w);
		}
	}

	getCell(i, j) {
		if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1) return undefined;
		else return grid[i][j];
	}

	getNeighbor() {
		let neighbors = [];

		let top = this.getCell(this.i, this.j - 1);
		let right = this.getCell(this.i + 1, this.j);
		let bottom = this.getCell(this.i, this.j + 1);
		let left = this.getCell(this.i - 1, this.j);

		if (top && !top.visited) neighbors.push(top);
		if (right && !right.visited) neighbors.push(right);
		if (bottom && !bottom.visited) neighbors.push(bottom);
		if (left && !left.visited) neighbors.push(left);

		if (neighbors.length > 0) return neighbors[floor(random(0, neighbors.length))];
		else return undefined;
	}
}

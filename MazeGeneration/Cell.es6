class Cell {
	constructor(i, j) {
		this.i = i;
		this.j = j;
		this.walls = [
			/* TOP */ true,
			/* RIGHT */ true,
			/* BOTTOM */ true,
			/* LEFT */ true,
		];
		this.visited = false;
	}

	highlight() {
		let x = this.i * w;
		let y = this.j * w;
		noStroke();
		fill(0, 100, 255, 100);
		rect(x, y, w, w);
	}

	show() {
		let x = this.i * w;
		let y = this.j * w;
		stroke(255);
		noFill();

		if (this.walls[0]) line(x, y, x + w, y); // TOP
		if (this.walls[1]) line(x + w, y, x + w, y + w); // RIGHT
		if (this.walls[2]) line(x, y + w, x + w, y + w); // BOTTOM
		if (this.walls[3]) line(x, y, x, y + w); // LEFT

		if (this.visited) {
			noStroke();
			fill(255, 20, 255, 100);
			rect(x, y, w, w);
		}
	}

	getCell(i, j) {
		if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) return undefined;
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

		if (neighbors.length > 0)
			return neighbors[floor(random(0, neighbors.length))];
		else return undefined;
	}
}

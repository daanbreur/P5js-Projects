"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = function () {
	function Cell(i, j) {
		_classCallCheck(this, Cell);

		this.i = i;
		this.j = j;
		this.walls = [
		/* TOP */true,
		/* RIGHT */true,
		/* BOTTOM */true,
		/* LEFT */true];
		this.visited = false;
	}

	_createClass(Cell, [{
		key: "highlight",
		value: function highlight() {
			var x = this.i * w;
			var y = this.j * w;
			noStroke();
			fill(0, 100, 255, 100);
			rect(x, y, w, w);
		}
	}, {
		key: "show",
		value: function show() {
			var x = this.i * w;
			var y = this.j * w;
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
	}, {
		key: "getCell",
		value: function getCell(i, j) {
			if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) return undefined;else return grid[i][j];
		}
	}, {
		key: "getNeighbor",
		value: function getNeighbor() {
			var neighbors = [];

			var top = this.getCell(this.i, this.j - 1);
			var right = this.getCell(this.i + 1, this.j);
			var bottom = this.getCell(this.i, this.j + 1);
			var left = this.getCell(this.i - 1, this.j);

			if (top && !top.visited) neighbors.push(top);
			if (right && !right.visited) neighbors.push(right);
			if (bottom && !bottom.visited) neighbors.push(bottom);
			if (left && !left.visited) neighbors.push(left);

			if (neighbors.length > 0) return neighbors[floor(random(0, neighbors.length))];else return undefined;
		}
	}]);

	return Cell;
}();
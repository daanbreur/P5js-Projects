"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = function () {
	function Cell(i, j) {
		_classCallCheck(this, Cell);

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

	_createClass(Cell, [{
		key: "show",
		value: function show() {
			var x = this.i * w;
			var y = this.j * w;

			if (this.visited) {
				noStroke();
				fill(this.c[0], this.c[1], this.c[2] /*100*/);
				rect(x, y, w, w);
			}
		}
	}, {
		key: "getCell",
		value: function getCell(i, j) {
			if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1) return undefined;else return grid[i][j];
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
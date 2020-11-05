"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Branch = function () {
	function Branch(begin, end) {
		_classCallCheck(this, Branch);

		this.begin = begin;
		this.end = end;

		this.grown = false;

		this.left = null;
		this.right = null;
	}

	_createClass(Branch, [{
		key: "applyWind",
		value: function applyWind(wind) {
			this.end.add(wind);
			if (this.left != null) this.left.applyWind(wind);
			if (this.right != null) this.right.applyWind(wind);
		}
	}, {
		key: "show",
		value: function show() {
			stroke(255);
			line(this.begin.x, this.begin.y, this.end.x, this.end.y);

			if (this.left != null) this.left.show();
			if (this.right != null) this.right.show();
		}
	}, {
		key: "branch",
		value: function branch() {
			if (this.grown && this.right && this.left) {
				this.right.branch();
				this.left.branch();
			} else {
				var dir = p5.Vector.sub(this.end, this.begin).mult(0.67);

				dir.rotate(PI / 4);
				var newEndRight = p5.Vector.add(this.end, dir);
				dir.rotate(-PI / 2);
				var newEndLeft = p5.Vector.add(this.end, dir);

				this.right = new Branch(this.end, newEndRight);
				this.left = new Branch(this.end, newEndLeft);
				this.grown = true;
			}
		}
	}]);

	return Branch;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BinaryTree = function () {
	function BinaryTree() {
		_classCallCheck(this, BinaryTree);

		this.root = null;
	}

	_createClass(BinaryTree, [{
		key: "addValue",
		value: function addValue(value) {
			var n = new TreeNode(value);
			if (this.root == null) {
				this.root = n;
			} else {
				this.root.addNode(n);
			}
		}
	}, {
		key: "search",
		value: function search(value) {
			return this.root.search(value);
		}
	}, {
		key: "traverse",
		value: function traverse() {
			this.root.visit();
		}
	}]);

	return BinaryTree;
}();
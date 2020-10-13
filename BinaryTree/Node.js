"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TreeNode = function () {
	function TreeNode(val) {
		_classCallCheck(this, TreeNode);

		this.value = val;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	_createClass(TreeNode, [{
		key: "addNode",
		value: function addNode(node) {
			if (node.value < this.value) {
				if (this.left == null) {
					node.parent = this;
					this.left = node;
				} else {
					this.left.addNode(node);
				}
			} else if (node.value > this.value) {
				if (this.right == null) {
					node.parent = this;
					this.right = node;
				} else {
					this.right.addNode(node);
				}
			}
		}
	}, {
		key: "visit",
		value: function visit() {
			if (this.left != null) this.left.visit();
			console.log(this.value);
			if (this.right != null) this.right.visit();
		}
	}, {
		key: "search",
		value: function search(value) {
			if (this.value == value) {
				return this;
			} else {
				if (this.left != null && value < this.value) return this.left.search(value);
				if (this.right != null && value > this.value) return this.right.search(value);
			}
			return null;
		}
	}]);

	return TreeNode;
}();
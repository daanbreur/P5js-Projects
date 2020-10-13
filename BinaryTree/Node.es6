class TreeNode {
	constructor(val) {
		this.value = val;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	addNode(node) {
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

	visit() {
		if (this.left != null) this.left.visit();
		console.log(this.value);
		if (this.right != null) this.right.visit();
	}

	search(value) {
		if ( this.value == value ) {
			return this;
		} else {
			if (this.left != null && value < this.value) return this.left.search(value);
			if (this.right != null && value > this.value) return this.right.search(value);
		}
		return null;
	}
}

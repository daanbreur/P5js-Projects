class BinaryTree {
	constructor() {
		this.root = null;
	}

	addValue(value) {
		let n = new TreeNode(value);
		if (this.root == null) {
			this.root = n;
		} else {
			this.root.addNode(n);
		}
	}

	search(value) {
		return this.root.search(value);
	}

	traverse() {
		this.root.visit();
	}
}

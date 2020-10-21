class Branch {
	constructor(begin, end) {
		this.begin = begin;
		this.end = end;

		this.grown = false;

		this.left = null;
		this.right = null;
  }
  
  applyWind(wind) {
    this.end.add(wind);
    if (this.left != null) this.left.applyWind(wind);
		if (this.right != null) this.right.applyWind(wind);
  }

	show() {
		stroke(255);
		line(this.begin.x, this.begin.y, this.end.x, this.end.y);

		if (this.left != null) this.left.show();
		if (this.right != null) this.right.show();
  }

	branch() {
		if (this.grown && this.right && this.left) {
      this.right.branch();
      this.left.branch();
		} else {
			let dir = p5.Vector.sub(this.end, this.begin).mult(0.67);

			dir.rotate(PI / 4);
			let newEndRight = p5.Vector.add(this.end, dir);
			dir.rotate(-PI / 2);
			let newEndLeft = p5.Vector.add(this.end, dir);

			this.right = new Branch(this.end, newEndRight);
			this.left = new Branch(this.end, newEndLeft);
			this.grown = true;
		}
	}
}

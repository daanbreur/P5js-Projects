class SevenSegmentDisplay {

    constructor ( x, y ) {
        this.x = x;
        this.y = y;
        this.value = 0x7E;
    } 

    /**
     * @private
     * @param {Number} val number
     * @param {Number} shift amount to shift
     * @returns color
     */
    getColor(val, shift) {
        let r = 255;
        let g = 0;
        let b = 0;
        let a = 40+255 * ((val >> shift) & 1);
        return color(r, g, b, a);
    }

    setValue( value ) {
        this.val = value;
    }

    draw () {
        push();
        noStroke();
        noFill();
        // A
        fill(this.getColor(this.val, 6));
        rect(60, 20, 78, 18, 10, 10);
        // B
        fill(this.getColor(this.val, 5));
        rect(140, 40, 18, 98, 10, 10);
        // C
        fill(this.getColor(this.val, 4));
        rect(140, 160, 18, 98, 10, 10);
        // D
        fill(this.getColor(this.val, 3));
        rect(60, 260, 78, 18, 10, 10);
        // E
        fill(this.getColor(this.val, 2));
        rect(40, 160, 18, 98, 10, 10);
        // F
        fill(this.getColor(this.val, 1));
        rect(40, 40, 18, 98, 10, 10);
        // G
        fill(this.getColor(this.val, 0));
        rect(60, 140, 78, 18, 10, 10);
      
        pop();
    }
}
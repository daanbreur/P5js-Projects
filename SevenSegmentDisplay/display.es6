const numbers = [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b];

class SevenSegmentDisplay {

    /**
     *Creates an instance of SevenSegmentDisplay.
     * @param {Number} x
     * @param {Number} y
     * @memberof SevenSegmentDisplay
     */
    constructor( x, y ) {
        this.x = x;
        this.y = y;
        this.value = numbers[0];
    } 


    /**
     * Returns the the rgba color 
     *
     * @private
     * @param {Number} val
     * @param {Number} shift
     * @returns
     * @memberof SevenSegmentDisplay
     */
    getColor(val, shift) {
        let r = 255;
        let g = 0;
        let b = 0;
        let a = 40+255 * ((val >> shift) & 1);
        return color(r, g, b, a);
    }

    /**
     * Sets the number displayed (0 - 9)
     *
     * @param {Number} number
     * @memberof SevenSegmentDisplay
     */
    setNumber(n) {
        this.value = numbers[n];
    }

    /**
     * Draw the SevenSegmentDisplay
     *
     * @memberof SevenSegmentDisplay
     */
    draw() {
        push();
        noStroke();
        noFill();

        // A
        fill(this.getColor(this.value, 6));
        rect(this.x+20, this.y, 78, 18, 10, 10);
        // B
        fill(this.getColor(this.value, 5));
        rect(this.x+100, this.y+20, 18, 98, 10, 10);
        // C
        fill(this.getColor(this.value, 4));
        rect(this.x+100, this.y+140, 18, 98, 10, 10);
        // D
        fill(this.getColor(this.value, 3));
        rect(this.x+20, this.y+240, 78, 18, 10, 10);
        // E
        fill(this.getColor(this.value, 2));
        rect(this.x, this.y+140, 18, 98, 10, 10);
        // F
        fill(this.getColor(this.value, 1));
        rect(this.x, this.y+20, 18, 98, 10, 10);
        // G
        fill(this.getColor(this.value, 0));
        rect(this.x+20, this.y+120, 78, 18, 10, 10);

        pop();
    }
}
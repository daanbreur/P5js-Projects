"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var numbers = [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b];

var SevenSegmentDisplay = function () {

    /**
     *Creates an instance of SevenSegmentDisplay.
     * @param {Number} x
     * @param {Number} y
     * @memberof SevenSegmentDisplay
     */
    function SevenSegmentDisplay(x, y) {
        _classCallCheck(this, SevenSegmentDisplay);

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


    _createClass(SevenSegmentDisplay, [{
        key: "getColor",
        value: function getColor(val, shift) {
            var r = 255;
            var g = 0;
            var b = 0;
            var a = 40 + 255 * (val >> shift & 1);
            return color(r, g, b, a);
        }

        /**
         * Sets the number displayed (0 - 9)
         *
         * @param {Number} number
         * @memberof SevenSegmentDisplay
         */

    }, {
        key: "setNumber",
        value: function setNumber(n) {
            this.value = numbers[n];
        }

        /**
         * Draw the SevenSegmentDisplay
         *
         * @memberof SevenSegmentDisplay
         */

    }, {
        key: "draw",
        value: function draw() {
            push();
            noStroke();
            noFill();

            // A
            fill(this.getColor(this.value, 6));
            rect(this.x + 20, this.y, 78, 18, 10, 10);
            // B
            fill(this.getColor(this.value, 5));
            rect(this.x + 100, this.y + 20, 18, 98, 10, 10);
            // C
            fill(this.getColor(this.value, 4));
            rect(this.x + 100, this.y + 140, 18, 98, 10, 10);
            // D
            fill(this.getColor(this.value, 3));
            rect(this.x + 20, this.y + 240, 78, 18, 10, 10);
            // E
            fill(this.getColor(this.value, 2));
            rect(this.x, this.y + 140, 18, 98, 10, 10);
            // F
            fill(this.getColor(this.value, 1));
            rect(this.x, this.y + 20, 18, 98, 10, 10);
            // G
            fill(this.getColor(this.value, 0));
            rect(this.x + 20, this.y + 120, 78, 18, 10, 10);

            pop();
        }
    }]);

    return SevenSegmentDisplay;
}();
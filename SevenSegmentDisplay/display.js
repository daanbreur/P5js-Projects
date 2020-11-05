"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SevenSegmentDisplay = function () {
    function SevenSegmentDisplay(x, y) {
        _classCallCheck(this, SevenSegmentDisplay);

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


    _createClass(SevenSegmentDisplay, [{
        key: "getColor",
        value: function getColor(val, shift) {
            var r = 255;
            var g = 0;
            var b = 0;
            var a = 40 + 255 * (val >> shift & 1);
            return color(r, g, b, a);
        }
    }, {
        key: "setValue",
        value: function setValue(value) {
            this.val = value;
        }
    }, {
        key: "draw",
        value: function draw() {
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
    }]);

    return SevenSegmentDisplay;
}();
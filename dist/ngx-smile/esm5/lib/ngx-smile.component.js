/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var NgxSmileComponent = /** @class */ (function () {
    function NgxSmileComponent() {
        this.showDebug = false; // use this to display debug and test data
        // use this to display debug and test data
        this.size = 150;
        this.faceColor = '#fff';
        this.borderColor = '#000000';
        this.thickness = 4;
        this.mouthVariation = 0;
        this.blinkRepeatSpeed = 3000 + Math.round(Math.random() * 100);
        this.head = { positionX: 0, positionY: 0, ray: 0, strokeColor: '', strokeWidth: 0, fillColor: '' };
        this.leftEye = { positionX: 0, positionY: 0, ray: 0, strokeColor: '', strokeWidth: 0, fillColor: '' };
        this.rightEye = { positionX: 0, positionY: 0, ray: 0, strokeColor: '', strokeWidth: 0, fillColor: '' };
        this.mouth = { d: '', strokeColor: '', strokeWidth: 0, fillColor: '' };
        this.blinkTimings = { x: {}, y: {} };
        this.debug = undefined;
        this.showLines = false;
    }
    /**
     * @return {?}
     */
    NgxSmileComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.thickness = Number(this.thickness);
        this.size = Number(this.size);
        this.mouthVariation = Number(this.mouthVariation);
        this.blinkRepeatSpeed = Number(this.blinkRepeatSpeed);
        this.maxMouthHeigth = this.size / 4;
        this.setImageDimension();
        this.drawFace();
    };
    /**
     * @return {?}
     */
    NgxSmileComponent.prototype.drawFace = /**
     * @return {?}
     */
    function () {
        this.setImageDimension();
        this.drawHead();
        this.drawLeftEye();
        this.drawRightEye();
        this.drawSmile();
        this.setupEyesAnimations();
    };
    /**
     * @return {?}
     */
    NgxSmileComponent.prototype.setImageDimension = /**
     * @return {?}
     */
    function () {
        this.dimension = this.size + this.thickness * 2;
    };
    /**
     * @param {?} _
     * @return {?}
     */
    NgxSmileComponent.prototype.udpateSmileSlider = /**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        this.drawFace();
    };
    /**
     * @return {?}
     */
    NgxSmileComponent.prototype.toggleLines = /**
     * @return {?}
     */
    function () {
        this.showLines = !this.showLines;
    };
    /**
     * @return {?}
     */
    NgxSmileComponent.prototype.drawHead = /**
     * @return {?}
     */
    function () {
        this.head.positionX = this.head.positionY = this.size / 2 + this.thickness;
        this.head.ray = this.size / 2;
        this.head.strokeColor = this.borderColor;
        this.head.strokeWidth = this.thickness;
        this.head.fillColor = this.faceColor;
    };
    /**
     * @return {?}
     */
    NgxSmileComponent.prototype.drawLeftEye = /**
     * @return {?}
     */
    function () {
        this.leftEye.positionX = this.leftEye.positionY = this.size / 3 + this.thickness;
        this.leftEye.ray = this.size / 20;
        this.leftEye.strokeColor = this.borderColor;
        this.leftEye.strokeWidth = this.thickness;
        this.leftEye.fillColor = this.borderColor;
    };
    /**
     * @return {?}
     */
    NgxSmileComponent.prototype.drawRightEye = /**
     * @return {?}
     */
    function () {
        this.rightEye.positionX = this.size * 2 / 3 + this.thickness;
        this.rightEye.positionY = this.size / 3 + this.thickness;
        this.rightEye.ray = this.size / 20;
        this.rightEye.strokeColor = this.borderColor;
        this.rightEye.strokeWidth = this.thickness;
        this.rightEye.fillColor = this.borderColor;
    };
    /**
     * @return {?}
     */
    NgxSmileComponent.prototype.drawSmile = /**
     * @return {?}
     */
    function () {
        // this.mouth.d = 'M70 60 C 70 80, 130 80, 110 60';
        // this.mouth.d = 'M70 110 C 70 140, 110 140, 110 110';
        // this.mouth.d = 'M10 10 C 20 20, 40 20, 50 10';\
        // this.mouth.d = `M C ${this.size * 2 / 3} 140, ${this.size * 1 / 3} 140, ${this.size * 2 / 3} 110`;
        // this.mouth.d = `M${this.size * 2 / 8} ${this.size * 2 / 3} C ${this.size * 2 / 8} ${this.size * 2 / 3}, ${
        //   this.size * 6 / 8} ${this.size * 2 / 3}, ${this.size * 6 / 8} ${this.size * 2 / 3}`; // => this is a flat mouth
        // this.mouth.d = 'M70 60 C 70 80, 130 80, 110 60';
        // this.mouth.d = 'M70 110 C 70 140, 110 140, 110 110';
        // this.mouth.d = 'M10 10 C 20 20, 40 20, 50 10';\
        // this.mouth.d = `M C ${this.size * 2 / 3} 140, ${this.size * 1 / 3} 140, ${this.size * 2 / 3} 110`;
        // this.mouth.d = `M${this.size * 2 / 8} ${this.size * 2 / 3} C ${this.size * 2 / 8} ${this.size * 2 / 3}, ${
        //   this.size * 6 / 8} ${this.size * 2 / 3}, ${this.size * 6 / 8} ${this.size * 2 / 3}`; // => this is a flat mouth
        // const maxMouthHeigth = this.size / 6;
        /** @type {?} */
        var maxThreshold = this.maxMouthHeigth / 2;
        /** @type {?} */
        var basePositionLeftX = this.size * 2 / 8 + this.thickness;
        /** @type {?} */
        var basePositionLeftY = this.size * 2 / 3 + this.thickness;
        /** @type {?} */
        var leftTopPointCoords = {
            x: basePositionLeftX - this.mouthVariation,
            y: basePositionLeftY - (maxThreshold * this.threshold)
        };
        /** @type {?} */
        var leftBottomPointCoords = {
            x: basePositionLeftX + this.mouthVariation,
            y: basePositionLeftY + (maxThreshold * this.threshold)
        };
        /** @type {?} */
        var basePositionRightX = this.size * 6 / 8 + this.thickness;
        /** @type {?} */
        var basePositionRightY = this.size * 2 / 3 + this.thickness;
        /** @type {?} */
        var rightTopPointCoords = {
            x: basePositionRightX + this.mouthVariation,
            y: basePositionRightY - (maxThreshold * this.threshold)
        };
        /** @type {?} */
        var rightBottomPointCoords = {
            x: basePositionRightX - this.mouthVariation,
            y: basePositionRightY + (maxThreshold * this.threshold)
        };
        this.mouth.d = "M" + leftTopPointCoords.x + " " + leftTopPointCoords.y + " C " + leftBottomPointCoords.x + " " + leftBottomPointCoords.y + ", " + rightBottomPointCoords.x + " " + rightBottomPointCoords.y + ", " + rightTopPointCoords.x + " " + rightTopPointCoords.y;
        this.debug = {
            leftTop: tslib_1.__assign({}, leftTopPointCoords, { color: '#f55' }),
            leftBottom: tslib_1.__assign({}, leftBottomPointCoords, { color: '#5f5' }),
            leftLine: "M" + leftTopPointCoords.x + " " + leftTopPointCoords.y + ", " + leftBottomPointCoords.x + " " + leftBottomPointCoords.y,
            rightBottom: tslib_1.__assign({}, rightBottomPointCoords, { color: '#f55' }),
            rightTop: tslib_1.__assign({}, rightTopPointCoords, { color: '#5f5' }),
            rightLine: "M" + rightBottomPointCoords.x + " " + rightBottomPointCoords.y + ", " + rightTopPointCoords.x + " " + rightTopPointCoords.y,
        };
        this.mouth.strokeColor = this.borderColor;
        this.mouth.fillColor = 'transparent';
        this.mouth.strokeWidth = this.thickness;
    };
    /**
     * @return {?}
     */
    NgxSmileComponent.prototype.setupEyesAnimations = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultWidth = this.size / 20;
        /** @type {?} */
        var animationDuration = Number(this.blinkRepeatSpeed);
        // ms
        /** @type {?} */
        var blinkDuration = 150;
        // ms
        /** @type {?} */
        var repeatCount = this.showDebug ? 'indefinite' : '10';
        /** @type {?} */
        var keyTimeBlinkStart = (animationDuration - blinkDuration) / animationDuration;
        // 0.95 for 3000ms
        /** @type {?} */
        var blinkDurationPrct = (blinkDuration) / animationDuration;
        /** @type {?} */
        var keyTimesPrct = keyTimeBlinkStart + blinkDurationPrct * 0.1 + "; " + (keyTimeBlinkStart + blinkDurationPrct * 0.2);
        this.blinkTimings.y = {
            attributeName: 'ry',
            fill: 'remove',
            dur: animationDuration + "ms",
            repeatCount: repeatCount,
            values: defaultWidth + "; " + defaultWidth + "; " + defaultWidth * 1.25 + "; 0; " + defaultWidth,
            keyTimes: "0; " + keyTimeBlinkStart + "; " + keyTimesPrct + "; 1" // "0; 0.95; 0.955; 0.96; 1" for 3000ms
        };
        this.blinkTimings.x = {
            attributeName: 'rx',
            fill: 'remove',
            dur: animationDuration + "ms",
            repeatCount: repeatCount,
            values: defaultWidth + "; " + defaultWidth + "; " + defaultWidth * 1.25 + "; " + defaultWidth,
            keyTimes: "0; " + keyTimesPrct + "; 1" // "0; 0.955; 0.96; 1" for 3000ms
        };
    };
    NgxSmileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-smile',
                    template: "<div class=\"all-container\">\n  <div class=\"smile-container\">\n    <svg [attr.width]=\"dimension\" [attr.height]=\"dimension\" class=\"smile\" shape-rendering=\"geometricPrecision\">\n      <circle [attr.cx]=\"head.positionX\" [attr.cy]=\"head.positionY\" [attr.r]=\"head.ray\" [attr.stroke]=\"head.strokeColor\"\n        [attr.stroke-width]=\"head.strokeWidth\" [attr.fill]=\"head.fillColor\" />\n      <g class=\"eye\" id=\"leftEye\">\n        <ellipse [attr.cx]=\"leftEye.positionX\" [attr.cy]=\"leftEye.positionY\" [attr.rx]=\"leftEye.ray\" [attr.ry]=\"leftEye.ray\"\n          [attr.stroke]=\"head.strokeColor\" [attr.stroke-width]=\"leftEye.strokeWidth\" [attr.fill]=\"leftEye.fillColor\">\n          <animate [attr.attributeName]=\"blinkTimings.y.attributeName\" [attr.fill]=\"blinkTimings.y.fill\" [attr.dur]=\"blinkTimings.y.dur\"\n            [attr.repeatCount]=\"blinkTimings.y.repeatCount\" [attr.values]=\"blinkTimings.y.values\" [attr.keyTimes]=\"blinkTimings.y.keyTimes\" />\n          <animate [attr.attributeName]=\"blinkTimings.x.attributeName\" [attr.fill]=\"blinkTimings.x.fill\" [attr.dur]=\"blinkTimings.x.dur\"\n            [attr.repeatCount]=\"blinkTimings.x.repeatCount\" [attr.values]=\"blinkTimings.x.values\" [attr.keyTimes]=\"blinkTimings.x.keyTimes\" />\n        </ellipse>\n      </g>\n      <g class=\"eye\" id=\"rightEye\">\n        <ellipse [attr.cx]=\"rightEye.positionX\" [attr.cy]=\"rightEye.positionY\" [attr.rx]=\"rightEye.ray\" [attr.ry]=\"rightEye.ray\"\n          [attr.stroke]=\"rightEye.strokeColor\" [attr.stroke-width]=\"rightEye.strokeWidth\" [attr.fill]=\"rightEye.fillColor\">\n          <animate [attr.attributeName]=\"blinkTimings.y.attributeName\" [attr.fill]=\"blinkTimings.y.fill\" [attr.dur]=\"blinkTimings.y.dur\"\n            [attr.repeatCount]=\"blinkTimings.y.repeatCount\" [attr.values]=\"blinkTimings.y.values\" [attr.keyTimes]=\"blinkTimings.y.keyTimes\" />\n          <animate [attr.attributeName]=\"blinkTimings.x.attributeName\" [attr.fill]=\"blinkTimings.x.fill\" [attr.dur]=\"blinkTimings.x.dur\"\n            [attr.repeatCount]=\"blinkTimings.x.repeatCount\" [attr.values]=\"blinkTimings.x.values\" [attr.keyTimes]=\"blinkTimings.x.keyTimes\" />\n        </ellipse>\n      </g>\n\n      <!-- legit mouth -->\n      <path [attr.d]=\"mouth.d\" [attr.stroke]=\"mouth.strokeColor\"\n        [attr.stroke-width]=\"mouth.strokeWidth\" [attr.fill]=\"mouth.fillColor\" />\n\n      <!-- Debug to show how we drow the mouth -->\n      <g *ngIf=\"showDebug && showLines\">\n        <circle [attr.cx]=\"debug.leftTop.x\" [attr.cy]=\"debug.leftTop.y\" r=\"2\" [attr.fill]=\"debug.leftTop.color\" />\n        <path [attr.d]=\"debug.leftLine\" stroke-width=\"2\" stroke=\"#55f\" />\n        <circle [attr.cx]=\"debug.leftBottom.x\" [attr.cy]=\"debug.leftBottom.y\" r=\"2\" [attr.fill]=\"debug.leftBottom.color\" />\n        <path [attr.d]=\"debug.rightLine\" stroke-width=\"2\" stroke=\"#55f\" />\n        <circle [attr.cx]=\"debug.rightBottom.x\" [attr.cy]=\"debug.rightBottom.y\" r=\"2\" [attr.fill]=\"debug.rightBottom.color\" />\n        <circle [attr.cx]=\"debug.rightTop.x\" [attr.cy]=\"debug.rightTop.y\" r=\"2\" [attr.fill]=\"debug.rightTop.color\" />\n      </g>\n    </svg>\n  </div>\n  <div class=\"controls\" *ngIf=\"showDebug\">\n    <h2>Hapiness lvl : {{ threshold }}</h2>\n    <div class=\"debug-info\">\n      <label for=\"showLines\">Show smile drawing lines</label>\n      <input type=\"checkbox\" name=\"showLines\" [(ngModel)]=\"showLines\" />\n      <!-- <mat-slide-toggle [(ngModel)]=\"showLines\">Show smile drawing lines</mat-slide-toggle> -->\n    </div>\n    <div class=\"debug-info\">\n      <label for=\"threshold\">Happiness ({{ threshold }})</label>\n      <input name=\"threshold\" type=\"number\" min=\"-1\" max=\"1\" [(ngModel)]=\"threshold\" (change)=\"udpateSmileSlider($event)\"/>\n      <!-- <mat-slider min=\"-1\" max=\"1\" step=\"0.01\" [(ngModel)]=\"threshold\" (change)=\"udpateSmileSlider($event)\"></mat-slider> -->\n    </div>\n    <div class=\"debug-info\">\n      <label for=\"mouthVariation\">Variation ({{mouthVariation}}) :</label>\n      <input name=\"mouthVariation\" type=\"number\" min=\"-20\" max=\"20\" [(ngModel)]=\"mouthVariation\" (change)=\"udpateSmileSlider($event)\"/>\n      <!-- <mat-slider min=\"-20\" max=\"20\" step=\"1\" [(ngModel)]=\"mouthVariation\" (change)=\"udpateSmileSlider($event)\"></mat-slider> -->\n    </div>\n    <div class=\"debug-info\">\n      <label for=\"maxMouthHeigth\">Max Mouth Height {{maxMouthHeigth}} :</label>\n      <input name=\"maxMouthHeigth\" type=\"number\" min=\"-20\" max=\"20\" [(ngModel)]=\"maxMouthHeigth\" (change)=\"udpateSmileSlider($event)\"/>\n      <!-- <mat-slider min=\"0\" max=\"150\" step=\"1\" [(ngModel)]=\"maxMouthHeigth\" (change)=\"udpateSmileSlider($event)\"></mat-slider> -->\n    </div>\n    <div class=\"debug-info\">\n      <label for=\"blinkRepeatSpeed\">Blink Speed {{blinkRepeatSpeed | number}} :</label>\n      <input name=\"blinkRepeatSpeed\" type=\"number\" min=\"200\" max=\"5000\" [(ngModel)]=\"blinkRepeatSpeed\" (change)=\"udpateSmileSlider($event)\"/>\n      <!-- <mat-slider min=\"200\" max=\"5000\" step=\"100\" [(ngModel)]=\"blinkRepeatSpeed\" (change)=\"udpateSmileSlider($event)\"></mat-slider> -->\n    </div>\n    <div class=\"debug-info\">\n      <label for=\"thickness\">Thickness {{thickness}} :</label>\n      <input name=\"thickness\" type=\"number\" min=\"1\" max=\"15\" [(ngModel)]=\"thickness\" (change)=\"udpateSmileSlider($event)\"/>\n      <!-- <mat-slider min=\"1\" max=\"15\" step=\"1\" [(ngModel)]=\"thickness\" (change)=\"udpateSmileSlider($event)\"></mat-slider> -->\n    </div>\n  </div>\n</div>\n",
                    styles: [".all-container{display:inline-block;text-align:center}.all-container h2{text-align:center}.all-container .smile-container{margin:1rem}.all-container .controls{margin:auto;width:100%;text-align:center}.all-container .controls .debug-info label{padding-right:.5rem}"]
                }] }
    ];
    NgxSmileComponent.propDecorators = {
        threshold: [{ type: Input }],
        showDebug: [{ type: Input }],
        size: [{ type: Input }],
        faceColor: [{ type: Input }],
        borderColor: [{ type: Input }],
        thickness: [{ type: Input }],
        mouthVariation: [{ type: Input }],
        blinkRepeatSpeed: [{ type: Input }]
    };
    return NgxSmileComponent;
}());
export { NgxSmileComponent };
if (false) {
    /** @type {?} */
    NgxSmileComponent.prototype.threshold;
    /** @type {?} */
    NgxSmileComponent.prototype.showDebug;
    /** @type {?} */
    NgxSmileComponent.prototype.size;
    /** @type {?} */
    NgxSmileComponent.prototype.faceColor;
    /** @type {?} */
    NgxSmileComponent.prototype.borderColor;
    /** @type {?} */
    NgxSmileComponent.prototype.thickness;
    /** @type {?} */
    NgxSmileComponent.prototype.mouthVariation;
    /** @type {?} */
    NgxSmileComponent.prototype.blinkRepeatSpeed;
    /** @type {?} */
    NgxSmileComponent.prototype.head;
    /** @type {?} */
    NgxSmileComponent.prototype.leftEye;
    /** @type {?} */
    NgxSmileComponent.prototype.rightEye;
    /** @type {?} */
    NgxSmileComponent.prototype.mouth;
    /** @type {?} */
    NgxSmileComponent.prototype.blinkTimings;
    /** @type {?} */
    NgxSmileComponent.prototype.maxMouthHeigth;
    /** @type {?} */
    NgxSmileComponent.prototype.dimension;
    /** @type {?} */
    NgxSmileComponent.prototype.debug;
    /** @type {?} */
    NgxSmileComponent.prototype.showLines;
}
/**
 * @record
 */
function SvgCircleData() { }
if (false) {
    /** @type {?} */
    SvgCircleData.prototype.positionX;
    /** @type {?} */
    SvgCircleData.prototype.positionY;
    /** @type {?} */
    SvgCircleData.prototype.ray;
    /** @type {?} */
    SvgCircleData.prototype.strokeColor;
    /** @type {?} */
    SvgCircleData.prototype.strokeWidth;
    /** @type {?} */
    SvgCircleData.prototype.fillColor;
}
/**
 * @record
 */
function SvgPathData() { }
if (false) {
    /** @type {?} */
    SvgPathData.prototype.d;
    /** @type {?} */
    SvgPathData.prototype.strokeColor;
    /** @type {?} */
    SvgPathData.prototype.strokeWidth;
    /** @type {?} */
    SvgPathData.prototype.fillColor;
}
/**
 * @record
 */
function SvgAnimation() { }
if (false) {
    /** @type {?|undefined} */
    SvgAnimation.prototype.values;
    /** @type {?|undefined} */
    SvgAnimation.prototype.keyTimes;
    /** @type {?|undefined} */
    SvgAnimation.prototype.repeatCount;
    /** @type {?|undefined} */
    SvgAnimation.prototype.dur;
    /** @type {?|undefined} */
    SvgAnimation.prototype.attributeName;
    /** @type {?|undefined} */
    SvgAnimation.prototype.fill;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNtaWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbWlsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtc21pbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBRXZFO0lBQUE7UUFRVyxjQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsMENBQTBDOztRQUM3RCxTQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1gsY0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNuQixnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUN4QixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIscUJBQWdCLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRW5FLFNBQUksR0FBa0IsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQzdHLFlBQU8sR0FBa0IsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2hILGFBQVEsR0FBa0IsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxD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QXNFOztJQUN0RSwyQ0FBdUI7O0lBQ3ZCLHNDQUFrQjs7SUFFbEIsa0NBTzBCOztJQUMxQixzQ0FBa0I7Ozs7O0FBNEpwQiw0QkFPQzs7O0lBTkMsa0NBQWtCOztJQUNsQixrQ0FBa0I7O0lBQ2xCLDRCQUFZOztJQUNaLG9DQUFvQjs7SUFDcEIsb0NBQW9COztJQUNwQixrQ0FBa0I7Ozs7O0FBR3BCLDBCQUtDOzs7SUFKQyx3QkFBVTs7SUFDVixrQ0FBb0I7O0lBQ3BCLGtDQUFvQjs7SUFDcEIsZ0NBQWtCOzs7OztBQUdwQiwyQkFPQzs7O0lBTkMsOEJBQWdCOztJQUNoQixnQ0FBa0I7O0lBQ2xCLG1DQUFxQjs7SUFDckIsMkJBQWE7O0lBQ2IscUNBQXVCOztJQUN2Qiw0QkFBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1zbWlsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtc21pbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtc21pbGUuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hTbWlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNob3dEZWJ1ZyA9IGZhbHNlOyAvLyB1c2UgdGhpcyB0byBkaXNwbGF5IGRlYnVnIGFuZCB0ZXN0IGRhdGFcbiAgQElucHV0KCkgc2l6ZSA9IDE1MDtcbiAgQElucHV0KCkgZmFjZUNvbG9yID0gJyNmZmYnO1xuICBASW5wdXQoKSBib3JkZXJDb2xvciA9ICcjMDAwMDAwJztcbiAgQElucHV0KCkgdGhpY2tuZXNzID0gNDtcbiAgQElucHV0KCkgbW91dGhWYXJpYXRpb24gPSAwO1xuICBASW5wdXQoKSBibGlua1JlcGVhdFNwZWVkID0gMzAwMCArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG5cbiAgaGVhZDogU3ZnQ2lyY2xlRGF0YSA9IHsgcG9zaXRpb25YOiAwLCBwb3NpdGlvblk6IDAsIHJheTogMCwgc3Ryb2tlQ29sb3I6ICcnLCBzdHJva2VXaWR0aDogMCwgZmlsbENvbG9yOiAnJyB9O1xuICBsZWZ0RXllOiBTdmdDaXJjbGVEYXRhID0geyBwb3NpdGlvblg6IDAsIHBvc2l0aW9uWTogMCwgcmF5OiAwLCBzdHJva2VDb2xvcjogJycsIHN0cm9rZVdpZHRoOiAwLCBmaWxsQ29sb3I6ICcnIH07XG4gIHJpZ2h0RXllOiBTdmdDaXJjbGVEYXRhID0geyBwb3NpdGlvblg6IDAsIHBvc2l0aW9uWTogMCwgcmF5OiAwLCBzdHJva2VDb2xvcjogJycsIHN0cm9rZVdpZHRoOiAwLCBmaWxsQ29sb3I6ICcnIH07XG4gIG1vdXRoOiBTdmdQYXRoRGF0YSA9IHsgZDogJycsIHN0cm9rZUNvbG9yOiAnJywgc3Ryb2tlV2lkdGg6IDAsIGZpbGxDb2xvcjogJycgfTtcbiAgYmxpbmtUaW1pbmdzOiB7IHg6IFN2Z0FuaW1hdGlvbiwgeTogU3ZnQW5pbWF0aW9uIH0gPSB7IHg6IHt9LCB5OiB7fSB9O1xuICBtYXhNb3V0aEhlaWd0aDogbnVtYmVyO1xuICBkaW1lbnNpb246IG51bWJlcjtcblxuICBkZWJ1Zzoge1xuICAgIGxlZnRUb3A6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcgfSxcbiAgICBsZWZ0TGluZTogc3RyaW5nLFxuICAgIGxlZnRCb3R0b206IHsgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcgfSxcbiAgICByaWdodEJvdHRvbTogeyB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZyB9LFxuICAgIHJpZ2h0TGluZTogc3RyaW5nLFxuICAgIHJpZ2h0VG9wOiB7IHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nIH0sXG4gIH0gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIHNob3dMaW5lcyA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGhpY2tuZXNzID0gTnVtYmVyKHRoaXMudGhpY2tuZXNzKTtcbiAgICB0aGlzLnNpemUgPSBOdW1iZXIodGhpcy5zaXplKTtcbiAgICB0aGlzLm1vdXRoVmFyaWF0aW9uID0gTnVtYmVyKHRoaXMubW91dGhWYXJpYXRpb24pO1xuICAgIHRoaXMuYmxpbmtSZXBlYXRTcGVlZCA9IE51bWJlcih0aGlzLmJsaW5rUmVwZWF0U3BlZWQpO1xuICAgIHRoaXMubWF4TW91dGhIZWlndGggPSB0aGlzLnNpemUgLyA0O1xuICAgIHRoaXMuc2V0SW1hZ2VEaW1lbnNpb24oKTtcbiAgICB0aGlzLmRyYXdGYWNlKCk7XG4gIH1cblxuICBkcmF3RmFjZSgpIHtcbiAgICB0aGlzLnNldEltYWdlRGltZW5zaW9uKCk7XG4gICAgdGhpcy5kcmF3SGVhZCgpO1xuICAgIHRoaXMuZHJhd0xlZnRFeWUoKTtcbiAgICB0aGlzLmRyYXdSaWdodEV5ZSgpO1xuICAgIHRoaXMuZHJhd1NtaWxlKCk7XG4gICAgdGhpcy5zZXR1cEV5ZXNBbmltYXRpb25zKCk7XG4gIH1cblxuICBzZXRJbWFnZURpbWVuc2lvbigpIHtcbiAgICB0aGlzLmRpbWVuc2lvbiA9IHRoaXMuc2l6ZSArIHRoaXMudGhpY2tuZXNzICogMjtcbiAgfVxuXG4gIHVkcGF0ZVNtaWxlU2xpZGVyKF86IEV2ZW50RW1pdHRlcjxhbnk+KSB7XG4gICAgdGhpcy5kcmF3RmFjZSgpO1xuICB9XG5cbiAgdG9nZ2xlTGluZXMoKSB7XG4gICAgdGhpcy5zaG93TGluZXMgPSAhdGhpcy5zaG93TGluZXM7XG4gIH1cblxuICBkcmF3SGVhZCgpIHtcbiAgICB0aGlzLmhlYWQucG9zaXRpb25YID0gdGhpcy5oZWFkLnBvc2l0aW9uWSA9IHRoaXMuc2l6ZSAvIDIgKyB0aGlzLnRoaWNrbmVzcztcbiAgICB0aGlzLmhlYWQucmF5ID0gdGhpcy5zaXplIC8gMjtcbiAgICB0aGlzLmhlYWQuc3Ryb2tlQ29sb3IgPSB0aGlzLmJvcmRlckNvbG9yO1xuICAgIHRoaXMuaGVhZC5zdHJva2VXaWR0aCA9IHRoaXMudGhpY2tuZXNzO1xuICAgIHRoaXMuaGVhZC5maWxsQ29sb3IgPSB0aGlzLmZhY2VDb2xvcjtcbiAgfVxuXG4gIGRyYXdMZWZ0RXllKCkge1xuICAgIHRoaXMubGVmdEV5ZS5wb3NpdGlvblggPSB0aGlzLmxlZnRFeWUucG9zaXRpb25ZID0gdGhpcy5zaXplIC8gMyArIHRoaXMudGhpY2tuZXNzO1xuICAgIHRoaXMubGVmdEV5ZS5yYXkgPSB0aGlzLnNpemUgLyAyMDtcbiAgICB0aGlzLmxlZnRFeWUuc3Ryb2tlQ29sb3IgPSB0aGlzLmJvcmRlckNvbG9yO1xuICAgIHRoaXMubGVmdEV5ZS5zdHJva2VXaWR0aCA9IHRoaXMudGhpY2tuZXNzO1xuICAgIHRoaXMubGVmdEV5ZS5maWxsQ29sb3IgPSB0aGlzLmJvcmRlckNvbG9yO1xuICB9XG5cbiAgZHJhd1JpZ2h0RXllKCkge1xuICAgIHRoaXMucmlnaHRFeWUucG9zaXRpb25YID0gdGhpcy5zaXplICogMiAvIDMgKyB0aGlzLnRoaWNrbmVzcztcbiAgICB0aGlzLnJpZ2h0RXllLnBvc2l0aW9uWSA9IHRoaXMuc2l6ZSAvIDMgKyB0aGlzLnRoaWNrbmVzcztcbiAgICB0aGlzLnJpZ2h0RXllLnJheSA9IHRoaXMuc2l6ZSAvIDIwO1xuICAgIHRoaXMucmlnaHRFeWUuc3Ryb2tlQ29sb3IgPSB0aGlzLmJvcmRlckNvbG9yO1xuICAgIHRoaXMucmlnaHRFeWUuc3Ryb2tlV2lkdGggPSB0aGlzLnRoaWNrbmVzcztcbiAgICB0aGlzLnJpZ2h0RXllLmZpbGxDb2xvciA9IHRoaXMuYm9yZGVyQ29sb3I7XG4gIH1cblxuICBkcmF3U21pbGUoKSB7XG4gICAgLy8gdGhpcy5tb3V0aC5kID0gJ003MCA2MCBDIDcwIDgwLCAxMzAgODAsIDExMCA2MCc7XG4gICAgLy8gdGhpcy5tb3V0aC5kID0gJ003MCAxMTAgQyA3MCAxNDAsIDExMCAxNDAsIDExMCAxMTAnO1xuICAgIC8vIHRoaXMubW91dGguZCA9ICdNMTAgMTAgQyAyMCAyMCwgNDAgMjAsIDUwIDEwJztcXFxuICAgIC8vIHRoaXMubW91dGguZCA9IGBNIEMgJHt0aGlzLnNpemUgKiAyIC8gM30gMTQwLCAke3RoaXMuc2l6ZSAqIDEgLyAzfSAxNDAsICR7dGhpcy5zaXplICogMiAvIDN9IDExMGA7XG4gICAgLy8gdGhpcy5tb3V0aC5kID0gYE0ke3RoaXMuc2l6ZSAqIDIgLyA4fSAke3RoaXMuc2l6ZSAqIDIgLyAzfSBDICR7dGhpcy5zaXplICogMiAvIDh9ICR7dGhpcy5zaXplICogMiAvIDN9LCAke1xuICAgIC8vICAgdGhpcy5zaXplICogNiAvIDh9ICR7dGhpcy5zaXplICogMiAvIDN9LCAke3RoaXMuc2l6ZSAqIDYgLyA4fSAke3RoaXMuc2l6ZSAqIDIgLyAzfWA7IC8vID0+IHRoaXMgaXMgYSBmbGF0IG1vdXRoXG5cbiAgICAvLyBjb25zdCBtYXhNb3V0aEhlaWd0aCA9IHRoaXMuc2l6ZSAvIDY7XG4gICAgY29uc3QgbWF4VGhyZXNob2xkID0gdGhpcy5tYXhNb3V0aEhlaWd0aCAvIDI7XG5cbiAgICBjb25zdCBiYXNlUG9zaXRpb25MZWZ0WCA9IHRoaXMuc2l6ZSAqIDIgLyA4ICsgdGhpcy50aGlja25lc3M7XG4gICAgY29uc3QgYmFzZVBvc2l0aW9uTGVmdFkgPSB0aGlzLnNpemUgKiAyIC8gMyArIHRoaXMudGhpY2tuZXNzO1xuXG4gICAgY29uc3QgbGVmdFRvcFBvaW50Q29vcmRzID0ge1xuICAgICAgeDogYmFzZVBvc2l0aW9uTGVmdFggLSB0aGlzLm1vdXRoVmFyaWF0aW9uLFxuICAgICAgeTogYmFzZVBvc2l0aW9uTGVmdFkgLSAobWF4VGhyZXNob2xkICogdGhpcy50aHJlc2hvbGQpXG4gICAgfTtcbiAgICBjb25zdCBsZWZ0Qm90dG9tUG9pbnRDb29yZHMgPSB7XG4gICAgICB4OiBiYXNlUG9zaXRpb25MZWZ0WCArIHRoaXMubW91dGhWYXJpYXRpb24sXG4gICAgICB5OiBiYXNlUG9zaXRpb25MZWZ0WSArIChtYXhUaHJlc2hvbGQgKiB0aGlzLnRocmVzaG9sZClcbiAgICB9O1xuXG4gICAgY29uc3QgYmFzZVBvc2l0aW9uUmlnaHRYID0gdGhpcy5zaXplICogNiAvIDggKyB0aGlzLnRoaWNrbmVzcztcbiAgICBjb25zdCBiYXNlUG9zaXRpb25SaWdodFkgPSB0aGlzLnNpemUgKiAyIC8gMyArIHRoaXMudGhpY2tuZXNzO1xuXG4gICAgY29uc3QgcmlnaHRUb3BQb2ludENvb3JkcyA9IHtcbiAgICAgIHg6IGJhc2VQb3NpdGlvblJpZ2h0WCArIHRoaXMubW91dGhWYXJpYXRpb24sXG4gICAgICB5OiBiYXNlUG9zaXRpb25SaWdodFkgLSAobWF4VGhyZXNob2xkICogdGhpcy50aHJlc2hvbGQpXG4gICAgfTtcbiAgICBjb25zdCByaWdodEJvdHRvbVBvaW50Q29vcmRzID0ge1xuICAgICAgeDogYmFzZVBvc2l0aW9uUmlnaHRYIC0gdGhpcy5tb3V0aFZhcmlhdGlvbixcbiAgICAgIHk6IGJhc2VQb3NpdGlvblJpZ2h0WSArIChtYXhUaHJlc2hvbGQgKiB0aGlzLnRocmVzaG9sZClcbiAgICB9O1xuXG4gICAgdGhpcy5tb3V0aC5kID0gYE0ke2xlZnRUb3BQb2ludENvb3Jkcy54fSAke2xlZnRUb3BQb2ludENvb3Jkcy55fSBDICR7bGVmdEJvdHRvbVBvaW50Q29vcmRzLnh9ICR7bGVmdEJvdHRvbVBvaW50Q29vcmRzLnl9LCAke1xuICAgICAgcmlnaHRCb3R0b21Qb2ludENvb3Jkcy54fSAke3JpZ2h0Qm90dG9tUG9pbnRDb29yZHMueX0sICR7cmlnaHRUb3BQb2ludENvb3Jkcy54fSAke3JpZ2h0VG9wUG9pbnRDb29yZHMueX1gO1xuXG4gICAgdGhpcy5kZWJ1ZyA9IHtcbiAgICAgIGxlZnRUb3A6IHtcbiAgICAgICAgLi4ubGVmdFRvcFBvaW50Q29vcmRzLFxuICAgICAgICBjb2xvcjogJyNmNTUnLFxuICAgICAgfSxcbiAgICAgIGxlZnRCb3R0b206IHtcbiAgICAgICAgLi4ubGVmdEJvdHRvbVBvaW50Q29vcmRzLFxuICAgICAgICBjb2xvcjogJyM1ZjUnLFxuICAgICAgfSxcbiAgICAgIGxlZnRMaW5lOiBgTSR7bGVmdFRvcFBvaW50Q29vcmRzLnh9ICR7bGVmdFRvcFBvaW50Q29vcmRzLnl9LCAke2xlZnRCb3R0b21Qb2ludENvb3Jkcy54fSAke2xlZnRCb3R0b21Qb2ludENvb3Jkcy55fWAsXG4gICAgICByaWdodEJvdHRvbToge1xuICAgICAgICAuLi5yaWdodEJvdHRvbVBvaW50Q29vcmRzLFxuICAgICAgICBjb2xvcjogJyNmNTUnLFxuICAgICAgfSxcbiAgICAgIHJpZ2h0VG9wOiB7XG4gICAgICAgIC4uLnJpZ2h0VG9wUG9pbnRDb29yZHMsXG4gICAgICAgIGNvbG9yOiAnIzVmNScsXG4gICAgICB9LFxuICAgICAgcmlnaHRMaW5lOiBgTSR7cmlnaHRCb3R0b21Qb2ludENvb3Jkcy54fSAke3JpZ2h0Qm90dG9tUG9pbnRDb29yZHMueX0sICR7cmlnaHRUb3BQb2ludENvb3Jkcy54fSAke3JpZ2h0VG9wUG9pbnRDb29yZHMueX1gLFxuICAgIH07XG5cblxuICAgIHRoaXMubW91dGguc3Ryb2tlQ29sb3IgPSB0aGlzLmJvcmRlckNvbG9yO1xuICAgIHRoaXMubW91dGguZmlsbENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICB0aGlzLm1vdXRoLnN0cm9rZVdpZHRoID0gdGhpcy50aGlja25lc3M7XG4gIH1cblxuICBzZXR1cEV5ZXNBbmltYXRpb25zKCkge1xuICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IHRoaXMuc2l6ZSAvIDIwO1xuICAgIGNvbnN0IGFuaW1hdGlvbkR1cmF0aW9uID0gTnVtYmVyKHRoaXMuYmxpbmtSZXBlYXRTcGVlZCk7IC8vIG1zXG4gICAgY29uc3QgYmxpbmtEdXJhdGlvbiA9IDE1MDsgLy8gbXNcbiAgICBjb25zdCByZXBlYXRDb3VudCA9IHRoaXMuc2hvd0RlYnVnID8gJ2luZGVmaW5pdGUnIDogJzEwJztcblxuICAgIGNvbnN0IGtleVRpbWVCbGlua1N0YXJ0ID0gKGFuaW1hdGlvbkR1cmF0aW9uIC0gYmxpbmtEdXJhdGlvbikgLyBhbmltYXRpb25EdXJhdGlvbjsgLy8gMC45NSBmb3IgMzAwMG1zXG4gICAgY29uc3QgYmxpbmtEdXJhdGlvblByY3QgPSAoYmxpbmtEdXJhdGlvbikgLyBhbmltYXRpb25EdXJhdGlvbjtcbiAgICBjb25zdCBrZXlUaW1lc1ByY3QgPSBgJHtcbiAgICAgIGtleVRpbWVCbGlua1N0YXJ0ICsgYmxpbmtEdXJhdGlvblByY3QgKiAwLjF9OyAke1xuICAgICAga2V5VGltZUJsaW5rU3RhcnQgKyBibGlua0R1cmF0aW9uUHJjdCAqIDAuMn1gOyAvLyAwLjk1NTsgMC45NiBmb3IgMzAwMG1zXG5cblxuICAgIHRoaXMuYmxpbmtUaW1pbmdzLnkgPSB7XG4gICAgICBhdHRyaWJ1dGVOYW1lOiAncnknLFxuICAgICAgZmlsbDogJ3JlbW92ZScsXG4gICAgICBkdXI6IGAke2FuaW1hdGlvbkR1cmF0aW9ufW1zYCxcbiAgICAgIHJlcGVhdENvdW50LFxuICAgICAgdmFsdWVzOiBgJHtkZWZhdWx0V2lkdGh9OyAke2RlZmF1bHRXaWR0aH07ICR7ZGVmYXVsdFdpZHRoICogMS4yNX07IDA7ICR7ZGVmYXVsdFdpZHRofWAsXG4gICAgICBrZXlUaW1lczogYDA7ICR7a2V5VGltZUJsaW5rU3RhcnR9OyAke2tleVRpbWVzUHJjdH07IDFgIC8vIFwiMDsgMC45NTsgMC45NTU7IDAuOTY7IDFcIiBmb3IgMzAwMG1zXG4gICAgfTtcblxuICAgIHRoaXMuYmxpbmtUaW1pbmdzLnggPSB7XG4gICAgICBhdHRyaWJ1dGVOYW1lOiAncngnLFxuICAgICAgZmlsbDogJ3JlbW92ZScsXG4gICAgICBkdXI6IGAke2FuaW1hdGlvbkR1cmF0aW9ufW1zYCxcbiAgICAgIHJlcGVhdENvdW50LFxuICAgICAgdmFsdWVzOiBgJHtkZWZhdWx0V2lkdGh9OyAke2RlZmF1bHRXaWR0aH07ICR7ZGVmYXVsdFdpZHRoICogMS4yNX07ICR7ZGVmYXVsdFdpZHRofWAsXG4gICAgICBrZXlUaW1lczogYDA7ICR7a2V5VGltZXNQcmN0fTsgMWAgLy8gXCIwOyAwLjk1NTsgMC45NjsgMVwiIGZvciAzMDAwbXNcbiAgICB9O1xuICB9XG59XG5cbmludGVyZmFjZSBTdmdDaXJjbGVEYXRhIHtcbiAgcG9zaXRpb25YOiBudW1iZXI7XG4gIHBvc2l0aW9uWTogbnVtYmVyO1xuICByYXk6IG51bWJlcjtcbiAgc3Ryb2tlQ29sb3I6IHN0cmluZztcbiAgc3Ryb2tlV2lkdGg6IG51bWJlcjtcbiAgZmlsbENvbG9yOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTdmdQYXRoRGF0YSB7XG4gIGQ6IHN0cmluZztcbiAgc3Ryb2tlQ29sb3I6IHN0cmluZztcbiAgc3Ryb2tlV2lkdGg6IG51bWJlcjtcbiAgZmlsbENvbG9yOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTdmdBbmltYXRpb24ge1xuICB2YWx1ZXM/OiBzdHJpbmc7XG4gIGtleVRpbWVzPzogc3RyaW5nO1xuICByZXBlYXRDb3VudD86IHN0cmluZztcbiAgZHVyPzogc3RyaW5nO1xuICBhdHRyaWJ1dGVOYW1lPzogc3RyaW5nO1xuICBmaWxsPzogc3RyaW5nO1xufVxuIl19
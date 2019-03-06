/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class NgxSmileComponent {
    constructor() {
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
        this.getBlinkTimingsY = (/**
         * @param {?} animationDuration
         * @param {?} defaultWidth
         * @param {?} keyTimeBlinkStart
         * @param {?} keyTimesPrct
         * @param {?} repeatCount
         * @return {?}
         */
        (animationDuration, defaultWidth, keyTimeBlinkStart, keyTimesPrct, repeatCount) => ({
            attributeName: 'ry',
            fill: 'remove',
            dur: `${animationDuration}ms`,
            repeatCount,
            values: `${defaultWidth}; ${defaultWidth}; ${defaultWidth * 1.25}; 0; ${defaultWidth}`,
            keyTimes: `0; ${keyTimeBlinkStart}; ${keyTimesPrct}; 1` // "0; 0.95; 0.955; 0.96; 1" for 3000ms
        }));
        this.getBlinkTimgingsX = (/**
         * @param {?} animationDuration
         * @param {?} defaultWidth
         * @param {?} keyTimesPrct
         * @param {?} repeatCount
         * @return {?}
         */
        (animationDuration, defaultWidth, keyTimesPrct, repeatCount) => ({
            attributeName: 'rx',
            fill: 'remove',
            dur: `${animationDuration}ms`,
            repeatCount,
            values: `${defaultWidth}; ${defaultWidth}; ${defaultWidth * 1.25}; ${defaultWidth}`,
            keyTimes: `0; ${keyTimesPrct}; 1` // "0; 0.955; 0.96; 1" for 3000ms
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.thickness = Number(this.thickness);
        this.size = Number(this.size);
        this.mouthVariation = Number(this.mouthVariation);
        this.blinkRepeatSpeed = Number(this.blinkRepeatSpeed);
        this.maxMouthHeigth = this.size / 4;
        this.setImageDimension();
        this.drawFace();
    }
    /**
     * @return {?}
     */
    drawFace() {
        this.setImageDimension();
        this.drawHead();
        this.drawLeftEye();
        this.drawRightEye();
        this.drawSmile();
        this.setupEyesAnimations();
    }
    /**
     * @return {?}
     */
    setImageDimension() {
        this.dimension = this.size + this.thickness * 2;
    }
    /**
     * @param {?} _
     * @return {?}
     */
    udpateSmileSlider(_) {
        this.drawFace();
    }
    /**
     * @return {?}
     */
    toggleLines() {
        this.showLines = !this.showLines;
    }
    /**
     * @return {?}
     */
    drawHead() {
        this.head.positionX = this.head.positionY = this.size / 2 + this.thickness;
        this.head.ray = this.size / 2;
        this.head.strokeColor = this.borderColor;
        this.head.strokeWidth = this.thickness;
        this.head.fillColor = this.faceColor;
    }
    /**
     * @return {?}
     */
    drawLeftEye() {
        this.leftEye.positionX = this.leftEye.positionY = this.size / 3 + this.thickness;
        this.leftEye.ray = this.size / 20;
        this.leftEye.strokeColor = this.borderColor;
        this.leftEye.strokeWidth = this.thickness;
        this.leftEye.fillColor = this.borderColor;
    }
    /**
     * @return {?}
     */
    drawRightEye() {
        this.rightEye.positionX = this.size * 2 / 3 + this.thickness;
        this.rightEye.positionY = this.size / 3 + this.thickness;
        this.rightEye.ray = this.size / 20;
        this.rightEye.strokeColor = this.borderColor;
        this.rightEye.strokeWidth = this.thickness;
        this.rightEye.fillColor = this.borderColor;
    }
    /**
     * @return {?}
     */
    drawSmile() {
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
        const maxThreshold = this.maxMouthHeigth / 2;
        /** @type {?} */
        const basePositionLeftX = this.size * 2 / 8 + this.thickness;
        /** @type {?} */
        const basePositionLeftY = this.size * 2 / 3 + this.thickness;
        /** @type {?} */
        const leftTopPointCoords = {
            x: basePositionLeftX - this.mouthVariation,
            y: basePositionLeftY - (maxThreshold * this.threshold)
        };
        /** @type {?} */
        const leftBottomPointCoords = {
            x: basePositionLeftX + this.mouthVariation,
            y: basePositionLeftY + (maxThreshold * this.threshold)
        };
        /** @type {?} */
        const basePositionRightX = this.size * 6 / 8 + this.thickness;
        /** @type {?} */
        const basePositionRightY = this.size * 2 / 3 + this.thickness;
        /** @type {?} */
        const rightTopPointCoords = {
            x: basePositionRightX + this.mouthVariation,
            y: basePositionRightY - (maxThreshold * this.threshold)
        };
        /** @type {?} */
        const rightBottomPointCoords = {
            x: basePositionRightX - this.mouthVariation,
            y: basePositionRightY + (maxThreshold * this.threshold)
        };
        this.mouth.d = `M${leftTopPointCoords.x} ${leftTopPointCoords.y} C ${leftBottomPointCoords.x} ${leftBottomPointCoords.y}, ${rightBottomPointCoords.x} ${rightBottomPointCoords.y}, ${rightTopPointCoords.x} ${rightTopPointCoords.y}`;
        this.debug = {
            leftTop: Object.assign({}, leftTopPointCoords, { color: '#f55' }),
            leftBottom: Object.assign({}, leftBottomPointCoords, { color: '#5f5' }),
            leftLine: `M${leftTopPointCoords.x} ${leftTopPointCoords.y}, ${leftBottomPointCoords.x} ${leftBottomPointCoords.y}`,
            rightBottom: Object.assign({}, rightBottomPointCoords, { color: '#f55' }),
            rightTop: Object.assign({}, rightTopPointCoords, { color: '#5f5' }),
            rightLine: `M${rightBottomPointCoords.x} ${rightBottomPointCoords.y}, ${rightTopPointCoords.x} ${rightTopPointCoords.y}`,
        };
        this.mouth.strokeColor = this.borderColor;
        this.mouth.fillColor = 'transparent';
        this.mouth.strokeWidth = this.thickness;
    }
    /**
     * @return {?}
     */
    setupEyesAnimations() {
        /** @type {?} */
        const defaultWidth = this.size / 20;
        /** @type {?} */
        const animationDuration = Number(this.blinkRepeatSpeed);
        // ms
        /** @type {?} */
        const blinkDuration = 150;
        // ms
        /** @type {?} */
        const repeatCount = this.showDebug ? 'indefinite' : '10';
        /** @type {?} */
        const keyTimeBlinkStart = (animationDuration - blinkDuration) / animationDuration;
        // 0.95 for 3000ms
        /** @type {?} */
        const blinkDurationPrct = (blinkDuration) / animationDuration;
        /** @type {?} */
        const keyTimesPrct = `${keyTimeBlinkStart + blinkDurationPrct * 0.1}; ${keyTimeBlinkStart + blinkDurationPrct * 0.2}`;
        this.blinkTimings.y = this.getBlinkTimingsY(animationDuration, defaultWidth, keyTimeBlinkStart, keyTimesPrct, repeatCount);
        this.blinkTimings.x = this.getBlinkTimgingsX(animationDuration, defaultWidth, keyTimesPrct, repeatCount);
    }
}
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
    /** @type {?} */
    NgxSmileComponent.prototype.getBlinkTimingsY;
    /** @type {?} */
    NgxSmileComponent.prototype.getBlinkTimgingsX;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNtaWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbWlsZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtc21pbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFPdkUsTUFBTSxPQUFPLGlCQUFpQjtJQUw5QjtRQVFXLGNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQywwQ0FBMEM7O1FBQzdELFNBQUksR0FBRyxHQUFHLENBQUM7UUFDWCxjQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixxQkFBZ0IsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFFbkUsU0FBSSxHQUFrQixFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDN0csWUFBTyxHQUFrQixFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDaEgsYUFBUSxHQUFrQixFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxTQUFT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bExBQXlDOzthQUUxQzs7O3dCQUdFLEtBQUs7d0JBQ0wsS0FBSzttQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzs7OztJQVBOLHNDQUEyQjs7SUFDM0Isc0NBQTJCOztJQUMzQixpQ0FBb0I7O0lBQ3BCLHNDQUE0Qjs7SUFDNUIsd0NBQWlDOztJQUNqQyxzQ0FBdUI7O0lBQ3ZCLDJDQUE0Qjs7SUFDNUIsNkNBQW1FOztJQUVuRSxpQ0FBNkc7O0lBQzdHLG9DQUFnSDs7SUFDaEgscUNBQWlIOztJQUNqSCxrQ0FBK0U7O0lBQy9FLHlDQUFzRTs7SUFDdEUsMkNBQXVCOztJQUN2QixzQ0FBa0I7O0lBRWxCLGtDQU8wQjs7SUFDMUIsc0NBQWtCOztJQTRJbEIsNkNBUUU7O0lBRUYsOENBT0U7Ozs7O0FBR0osNEJBT0M7OztJQU5DLGtDQUFrQjs7SUFDbEIsa0NBQWtCOztJQUNsQiw0QkFBWTs7SUFDWixvQ0FBb0I7O0lBQ3BCLG9DQUFvQjs7SUFDcEIsa0NBQWtCOzs7OztBQUdwQiwwQkFLQzs7O0lBSkMsd0JBQVU7O0lBQ1Ysa0NBQW9COztJQUNwQixrQ0FBb0I7O0lBQ3BCLGdDQUFrQjs7Ozs7QUFHcEIsMkJBT0M7OztJQU5DLDhCQUFnQjs7SUFDaEIsZ0NBQWtCOztJQUNsQixtQ0FBcUI7O0lBQ3JCLDJCQUFhOztJQUNiLHFDQUF1Qjs7SUFDdkIsNEJBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtc21pbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LXNtaWxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LXNtaWxlLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4U21pbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoKSBzaG93RGVidWcgPSBmYWxzZTsgLy8gdXNlIHRoaXMgdG8gZGlzcGxheSBkZWJ1ZyBhbmQgdGVzdCBkYXRhXG4gIEBJbnB1dCgpIHNpemUgPSAxNTA7XG4gIEBJbnB1dCgpIGZhY2VDb2xvciA9ICcjZmZmJztcbiAgQElucHV0KCkgYm9yZGVyQ29sb3IgPSAnIzAwMDAwMCc7XG4gIEBJbnB1dCgpIHRoaWNrbmVzcyA9IDQ7XG4gIEBJbnB1dCgpIG1vdXRoVmFyaWF0aW9uID0gMDtcbiAgQElucHV0KCkgYmxpbmtSZXBlYXRTcGVlZCA9IDMwMDAgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuXG4gIGhlYWQ6IFN2Z0NpcmNsZURhdGEgPSB7IHBvc2l0aW9uWDogMCwgcG9zaXRpb25ZOiAwLCByYXk6IDAsIHN0cm9rZUNvbG9yOiAnJywgc3Ryb2tlV2lkdGg6IDAsIGZpbGxDb2xvcjogJycgfTtcbiAgbGVmdEV5ZTogU3ZnQ2lyY2xlRGF0YSA9IHsgcG9zaXRpb25YOiAwLCBwb3NpdGlvblk6IDAsIHJheTogMCwgc3Ryb2tlQ29sb3I6ICcnLCBzdHJva2VXaWR0aDogMCwgZmlsbENvbG9yOiAnJyB9O1xuICByaWdodEV5ZTogU3ZnQ2lyY2xlRGF0YSA9IHsgcG9zaXRpb25YOiAwLCBwb3NpdGlvblk6IDAsIHJheTogMCwgc3Ryb2tlQ29sb3I6ICcnLCBzdHJva2VXaWR0aDogMCwgZmlsbENvbG9yOiAnJyB9O1xuICBtb3V0aDogU3ZnUGF0aERhdGEgPSB7IGQ6ICcnLCBzdHJva2VDb2xvcjogJycsIHN0cm9rZVdpZHRoOiAwLCBmaWxsQ29sb3I6ICcnIH07XG4gIGJsaW5rVGltaW5nczogeyB4OiBTdmdBbmltYXRpb24sIHk6IFN2Z0FuaW1hdGlvbiB9ID0geyB4OiB7fSwgeToge30gfTtcbiAgbWF4TW91dGhIZWlndGg6IG51bWJlcjtcbiAgZGltZW5zaW9uOiBudW1iZXI7XG5cbiAgZGVidWc6IHtcbiAgICBsZWZ0VG9wOiB7IHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nIH0sXG4gICAgbGVmdExpbmU6IHN0cmluZyxcbiAgICBsZWZ0Qm90dG9tOiB7IHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nIH0sXG4gICAgcmlnaHRCb3R0b206IHsgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcgfSxcbiAgICByaWdodExpbmU6IHN0cmluZyxcbiAgICByaWdodFRvcDogeyB4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZyB9LFxuICB9IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBzaG93TGluZXMgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRoaWNrbmVzcyA9IE51bWJlcih0aGlzLnRoaWNrbmVzcyk7XG4gICAgdGhpcy5zaXplID0gTnVtYmVyKHRoaXMuc2l6ZSk7XG4gICAgdGhpcy5tb3V0aFZhcmlhdGlvbiA9IE51bWJlcih0aGlzLm1vdXRoVmFyaWF0aW9uKTtcbiAgICB0aGlzLmJsaW5rUmVwZWF0U3BlZWQgPSBOdW1iZXIodGhpcy5ibGlua1JlcGVhdFNwZWVkKTtcbiAgICB0aGlzLm1heE1vdXRoSGVpZ3RoID0gdGhpcy5zaXplIC8gNDtcbiAgICB0aGlzLnNldEltYWdlRGltZW5zaW9uKCk7XG4gICAgdGhpcy5kcmF3RmFjZSgpO1xuICB9XG5cbiAgZHJhd0ZhY2UoKSB7XG4gICAgdGhpcy5zZXRJbWFnZURpbWVuc2lvbigpO1xuICAgIHRoaXMuZHJhd0hlYWQoKTtcbiAgICB0aGlzLmRyYXdMZWZ0RXllKCk7XG4gICAgdGhpcy5kcmF3UmlnaHRFeWUoKTtcbiAgICB0aGlzLmRyYXdTbWlsZSgpO1xuICAgIHRoaXMuc2V0dXBFeWVzQW5pbWF0aW9ucygpO1xuICB9XG5cbiAgc2V0SW1hZ2VEaW1lbnNpb24oKSB7XG4gICAgdGhpcy5kaW1lbnNpb24gPSB0aGlzLnNpemUgKyB0aGlzLnRoaWNrbmVzcyAqIDI7XG4gIH1cblxuICB1ZHBhdGVTbWlsZVNsaWRlcihfOiBFdmVudEVtaXR0ZXI8YW55Pikge1xuICAgIHRoaXMuZHJhd0ZhY2UoKTtcbiAgfVxuXG4gIHRvZ2dsZUxpbmVzKCkge1xuICAgIHRoaXMuc2hvd0xpbmVzID0gIXRoaXMuc2hvd0xpbmVzO1xuICB9XG5cbiAgZHJhd0hlYWQoKSB7XG4gICAgdGhpcy5oZWFkLnBvc2l0aW9uWCA9IHRoaXMuaGVhZC5wb3NpdGlvblkgPSB0aGlzLnNpemUgLyAyICsgdGhpcy50aGlja25lc3M7XG4gICAgdGhpcy5oZWFkLnJheSA9IHRoaXMuc2l6ZSAvIDI7XG4gICAgdGhpcy5oZWFkLnN0cm9rZUNvbG9yID0gdGhpcy5ib3JkZXJDb2xvcjtcbiAgICB0aGlzLmhlYWQuc3Ryb2tlV2lkdGggPSB0aGlzLnRoaWNrbmVzcztcbiAgICB0aGlzLmhlYWQuZmlsbENvbG9yID0gdGhpcy5mYWNlQ29sb3I7XG4gIH1cblxuICBkcmF3TGVmdEV5ZSgpIHtcbiAgICB0aGlzLmxlZnRFeWUucG9zaXRpb25YID0gdGhpcy5sZWZ0RXllLnBvc2l0aW9uWSA9IHRoaXMuc2l6ZSAvIDMgKyB0aGlzLnRoaWNrbmVzcztcbiAgICB0aGlzLmxlZnRFeWUucmF5ID0gdGhpcy5zaXplIC8gMjA7XG4gICAgdGhpcy5sZWZ0RXllLnN0cm9rZUNvbG9yID0gdGhpcy5ib3JkZXJDb2xvcjtcbiAgICB0aGlzLmxlZnRFeWUuc3Ryb2tlV2lkdGggPSB0aGlzLnRoaWNrbmVzcztcbiAgICB0aGlzLmxlZnRFeWUuZmlsbENvbG9yID0gdGhpcy5ib3JkZXJDb2xvcjtcbiAgfVxuXG4gIGRyYXdSaWdodEV5ZSgpIHtcbiAgICB0aGlzLnJpZ2h0RXllLnBvc2l0aW9uWCA9IHRoaXMuc2l6ZSAqIDIgLyAzICsgdGhpcy50aGlja25lc3M7XG4gICAgdGhpcy5yaWdodEV5ZS5wb3NpdGlvblkgPSB0aGlzLnNpemUgLyAzICsgdGhpcy50aGlja25lc3M7XG4gICAgdGhpcy5yaWdodEV5ZS5yYXkgPSB0aGlzLnNpemUgLyAyMDtcbiAgICB0aGlzLnJpZ2h0RXllLnN0cm9rZUNvbG9yID0gdGhpcy5ib3JkZXJDb2xvcjtcbiAgICB0aGlzLnJpZ2h0RXllLnN0cm9rZVdpZHRoID0gdGhpcy50aGlja25lc3M7XG4gICAgdGhpcy5yaWdodEV5ZS5maWxsQ29sb3IgPSB0aGlzLmJvcmRlckNvbG9yO1xuICB9XG5cbiAgZHJhd1NtaWxlKCkge1xuICAgIC8vIHRoaXMubW91dGguZCA9ICdNNzAgNjAgQyA3MCA4MCwgMTMwIDgwLCAxMTAgNjAnO1xuICAgIC8vIHRoaXMubW91dGguZCA9ICdNNzAgMTEwIEMgNzAgMTQwLCAxMTAgMTQwLCAxMTAgMTEwJztcbiAgICAvLyB0aGlzLm1vdXRoLmQgPSAnTTEwIDEwIEMgMjAgMjAsIDQwIDIwLCA1MCAxMCc7XFxcbiAgICAvLyB0aGlzLm1vdXRoLmQgPSBgTSBDICR7dGhpcy5zaXplICogMiAvIDN9IDE0MCwgJHt0aGlzLnNpemUgKiAxIC8gM30gMTQwLCAke3RoaXMuc2l6ZSAqIDIgLyAzfSAxMTBgO1xuICAgIC8vIHRoaXMubW91dGguZCA9IGBNJHt0aGlzLnNpemUgKiAyIC8gOH0gJHt0aGlzLnNpemUgKiAyIC8gM30gQyAke3RoaXMuc2l6ZSAqIDIgLyA4fSAke3RoaXMuc2l6ZSAqIDIgLyAzfSwgJHtcbiAgICAvLyAgIHRoaXMuc2l6ZSAqIDYgLyA4fSAke3RoaXMuc2l6ZSAqIDIgLyAzfSwgJHt0aGlzLnNpemUgKiA2IC8gOH0gJHt0aGlzLnNpemUgKiAyIC8gM31gOyAvLyA9PiB0aGlzIGlzIGEgZmxhdCBtb3V0aFxuXG4gICAgLy8gY29uc3QgbWF4TW91dGhIZWlndGggPSB0aGlzLnNpemUgLyA2O1xuICAgIGNvbnN0IG1heFRocmVzaG9sZCA9IHRoaXMubWF4TW91dGhIZWlndGggLyAyO1xuXG4gICAgY29uc3QgYmFzZVBvc2l0aW9uTGVmdFggPSB0aGlzLnNpemUgKiAyIC8gOCArIHRoaXMudGhpY2tuZXNzO1xuICAgIGNvbnN0IGJhc2VQb3NpdGlvbkxlZnRZID0gdGhpcy5zaXplICogMiAvIDMgKyB0aGlzLnRoaWNrbmVzcztcblxuICAgIGNvbnN0IGxlZnRUb3BQb2ludENvb3JkcyA9IHtcbiAgICAgIHg6IGJhc2VQb3NpdGlvbkxlZnRYIC0gdGhpcy5tb3V0aFZhcmlhdGlvbixcbiAgICAgIHk6IGJhc2VQb3NpdGlvbkxlZnRZIC0gKG1heFRocmVzaG9sZCAqIHRoaXMudGhyZXNob2xkKVxuICAgIH07XG4gICAgY29uc3QgbGVmdEJvdHRvbVBvaW50Q29vcmRzID0ge1xuICAgICAgeDogYmFzZVBvc2l0aW9uTGVmdFggKyB0aGlzLm1vdXRoVmFyaWF0aW9uLFxuICAgICAgeTogYmFzZVBvc2l0aW9uTGVmdFkgKyAobWF4VGhyZXNob2xkICogdGhpcy50aHJlc2hvbGQpXG4gICAgfTtcblxuICAgIGNvbnN0IGJhc2VQb3NpdGlvblJpZ2h0WCA9IHRoaXMuc2l6ZSAqIDYgLyA4ICsgdGhpcy50aGlja25lc3M7XG4gICAgY29uc3QgYmFzZVBvc2l0aW9uUmlnaHRZID0gdGhpcy5zaXplICogMiAvIDMgKyB0aGlzLnRoaWNrbmVzcztcblxuICAgIGNvbnN0IHJpZ2h0VG9wUG9pbnRDb29yZHMgPSB7XG4gICAgICB4OiBiYXNlUG9zaXRpb25SaWdodFggKyB0aGlzLm1vdXRoVmFyaWF0aW9uLFxuICAgICAgeTogYmFzZVBvc2l0aW9uUmlnaHRZIC0gKG1heFRocmVzaG9sZCAqIHRoaXMudGhyZXNob2xkKVxuICAgIH07XG4gICAgY29uc3QgcmlnaHRCb3R0b21Qb2ludENvb3JkcyA9IHtcbiAgICAgIHg6IGJhc2VQb3NpdGlvblJpZ2h0WCAtIHRoaXMubW91dGhWYXJpYXRpb24sXG4gICAgICB5OiBiYXNlUG9zaXRpb25SaWdodFkgKyAobWF4VGhyZXNob2xkICogdGhpcy50aHJlc2hvbGQpXG4gICAgfTtcblxuICAgIHRoaXMubW91dGguZCA9IGBNJHtsZWZ0VG9wUG9pbnRDb29yZHMueH0gJHtsZWZ0VG9wUG9pbnRDb29yZHMueX0gQyAke2xlZnRCb3R0b21Qb2ludENvb3Jkcy54fSAke2xlZnRCb3R0b21Qb2ludENvb3Jkcy55fSwgJHtcbiAgICAgIHJpZ2h0Qm90dG9tUG9pbnRDb29yZHMueH0gJHtyaWdodEJvdHRvbVBvaW50Q29vcmRzLnl9LCAke3JpZ2h0VG9wUG9pbnRDb29yZHMueH0gJHtyaWdodFRvcFBvaW50Q29vcmRzLnl9YDtcblxuICAgIHRoaXMuZGVidWcgPSB7XG4gICAgICBsZWZ0VG9wOiB7XG4gICAgICAgIC4uLmxlZnRUb3BQb2ludENvb3JkcyxcbiAgICAgICAgY29sb3I6ICcjZjU1JyxcbiAgICAgIH0sXG4gICAgICBsZWZ0Qm90dG9tOiB7XG4gICAgICAgIC4uLmxlZnRCb3R0b21Qb2ludENvb3JkcyxcbiAgICAgICAgY29sb3I6ICcjNWY1JyxcbiAgICAgIH0sXG4gICAgICBsZWZ0TGluZTogYE0ke2xlZnRUb3BQb2ludENvb3Jkcy54fSAke2xlZnRUb3BQb2ludENvb3Jkcy55fSwgJHtsZWZ0Qm90dG9tUG9pbnRDb29yZHMueH0gJHtsZWZ0Qm90dG9tUG9pbnRDb29yZHMueX1gLFxuICAgICAgcmlnaHRCb3R0b206IHtcbiAgICAgICAgLi4ucmlnaHRCb3R0b21Qb2ludENvb3JkcyxcbiAgICAgICAgY29sb3I6ICcjZjU1JyxcbiAgICAgIH0sXG4gICAgICByaWdodFRvcDoge1xuICAgICAgICAuLi5yaWdodFRvcFBvaW50Q29vcmRzLFxuICAgICAgICBjb2xvcjogJyM1ZjUnLFxuICAgICAgfSxcbiAgICAgIHJpZ2h0TGluZTogYE0ke3JpZ2h0Qm90dG9tUG9pbnRDb29yZHMueH0gJHtyaWdodEJvdHRvbVBvaW50Q29vcmRzLnl9LCAke3JpZ2h0VG9wUG9pbnRDb29yZHMueH0gJHtyaWdodFRvcFBvaW50Q29vcmRzLnl9YCxcbiAgICB9O1xuXG5cbiAgICB0aGlzLm1vdXRoLnN0cm9rZUNvbG9yID0gdGhpcy5ib3JkZXJDb2xvcjtcbiAgICB0aGlzLm1vdXRoLmZpbGxDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgdGhpcy5tb3V0aC5zdHJva2VXaWR0aCA9IHRoaXMudGhpY2tuZXNzO1xuICB9XG5cbiAgc2V0dXBFeWVzQW5pbWF0aW9ucygpIHtcbiAgICBjb25zdCBkZWZhdWx0V2lkdGggPSB0aGlzLnNpemUgLyAyMDtcbiAgICBjb25zdCBhbmltYXRpb25EdXJhdGlvbiA9IE51bWJlcih0aGlzLmJsaW5rUmVwZWF0U3BlZWQpOyAvLyBtc1xuICAgIGNvbnN0IGJsaW5rRHVyYXRpb24gPSAxNTA7IC8vIG1zXG4gICAgY29uc3QgcmVwZWF0Q291bnQgPSB0aGlzLnNob3dEZWJ1ZyA/ICdpbmRlZmluaXRlJyA6ICcxMCc7XG5cbiAgICBjb25zdCBrZXlUaW1lQmxpbmtTdGFydCA9IChhbmltYXRpb25EdXJhdGlvbiAtIGJsaW5rRHVyYXRpb24pIC8gYW5pbWF0aW9uRHVyYXRpb247IC8vIDAuOTUgZm9yIDMwMDBtc1xuICAgIGNvbnN0IGJsaW5rRHVyYXRpb25QcmN0ID0gKGJsaW5rRHVyYXRpb24pIC8gYW5pbWF0aW9uRHVyYXRpb247XG4gICAgY29uc3Qga2V5VGltZXNQcmN0ID0gYCR7XG4gICAgICBrZXlUaW1lQmxpbmtTdGFydCArIGJsaW5rRHVyYXRpb25QcmN0ICogMC4xfTsgJHtcbiAgICAgIGtleVRpbWVCbGlua1N0YXJ0ICsgYmxpbmtEdXJhdGlvblByY3QgKiAwLjJ9YDsgLy8gMC45NTU7IDAuOTYgZm9yIDMwMDBtc1xuXG4gICAgdGhpcy5ibGlua1RpbWluZ3MueSA9IHRoaXMuZ2V0QmxpbmtUaW1pbmdzWShhbmltYXRpb25EdXJhdGlvbiwgZGVmYXVsdFdpZHRoLCBrZXlUaW1lQmxpbmtTdGFydCwga2V5VGltZXNQcmN0LCByZXBlYXRDb3VudCk7XG5cbiAgICB0aGlzLmJsaW5rVGltaW5ncy54ID0gdGhpcy5nZXRCbGlua1RpbWdpbmdzWChhbmltYXRpb25EdXJhdGlvbiwgZGVmYXVsdFdpZHRoLCBrZXlUaW1lc1ByY3QsIHJlcGVhdENvdW50KTtcbiAgfVxuXG4gIGdldEJsaW5rVGltaW5nc1kgPSAoYW5pbWF0aW9uRHVyYXRpb246IG51bWJlciwgZGVmYXVsdFdpZHRoOiBudW1iZXIsXG4gICAga2V5VGltZUJsaW5rU3RhcnQ6IG51bWJlciwga2V5VGltZXNQcmN0OiBzdHJpbmcsIHJlcGVhdENvdW50OiBzdHJpbmcpID0+ICh7XG4gICAgICBhdHRyaWJ1dGVOYW1lOiAncnknLFxuICAgICAgZmlsbDogJ3JlbW92ZScsXG4gICAgICBkdXI6IGAke2FuaW1hdGlvbkR1cmF0aW9ufW1zYCxcbiAgICAgIHJlcGVhdENvdW50LFxuICAgICAgdmFsdWVzOiBgJHtkZWZhdWx0V2lkdGh9OyAke2RlZmF1bHRXaWR0aH07ICR7ZGVmYXVsdFdpZHRoICogMS4yNX07IDA7ICR7ZGVmYXVsdFdpZHRofWAsXG4gICAgICBrZXlUaW1lczogYDA7ICR7a2V5VGltZUJsaW5rU3RhcnR9OyAke2tleVRpbWVzUHJjdH07IDFgIC8vIFwiMDsgMC45NTsgMC45NTU7IDAuOTY7IDFcIiBmb3IgMzAwMG1zXG4gIH0pXG5cbiAgZ2V0QmxpbmtUaW1naW5nc1ggPSAoYW5pbWF0aW9uRHVyYXRpb246IG51bWJlciwgZGVmYXVsdFdpZHRoOiBudW1iZXIsIGtleVRpbWVzUHJjdDogc3RyaW5nLCByZXBlYXRDb3VudDogc3RyaW5nKSA9PiAoe1xuICAgIGF0dHJpYnV0ZU5hbWU6ICdyeCcsXG4gICAgZmlsbDogJ3JlbW92ZScsXG4gICAgZHVyOiBgJHthbmltYXRpb25EdXJhdGlvbn1tc2AsXG4gICAgcmVwZWF0Q291bnQsXG4gICAgdmFsdWVzOiBgJHtkZWZhdWx0V2lkdGh9OyAke2RlZmF1bHRXaWR0aH07ICR7ZGVmYXVsdFdpZHRoICogMS4yNX07ICR7ZGVmYXVsdFdpZHRofWAsXG4gICAga2V5VGltZXM6IGAwOyAke2tleVRpbWVzUHJjdH07IDFgIC8vIFwiMDsgMC45NTU7IDAuOTY7IDFcIiBmb3IgMzAwMG1zXG4gIH0pXG59XG5cbmludGVyZmFjZSBTdmdDaXJjbGVEYXRhIHtcbiAgcG9zaXRpb25YOiBudW1iZXI7XG4gIHBvc2l0aW9uWTogbnVtYmVyO1xuICByYXk6IG51bWJlcjtcbiAgc3Ryb2tlQ29sb3I6IHN0cmluZztcbiAgc3Ryb2tlV2lkdGg6IG51bWJlcjtcbiAgZmlsbENvbG9yOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTdmdQYXRoRGF0YSB7XG4gIGQ6IHN0cmluZztcbiAgc3Ryb2tlQ29sb3I6IHN0cmluZztcbiAgc3Ryb2tlV2lkdGg6IG51bWJlcjtcbiAgZmlsbENvbG9yOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTdmdBbmltYXRpb24ge1xuICB2YWx1ZXM/OiBzdHJpbmc7XG4gIGtleVRpbWVzPzogc3RyaW5nO1xuICByZXBlYXRDb3VudD86IHN0cmluZztcbiAgZHVyPzogc3RyaW5nO1xuICBhdHRyaWJ1dGVOYW1lPzogc3RyaW5nO1xuICBmaWxsPzogc3RyaW5nO1xufVxuIl19
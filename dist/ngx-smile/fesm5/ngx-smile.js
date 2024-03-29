import { defineInjectable, Injectable, Component, Input, NgModule } from '@angular/core';
import { __assign } from 'tslib';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxSmileService = /** @class */ (function () {
    function NgxSmileService() {
    }
    NgxSmileService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxSmileService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxSmileService.ngInjectableDef = defineInjectable({ factory: function NgxSmileService_Factory() { return new NgxSmileService(); }, token: NgxSmileService, providedIn: "root" });
    return NgxSmileService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        this.getBlinkTimingsY = (/**
         * @param {?} animationDuration
         * @param {?} defaultWidth
         * @param {?} keyTimeBlinkStart
         * @param {?} keyTimesPrct
         * @param {?} repeatCount
         * @return {?}
         */
        function (animationDuration, defaultWidth, keyTimeBlinkStart, keyTimesPrct, repeatCount) { return ({
            attributeName: 'ry',
            fill: 'remove',
            dur: animationDuration + "ms",
            repeatCount: repeatCount,
            values: defaultWidth + "; " + defaultWidth + "; " + defaultWidth * 1.25 + "; 0; " + defaultWidth,
            keyTimes: "0; " + keyTimeBlinkStart + "; " + keyTimesPrct + "; 1" // "0; 0.95; 0.955; 0.96; 1" for 3000ms
        }); });
        this.getBlinkTimgingsX = (/**
         * @param {?} animationDuration
         * @param {?} defaultWidth
         * @param {?} keyTimesPrct
         * @param {?} repeatCount
         * @return {?}
         */
        function (animationDuration, defaultWidth, keyTimesPrct, repeatCount) { return ({
            attributeName: 'rx',
            fill: 'remove',
            dur: animationDuration + "ms",
            repeatCount: repeatCount,
            values: defaultWidth + "; " + defaultWidth + "; " + defaultWidth * 1.25 + "; " + defaultWidth,
            keyTimes: "0; " + keyTimesPrct + "; 1" // "0; 0.955; 0.96; 1" for 3000ms
        }); });
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
            leftTop: __assign({}, leftTopPointCoords, { color: '#f55' }),
            leftBottom: __assign({}, leftBottomPointCoords, { color: '#5f5' }),
            leftLine: "M" + leftTopPointCoords.x + " " + leftTopPointCoords.y + ", " + leftBottomPointCoords.x + " " + leftBottomPointCoords.y,
            rightBottom: __assign({}, rightBottomPointCoords, { color: '#f55' }),
            rightTop: __assign({}, rightTopPointCoords, { color: '#5f5' }),
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
        this.blinkTimings.y = this.getBlinkTimingsY(animationDuration, defaultWidth, keyTimeBlinkStart, keyTimesPrct, repeatCount);
        this.blinkTimings.x = this.getBlinkTimgingsX(animationDuration, defaultWidth, keyTimesPrct, repeatCount);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxSmileModule = /** @class */ (function () {
    function NgxSmileModule() {
    }
    NgxSmileModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgxSmileComponent],
                    imports: [
                        CommonModule,
                        FormsModule,
                    ],
                    exports: [NgxSmileComponent]
                },] }
    ];
    return NgxSmileModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxSmileComponent, NgxSmileModule, NgxSmileService };
//# sourceMappingURL=ngx-smile.js.map

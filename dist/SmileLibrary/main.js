(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-smile/fesm5/ngx-smile.js":
/*!*******************************************!*\
  !*** ./dist/ngx-smile/fesm5/ngx-smile.js ***!
  \*******************************************/
/*! exports provided: NgxSmileService, NgxSmileComponent, NgxSmileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSmileService", function() { return NgxSmileService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSmileComponent", function() { return NgxSmileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSmileModule", function() { return NgxSmileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxSmileService = /** @class */ (function () {
    function NgxSmileService() {
    }
    NgxSmileService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxSmileService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxSmileService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function NgxSmileService_Factory() { return new NgxSmileService(); }, token: NgxSmileService, providedIn: "root" });
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
            leftTop: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, leftTopPointCoords, { color: '#f55' }),
            leftBottom: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, leftBottomPointCoords, { color: '#5f5' }),
            leftLine: "M" + leftTopPointCoords.x + " " + leftTopPointCoords.y + ", " + leftBottomPointCoords.x + " " + leftBottomPointCoords.y,
            rightBottom: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, rightBottomPointCoords, { color: '#f55' }),
            rightTop: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, rightTopPointCoords, { color: '#5f5' }),
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ngx-smile',
                    template: "<div class=\"all-container\">\n  <div class=\"smile-container\">\n    <svg [attr.width]=\"dimension\" [attr.height]=\"dimension\" class=\"smile\" shape-rendering=\"geometricPrecision\">\n      <circle [attr.cx]=\"head.positionX\" [attr.cy]=\"head.positionY\" [attr.r]=\"head.ray\" [attr.stroke]=\"head.strokeColor\"\n        [attr.stroke-width]=\"head.strokeWidth\" [attr.fill]=\"head.fillColor\" />\n      <g class=\"eye\" id=\"leftEye\">\n        <ellipse [attr.cx]=\"leftEye.positionX\" [attr.cy]=\"leftEye.positionY\" [attr.rx]=\"leftEye.ray\" [attr.ry]=\"leftEye.ray\"\n          [attr.stroke]=\"head.strokeColor\" [attr.stroke-width]=\"leftEye.strokeWidth\" [attr.fill]=\"leftEye.fillColor\">\n          <animate [attr.attributeName]=\"blinkTimings.y.attributeName\" [attr.fill]=\"blinkTimings.y.fill\" [attr.dur]=\"blinkTimings.y.dur\"\n            [attr.repeatCount]=\"blinkTimings.y.repeatCount\" [attr.values]=\"blinkTimings.y.values\" [attr.keyTimes]=\"blinkTimings.y.keyTimes\" />\n          <animate [attr.attributeName]=\"blinkTimings.x.attributeName\" [attr.fill]=\"blinkTimings.x.fill\" [attr.dur]=\"blinkTimings.x.dur\"\n            [attr.repeatCount]=\"blinkTimings.x.repeatCount\" [attr.values]=\"blinkTimings.x.values\" [attr.keyTimes]=\"blinkTimings.x.keyTimes\" />\n        </ellipse>\n      </g>\n      <g class=\"eye\" id=\"rightEye\">\n        <ellipse [attr.cx]=\"rightEye.positionX\" [attr.cy]=\"rightEye.positionY\" [attr.rx]=\"rightEye.ray\" [attr.ry]=\"rightEye.ray\"\n          [attr.stroke]=\"rightEye.strokeColor\" [attr.stroke-width]=\"rightEye.strokeWidth\" [attr.fill]=\"rightEye.fillColor\">\n          <animate [attr.attributeName]=\"blinkTimings.y.attributeName\" [attr.fill]=\"blinkTimings.y.fill\" [attr.dur]=\"blinkTimings.y.dur\"\n            [attr.repeatCount]=\"blinkTimings.y.repeatCount\" [attr.values]=\"blinkTimings.y.values\" [attr.keyTimes]=\"blinkTimings.y.keyTimes\" />\n          <animate [attr.attributeName]=\"blinkTimings.x.attributeName\" [attr.fill]=\"blinkTimings.x.fill\" [attr.dur]=\"blinkTimings.x.dur\"\n            [attr.repeatCount]=\"blinkTimings.x.repeatCount\" [attr.values]=\"blinkTimings.x.values\" [attr.keyTimes]=\"blinkTimings.x.keyTimes\" />\n        </ellipse>\n      </g>\n\n      <!-- legit mouth -->\n      <path [attr.d]=\"mouth.d\" [attr.stroke]=\"mouth.strokeColor\"\n        [attr.stroke-width]=\"mouth.strokeWidth\" [attr.fill]=\"mouth.fillColor\" />\n\n      <!-- Debug to show how we drow the mouth -->\n      <g *ngIf=\"showDebug && showLines\">\n        <circle [attr.cx]=\"debug.leftTop.x\" [attr.cy]=\"debug.leftTop.y\" r=\"2\" [attr.fill]=\"debug.leftTop.color\" />\n        <path [attr.d]=\"debug.leftLine\" stroke-width=\"2\" stroke=\"#55f\" />\n        <circle [attr.cx]=\"debug.leftBottom.x\" [attr.cy]=\"debug.leftBottom.y\" r=\"2\" [attr.fill]=\"debug.leftBottom.color\" />\n        <path [attr.d]=\"debug.rightLine\" stroke-width=\"2\" stroke=\"#55f\" />\n        <circle [attr.cx]=\"debug.rightBottom.x\" [attr.cy]=\"debug.rightBottom.y\" r=\"2\" [attr.fill]=\"debug.rightBottom.color\" />\n        <circle [attr.cx]=\"debug.rightTop.x\" [attr.cy]=\"debug.rightTop.y\" r=\"2\" [attr.fill]=\"debug.rightTop.color\" />\n      </g>\n    </svg>\n  </div>\n  <div class=\"controls\" *ngIf=\"showDebug\">\n    <h2>Hapiness lvl : {{ threshold }}</h2>\n    <div class=\"debug-info\">\n      <label for=\"showLines\">Show smile drawing lines</label>\n      <input type=\"checkbox\" name=\"showLines\" [(ngModel)]=\"showLines\" />\n      <!-- <mat-slide-toggle [(ngModel)]=\"showLines\">Show smile drawing lines</mat-slide-toggle> -->\n    </div>\n    <div class=\"debug-info\">\n      <label for=\"threshold\">Happiness ({{ threshold }})</label>\n      <input name=\"threshold\" type=\"number\" min=\"-1\" max=\"1\" [(ngModel)]=\"threshold\" (change)=\"udpateSmileSlider($event)\"/>\n      <!-- <mat-slider min=\"-1\" max=\"1\" step=\"0.01\" [(ngModel)]=\"threshold\" (change)=\"udpateSmileSlider($event)\"></mat-slider> -->\n    </div>\n    <div class=\"debug-info\">\n      <label for=\"mouthVariation\">Variation ({{mouthVariation}}) :</label>\n      <input name=\"mouthVariation\" type=\"number\" min=\"-20\" max=\"20\" [(ngModel)]=\"mouthVariation\" (change)=\"udpateSmileSlider($event)\"/>\n      <!-- <mat-slider min=\"-20\" max=\"20\" step=\"1\" [(ngModel)]=\"mouthVariation\" (change)=\"udpateSmileSlider($event)\"></mat-slider> -->\n    </div>\n    <div class=\"debug-info\">\n      <label for=\"maxMouthHeigth\">Max Mouth Height {{maxMouthHeigth}} :</label>\n      <input name=\"maxMouthHeigth\" type=\"number\" min=\"-20\" max=\"20\" [(ngModel)]=\"maxMouthHeigth\" (change)=\"udpateSmileSlider($event)\"/>\n      <!-- <mat-slider min=\"0\" max=\"150\" step=\"1\" [(ngModel)]=\"maxMouthHeigth\" (change)=\"udpateSmileSlider($event)\"></mat-slider> -->\n    </div>\n    <div class=\"debug-info\">\n      <label for=\"blinkRepeatSpeed\">Blink Speed {{blinkRepeatSpeed | number}} :</label>\n      <input name=\"blinkRepeatSpeed\" type=\"number\" min=\"200\" max=\"5000\" [(ngModel)]=\"blinkRepeatSpeed\" (change)=\"udpateSmileSlider($event)\"/>\n      <!-- <mat-slider min=\"200\" max=\"5000\" step=\"100\" [(ngModel)]=\"blinkRepeatSpeed\" (change)=\"udpateSmileSlider($event)\"></mat-slider> -->\n    </div>\n    <div class=\"debug-info\">\n      <label for=\"thickness\">Thickness {{thickness}} :</label>\n      <input name=\"thickness\" type=\"number\" min=\"1\" max=\"15\" [(ngModel)]=\"thickness\" (change)=\"udpateSmileSlider($event)\"/>\n      <!-- <mat-slider min=\"1\" max=\"15\" step=\"1\" [(ngModel)]=\"thickness\" (change)=\"udpateSmileSlider($event)\"></mat-slider> -->\n    </div>\n  </div>\n</div>\n",
                    styles: [".all-container{display:inline-block;text-align:center}.all-container h2{text-align:center}.all-container .smile-container{margin:1rem}.all-container .controls{margin:auto;width:100%;text-align:center}.all-container .controls .debug-info label{padding-right:.5rem}"]
                }] }
    ];
    NgxSmileComponent.propDecorators = {
        threshold: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        showDebug: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        faceColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        borderColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        thickness: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        mouthVariation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        blinkRepeatSpeed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    declarations: [NgxSmileComponent],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
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



//# sourceMappingURL=ngx-smile.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    {{ title }} Demo :)\n  </h1>\n</div>\n<div class=\"main\">\n  <div class=\"container\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>Smile</mat-card-title>\n        <mat-card-subtitle>Demo</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"u-text-center\">\n          <ngx-smile threshold=\"-1\"></ngx-smile>\n          <ngx-smile threshold=\"-0.5\"></ngx-smile>\n          <ngx-smile threshold=\"0\"></ngx-smile>\n          <ngx-smile threshold=\"0.5\"></ngx-smile>\n          <ngx-smile threshold=\"1\"></ngx-smile>\n        </div>\n        <div class=\"u-text-center\">\n          <ngx-smile threshold=\"1\" showDebug=\"true\"></ngx-smile>\n        </div>\n        <div class=\"u-text-center\">\n          <ngx-smile threshold=\"0.75\" size=\"100\"></ngx-smile>\n          <ngx-smile threshold=\"-0.75\" size=\"200\" faceColor=\"orange\"></ngx-smile>\n          <ngx-smile threshold=\"0.3\" size=\"150\" faceColor=\"pink\" thickness=\"10\" borderColor=\"blue\" blinkRepeatSpeed=\"1000\"></ngx-smile>\n          <ngx-smile threshold=\"0.8\" size=\"150\" faceColor=\"lightblue\" thickness=\"2\" borderColor=\"magenta\"\n            blinkRepeatSpeed=\"500\" mouthVariation=\"-10\"></ngx-smile>\n        </div>\n      </mat-card-content>\n      <mat-card-actions class=\"u-text-right\">\n        <button mat-button></button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".u-text-center {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21haW5mbGV1cnkvZGV2L25neC1zbWlsZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnUtdGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'NgxSmile';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sml-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_smile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-smile */ "./dist/ngx-smile/fesm5/ngx-smile.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");


// import { NgxSmileModule } from 'projects/ngx-smile/src/public_api';






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                ngx_smile__WEBPACK_IMPORTED_MODULE_1__["NgxSmileModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/romainfleury/dev/ngx-smile/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
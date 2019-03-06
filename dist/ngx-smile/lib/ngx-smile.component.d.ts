import { OnInit, EventEmitter } from '@angular/core';
export declare class NgxSmileComponent implements OnInit {
    threshold: number;
    showDebug: boolean;
    size: number;
    faceColor: string;
    borderColor: string;
    thickness: number;
    mouthVariation: number;
    blinkRepeatSpeed: number;
    head: SvgCircleData;
    leftEye: SvgCircleData;
    rightEye: SvgCircleData;
    mouth: SvgPathData;
    blinkTimings: {
        x: SvgAnimation;
        y: SvgAnimation;
    };
    maxMouthHeigth: number;
    dimension: number;
    debug: {
        leftTop: {
            x: number;
            y: number;
            color: string;
        };
        leftLine: string;
        leftBottom: {
            x: number;
            y: number;
            color: string;
        };
        rightBottom: {
            x: number;
            y: number;
            color: string;
        };
        rightLine: string;
        rightTop: {
            x: number;
            y: number;
            color: string;
        };
    } | undefined;
    showLines: boolean;
    ngOnInit(): void;
    drawFace(): void;
    setImageDimension(): void;
    udpateSmileSlider(_: EventEmitter<any>): void;
    toggleLines(): void;
    drawHead(): void;
    drawLeftEye(): void;
    drawRightEye(): void;
    drawSmile(): void;
    setupEyesAnimations(): void;
}
interface SvgCircleData {
    positionX: number;
    positionY: number;
    ray: number;
    strokeColor: string;
    strokeWidth: number;
    fillColor: string;
}
interface SvgPathData {
    d: string;
    strokeColor: string;
    strokeWidth: number;
    fillColor: string;
}
interface SvgAnimation {
    values?: string;
    keyTimes?: string;
    repeatCount?: string;
    dur?: string;
    attributeName?: string;
    fill?: string;
}
export {};

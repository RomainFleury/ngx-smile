import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
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
    getBlinkTimingsY: (animationDuration: number, defaultWidth: number, keyTimeBlinkStart: number, keyTimesPrct: string, repeatCount: string) => {
        attributeName: string;
        fill: string;
        dur: string;
        repeatCount: string;
        values: string;
        keyTimes: string;
    };
    getBlinkTimgingsX: (animationDuration: number, defaultWidth: number, keyTimesPrct: string, repeatCount: string) => {
        attributeName: string;
        fill: string;
        dur: string;
        repeatCount: string;
        values: string;
        keyTimes: string;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgxSmileComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgxSmileComponent, "ngx-smile", never, {
    "showDebug": "showDebug";
    "size": "size";
    "faceColor": "faceColor";
    "borderColor": "borderColor";
    "thickness": "thickness";
    "mouthVariation": "mouthVariation";
    "blinkRepeatSpeed": "blinkRepeatSpeed";
    "threshold": "threshold";
}, {}, never>;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNtaWxlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJuZ3gtc21pbGUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNFQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOZ3hTbWlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgdGhyZXNob2xkOiBudW1iZXI7XG4gICAgc2hvd0RlYnVnOiBib29sZWFuO1xuICAgIHNpemU6IG51bWJlcjtcbiAgICBmYWNlQ29sb3I6IHN0cmluZztcbiAgICBib3JkZXJDb2xvcjogc3RyaW5nO1xuICAgIHRoaWNrbmVzczogbnVtYmVyO1xuICAgIG1vdXRoVmFyaWF0aW9uOiBudW1iZXI7XG4gICAgYmxpbmtSZXBlYXRTcGVlZDogbnVtYmVyO1xuICAgIGhlYWQ6IFN2Z0NpcmNsZURhdGE7XG4gICAgbGVmdEV5ZTogU3ZnQ2lyY2xlRGF0YTtcbiAgICByaWdodEV5ZTogU3ZnQ2lyY2xlRGF0YTtcbiAgICBtb3V0aDogU3ZnUGF0aERhdGE7XG4gICAgYmxpbmtUaW1pbmdzOiB7XG4gICAgICAgIHg6IFN2Z0FuaW1hdGlvbjtcbiAgICAgICAgeTogU3ZnQW5pbWF0aW9uO1xuICAgIH07XG4gICAgbWF4TW91dGhIZWlndGg6IG51bWJlcjtcbiAgICBkaW1lbnNpb246IG51bWJlcjtcbiAgICBkZWJ1Zzoge1xuICAgICAgICBsZWZ0VG9wOiB7XG4gICAgICAgICAgICB4OiBudW1iZXI7XG4gICAgICAgICAgICB5OiBudW1iZXI7XG4gICAgICAgICAgICBjb2xvcjogc3RyaW5nO1xuICAgICAgICB9O1xuICAgICAgICBsZWZ0TGluZTogc3RyaW5nO1xuICAgICAgICBsZWZ0Qm90dG9tOiB7XG4gICAgICAgICAgICB4OiBudW1iZXI7XG4gICAgICAgICAgICB5OiBudW1iZXI7XG4gICAgICAgICAgICBjb2xvcjogc3RyaW5nO1xuICAgICAgICB9O1xuICAgICAgICByaWdodEJvdHRvbToge1xuICAgICAgICAgICAgeDogbnVtYmVyO1xuICAgICAgICAgICAgeTogbnVtYmVyO1xuICAgICAgICAgICAgY29sb3I6IHN0cmluZztcbiAgICAgICAgfTtcbiAgICAgICAgcmlnaHRMaW5lOiBzdHJpbmc7XG4gICAgICAgIHJpZ2h0VG9wOiB7XG4gICAgICAgICAgICB4OiBudW1iZXI7XG4gICAgICAgICAgICB5OiBudW1iZXI7XG4gICAgICAgICAgICBjb2xvcjogc3RyaW5nO1xuICAgICAgICB9O1xuICAgIH0gfCB1bmRlZmluZWQ7XG4gICAgc2hvd0xpbmVzOiBib29sZWFuO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgZHJhd0ZhY2UoKTogdm9pZDtcbiAgICBzZXRJbWFnZURpbWVuc2lvbigpOiB2b2lkO1xuICAgIHVkcGF0ZVNtaWxlU2xpZGVyKF86IEV2ZW50RW1pdHRlcjxhbnk+KTogdm9pZDtcbiAgICB0b2dnbGVMaW5lcygpOiB2b2lkO1xuICAgIGRyYXdIZWFkKCk6IHZvaWQ7XG4gICAgZHJhd0xlZnRFeWUoKTogdm9pZDtcbiAgICBkcmF3UmlnaHRFeWUoKTogdm9pZDtcbiAgICBkcmF3U21pbGUoKTogdm9pZDtcbiAgICBzZXR1cEV5ZXNBbmltYXRpb25zKCk6IHZvaWQ7XG4gICAgZ2V0QmxpbmtUaW1pbmdzWTogKGFuaW1hdGlvbkR1cmF0aW9uOiBudW1iZXIsIGRlZmF1bHRXaWR0aDogbnVtYmVyLCBrZXlUaW1lQmxpbmtTdGFydDogbnVtYmVyLCBrZXlUaW1lc1ByY3Q6IHN0cmluZywgcmVwZWF0Q291bnQ6IHN0cmluZykgPT4ge1xuICAgICAgICBhdHRyaWJ1dGVOYW1lOiBzdHJpbmc7XG4gICAgICAgIGZpbGw6IHN0cmluZztcbiAgICAgICAgZHVyOiBzdHJpbmc7XG4gICAgICAgIHJlcGVhdENvdW50OiBzdHJpbmc7XG4gICAgICAgIHZhbHVlczogc3RyaW5nO1xuICAgICAgICBrZXlUaW1lczogc3RyaW5nO1xuICAgIH07XG4gICAgZ2V0QmxpbmtUaW1naW5nc1g6IChhbmltYXRpb25EdXJhdGlvbjogbnVtYmVyLCBkZWZhdWx0V2lkdGg6IG51bWJlciwga2V5VGltZXNQcmN0OiBzdHJpbmcsIHJlcGVhdENvdW50OiBzdHJpbmcpID0+IHtcbiAgICAgICAgYXR0cmlidXRlTmFtZTogc3RyaW5nO1xuICAgICAgICBmaWxsOiBzdHJpbmc7XG4gICAgICAgIGR1cjogc3RyaW5nO1xuICAgICAgICByZXBlYXRDb3VudDogc3RyaW5nO1xuICAgICAgICB2YWx1ZXM6IHN0cmluZztcbiAgICAgICAga2V5VGltZXM6IHN0cmluZztcbiAgICB9O1xufVxuaW50ZXJmYWNlIFN2Z0NpcmNsZURhdGEge1xuICAgIHBvc2l0aW9uWDogbnVtYmVyO1xuICAgIHBvc2l0aW9uWTogbnVtYmVyO1xuICAgIHJheTogbnVtYmVyO1xuICAgIHN0cm9rZUNvbG9yOiBzdHJpbmc7XG4gICAgc3Ryb2tlV2lkdGg6IG51bWJlcjtcbiAgICBmaWxsQ29sb3I6IHN0cmluZztcbn1cbmludGVyZmFjZSBTdmdQYXRoRGF0YSB7XG4gICAgZDogc3RyaW5nO1xuICAgIHN0cm9rZUNvbG9yOiBzdHJpbmc7XG4gICAgc3Ryb2tlV2lkdGg6IG51bWJlcjtcbiAgICBmaWxsQ29sb3I6IHN0cmluZztcbn1cbmludGVyZmFjZSBTdmdBbmltYXRpb24ge1xuICAgIHZhbHVlcz86IHN0cmluZztcbiAgICBrZXlUaW1lcz86IHN0cmluZztcbiAgICByZXBlYXRDb3VudD86IHN0cmluZztcbiAgICBkdXI/OiBzdHJpbmc7XG4gICAgYXR0cmlidXRlTmFtZT86IHN0cmluZztcbiAgICBmaWxsPzogc3RyaW5nO1xufVxuZXhwb3J0IHt9O1xuIl19
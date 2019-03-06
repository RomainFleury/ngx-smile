import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-smile',
  templateUrl: './ngx-smile.component.html',
  styleUrls: ['./ngx-smile.component.sass']
})
export class NgxSmileComponent implements OnInit {

  @Input() threshold: number;
  @Input() showDebug = false; // use this to display debug and test data
  @Input() size = 150;
  @Input() faceColor = '#fff';
  @Input() borderColor = '#000000';
  @Input() thickness = 4;
  @Input() mouthVariation = 0;
  @Input() blinkRepeatSpeed = 3000 + Math.round(Math.random() * 100);

  head: SvgCircleData = { positionX: 0, positionY: 0, ray: 0, strokeColor: '', strokeWidth: 0, fillColor: '' };
  leftEye: SvgCircleData = { positionX: 0, positionY: 0, ray: 0, strokeColor: '', strokeWidth: 0, fillColor: '' };
  rightEye: SvgCircleData = { positionX: 0, positionY: 0, ray: 0, strokeColor: '', strokeWidth: 0, fillColor: '' };
  mouth: SvgPathData = { d: '', strokeColor: '', strokeWidth: 0, fillColor: '' };
  blinkTimings: { x: SvgAnimation, y: SvgAnimation } = { x: {}, y: {} };
  maxMouthHeigth: number;
  dimension: number;

  debug: {
    leftTop: { x: number, y: number, color: string },
    leftLine: string,
    leftBottom: { x: number, y: number, color: string },
    rightBottom: { x: number, y: number, color: string },
    rightLine: string,
    rightTop: { x: number, y: number, color: string },
  } | undefined = undefined;
  showLines = false;

  ngOnInit() {
    this.thickness = Number(this.thickness);
    this.size = Number(this.size);
    this.mouthVariation = Number(this.mouthVariation);
    this.blinkRepeatSpeed = Number(this.blinkRepeatSpeed);
    this.maxMouthHeigth = this.size / 4;
    this.setImageDimension();
    this.drawFace();
  }

  drawFace() {
    this.setImageDimension();
    this.drawHead();
    this.drawLeftEye();
    this.drawRightEye();
    this.drawSmile();
    this.setupEyesAnimations();
  }

  setImageDimension() {
    this.dimension = this.size + this.thickness * 2;
  }

  udpateSmileSlider(_: EventEmitter<any>) {
    this.drawFace();
  }

  toggleLines() {
    this.showLines = !this.showLines;
  }

  drawHead() {
    this.head.positionX = this.head.positionY = this.size / 2 + this.thickness;
    this.head.ray = this.size / 2;
    this.head.strokeColor = this.borderColor;
    this.head.strokeWidth = this.thickness;
    this.head.fillColor = this.faceColor;
  }

  drawLeftEye() {
    this.leftEye.positionX = this.leftEye.positionY = this.size / 3 + this.thickness;
    this.leftEye.ray = this.size / 20;
    this.leftEye.strokeColor = this.borderColor;
    this.leftEye.strokeWidth = this.thickness;
    this.leftEye.fillColor = this.borderColor;
  }

  drawRightEye() {
    this.rightEye.positionX = this.size * 2 / 3 + this.thickness;
    this.rightEye.positionY = this.size / 3 + this.thickness;
    this.rightEye.ray = this.size / 20;
    this.rightEye.strokeColor = this.borderColor;
    this.rightEye.strokeWidth = this.thickness;
    this.rightEye.fillColor = this.borderColor;
  }

  drawSmile() {
    // this.mouth.d = 'M70 60 C 70 80, 130 80, 110 60';
    // this.mouth.d = 'M70 110 C 70 140, 110 140, 110 110';
    // this.mouth.d = 'M10 10 C 20 20, 40 20, 50 10';\
    // this.mouth.d = `M C ${this.size * 2 / 3} 140, ${this.size * 1 / 3} 140, ${this.size * 2 / 3} 110`;
    // this.mouth.d = `M${this.size * 2 / 8} ${this.size * 2 / 3} C ${this.size * 2 / 8} ${this.size * 2 / 3}, ${
    //   this.size * 6 / 8} ${this.size * 2 / 3}, ${this.size * 6 / 8} ${this.size * 2 / 3}`; // => this is a flat mouth

    // const maxMouthHeigth = this.size / 6;
    const maxThreshold = this.maxMouthHeigth / 2;

    const basePositionLeftX = this.size * 2 / 8 + this.thickness;
    const basePositionLeftY = this.size * 2 / 3 + this.thickness;

    const leftTopPointCoords = {
      x: basePositionLeftX - this.mouthVariation,
      y: basePositionLeftY - (maxThreshold * this.threshold)
    };
    const leftBottomPointCoords = {
      x: basePositionLeftX + this.mouthVariation,
      y: basePositionLeftY + (maxThreshold * this.threshold)
    };

    const basePositionRightX = this.size * 6 / 8 + this.thickness;
    const basePositionRightY = this.size * 2 / 3 + this.thickness;

    const rightTopPointCoords = {
      x: basePositionRightX + this.mouthVariation,
      y: basePositionRightY - (maxThreshold * this.threshold)
    };
    const rightBottomPointCoords = {
      x: basePositionRightX - this.mouthVariation,
      y: basePositionRightY + (maxThreshold * this.threshold)
    };

    this.mouth.d = `M${leftTopPointCoords.x} ${leftTopPointCoords.y} C ${leftBottomPointCoords.x} ${leftBottomPointCoords.y}, ${
      rightBottomPointCoords.x} ${rightBottomPointCoords.y}, ${rightTopPointCoords.x} ${rightTopPointCoords.y}`;

    this.debug = {
      leftTop: {
        ...leftTopPointCoords,
        color: '#f55',
      },
      leftBottom: {
        ...leftBottomPointCoords,
        color: '#5f5',
      },
      leftLine: `M${leftTopPointCoords.x} ${leftTopPointCoords.y}, ${leftBottomPointCoords.x} ${leftBottomPointCoords.y}`,
      rightBottom: {
        ...rightBottomPointCoords,
        color: '#f55',
      },
      rightTop: {
        ...rightTopPointCoords,
        color: '#5f5',
      },
      rightLine: `M${rightBottomPointCoords.x} ${rightBottomPointCoords.y}, ${rightTopPointCoords.x} ${rightTopPointCoords.y}`,
    };


    this.mouth.strokeColor = this.borderColor;
    this.mouth.fillColor = 'transparent';
    this.mouth.strokeWidth = this.thickness;
  }

  setupEyesAnimations() {
    const defaultWidth = this.size / 20;
    const animationDuration = Number(this.blinkRepeatSpeed); // ms
    const blinkDuration = 150; // ms
    const repeatCount = this.showDebug ? 'indefinite' : '10';

    const keyTimeBlinkStart = (animationDuration - blinkDuration) / animationDuration; // 0.95 for 3000ms
    const blinkDurationPrct = (blinkDuration) / animationDuration;
    const keyTimesPrct = `${
      keyTimeBlinkStart + blinkDurationPrct * 0.1}; ${
      keyTimeBlinkStart + blinkDurationPrct * 0.2}`; // 0.955; 0.96 for 3000ms

    this.blinkTimings.y = this.getBlinkTimingsY(animationDuration, defaultWidth, keyTimeBlinkStart, keyTimesPrct, repeatCount);

    this.blinkTimings.x = this.getBlinkTimgingsX(animationDuration, defaultWidth, keyTimesPrct, repeatCount);
  }

  getBlinkTimingsY = (animationDuration: number, defaultWidth: number,
    keyTimeBlinkStart: number, keyTimesPrct: string, repeatCount: string) => ({
      attributeName: 'ry',
      fill: 'remove',
      dur: `${animationDuration}ms`,
      repeatCount,
      values: `${defaultWidth}; ${defaultWidth}; ${defaultWidth * 1.25}; 0; ${defaultWidth}`,
      keyTimes: `0; ${keyTimeBlinkStart}; ${keyTimesPrct}; 1` // "0; 0.95; 0.955; 0.96; 1" for 3000ms
  })

  getBlinkTimgingsX = (animationDuration: number, defaultWidth: number, keyTimesPrct: string, repeatCount: string) => ({
    attributeName: 'rx',
    fill: 'remove',
    dur: `${animationDuration}ms`,
    repeatCount,
    values: `${defaultWidth}; ${defaultWidth}; ${defaultWidth * 1.25}; ${defaultWidth}`,
    keyTimes: `0; ${keyTimesPrct}; 1` // "0; 0.955; 0.96; 1" for 3000ms
  })
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

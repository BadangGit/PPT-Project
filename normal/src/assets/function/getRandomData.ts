import { numberToPx } from "./modType";

export function getRandomPos(width: number, height: number) {
  let overflowSpace = Math.random() * 200;
  let left: number = 0;
  let top: number = 0;

  if (Math.random() < 0.5) {
    left = Math.floor(Math.random() * width - overflowSpace);
    top = Math.floor(Math.random() * height - overflowSpace);
  } else {
    left = Math.floor(Math.random() * width + overflowSpace);
    top = Math.floor(Math.random() * height + overflowSpace);
  }

  let pos = {
    left: numberToPx(left),
    top: numberToPx(top),
  };

  return pos;
}

export function getRandomSize(max: number, min: number) {
  let width = Math.floor(Math.random() * (max - min)) + min;
  let height = Math.floor(Math.random() * (max - min)) + min;

  let size = {
    width: numberToPx(width),
    height: numberToPx(height),
  };

  return size;
}

export function getRandomColor() {
  let randomColor = "";
  for (let i = 0; i < 6; i++) {
    randomColor += Math.round(Math.random() * 0xf).toString(16);
  }

  return "#" + randomColor;
}

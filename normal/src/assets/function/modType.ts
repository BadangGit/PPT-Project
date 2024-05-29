export function numberToPx(num: number) {
  let newPx: string = `${num}px`;

  return newPx;
}

export function numberToTime(num: number) {
  let newTime: string = `${num}s`;

  return newTime;
}

export function getLinearGradient(colors: string[]) {
  let newString = `linear-gradient(${colors[0]}, ${colors[1]})`;

  return newString;
}

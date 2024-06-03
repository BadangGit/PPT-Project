export function getNumberToPx(num: number) {
  let newPx: string = `${num}px`;

  return newPx;
}

export function getNumberToTime(num: number) {
  let newTime: string = `${num}s`;

  return newTime;
}

export function getLinearGradient(colors: string[]) {
  let newString = `linear-gradient(${colors[0]}, ${colors[1]})`;

  return newString;
}

export function getHexToHsl(color: string) {
  let hex = color.split("#");
  hex = [...hex[1]];

  let r = parseInt(hex[0] + hex[1], 16);
  let g = parseInt(hex[2] + hex[3], 16);
  let b = parseInt(hex[4] + hex[5], 16);

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let deg = max - min;

  let h = 0;
  let l = 0;
  let s = 0;

  if (deg == 0) h = 0;
  else if (max == r) h = ((g - b) / deg) % 6;
  else if (max == g) h = (b - r) / deg + 2;
  else h = (r - g) / deg + 4;

  h = Math.round(h * 60);

  l = (max + min) / 2;
  s = deg == 0 ? 0 : deg / (1 - Math.abs(2 * l - 1));

  return { h, s, l };
}

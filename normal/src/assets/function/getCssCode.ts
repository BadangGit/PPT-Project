export function getLinearGradient(colors: string[]) {
  let newString = `linear-gradient(${colors[0]}, ${colors[1]})`;

  return newString;
}

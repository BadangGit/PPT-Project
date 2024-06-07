import { getRandomPos } from "@/assets/function/getRandomData";
import { dots } from "@/assets/data/types/stainedGlass";

export function getFigure() {
  let isFigureSquare = Math.random() < 0.5 ? true : false;
  let dotPos;

  if (isFigureSquare) {
    dotPos = generateDots(4).pos;
  } else {
    dotPos = generateDots(3).pos;
  }

  return { dotPos, isFigureSquare };
}

export function generateDots(count: number) {
  let pos: dots[] = [];
  let distance: Array<number> = [0, 0];
  let firstDot = {
    left: 0,
    top: 0,
  };

  firstDot = getRandomPos(window.innerWidth, window.innerHeight);

  const maxDistance = Math.floor(Math.random() * 200);
  const minDistance = 100;

  for (let i = 0; i < count; i++) {
    let newDots = {
      left: 0,
      top: 0,
    };

    for (let j = 0; j < 2; j++) {
      distance[j] = Math.floor(Math.random() * maxDistance + minDistance);
    }

    if (Math.random() < 0.5) {
      firstDot.left -= distance[0];
      firstDot.top -= distance[1];
    } else {
      firstDot.left += distance[0];
      firstDot.top += distance[1];
    }

    newDots.left = firstDot.left;
    newDots.top = firstDot.top;

    pos.push(newDots);
  }

  return { pos };
}

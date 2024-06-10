import { ref } from "vue";

const CARD_HEIGHT: number = 380;
const CARD_Width: number = 380;
const posToDurationRatio: number = 100;

export function modPosToDuration(pos: number) {
  let duration = 0;
  if (pos <= CARD_Width) {
    duration = pos / posToDurationRatio;
  } else {
    pos = 2 * CARD_Width - pos;
    duration = pos / posToDurationRatio;
  }

  return duration;
}

export function modStarAnimationPos(randomPos: number) {
  let upperSideLength = CARD_Width;

  let position = ref({
    initTop: 0,
    initLeft: 0,

    lastTop: 0,
    lastLeft: 0,
  });

  if (randomPos < upperSideLength) {
    position.value.initLeft = randomPos;
    position.value.initTop = 0;

    position.value.lastLeft = 0;
    position.value.lastTop = randomPos;
  } else {
    position.value.initLeft = CARD_Width;
    position.value.initTop = randomPos - CARD_Width;

    position.value.lastLeft = randomPos - CARD_Width;
    position.value.lastTop = CARD_HEIGHT;
  }

  return position;
}

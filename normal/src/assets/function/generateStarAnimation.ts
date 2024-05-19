import { ref } from "vue";

const cardHeight: number = 380;
const cardWidth: number = 380;
const posToDurationRatio: number = 100;

function modPosToDuration(pos: number) {
  let duration = 0;
  if (pos <= cardWidth) {
    duration = pos / posToDurationRatio;
  } else {
    pos = 2 * cardWidth - pos;
    duration = pos / posToDurationRatio;
  }

  return duration;
}

function modStarAnimationPos(randomPos: number) {
  let upperSideLength = cardWidth;

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
    position.value.initLeft = cardWidth;
    position.value.initTop = randomPos - cardWidth;

    position.value.lastLeft = randomPos - cardWidth;
    position.value.lastTop = cardHeight;
  }

  return position;
}

export { modPosToDuration, modStarAnimationPos };

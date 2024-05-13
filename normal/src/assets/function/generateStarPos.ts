const cardHeight: number = 380;
const cardWidth: number = 380;

const posToDurationRatio: number = 60;

function changePosToAnimationDuration(pos: number) {
  let duration = 0;
  if (pos <= cardWidth) {
    duration = pos / posToDurationRatio;
  } else {
    pos = 2 * cardWidth - pos;

    duration = pos / posToDurationRatio;
  }

  return duration;
}

function generateStarAnimationPos(randomPos: number) {
  let upperSideLength = cardWidth;

  let position = {
    init_top: 0,
    init_left: 0,
    last_top: 0,
    last_left: 0,
  };

  if (randomPos < upperSideLength) {
    position.init_left = randomPos;
    position.init_top = 0;

    position.last_left = 0;
    position.last_top = randomPos;
  } else {
    position.init_left = cardWidth;
    position.init_top = randomPos - cardWidth;

    position.last_left = randomPos - cardWidth;
    position.last_top = cardHeight;
  }

  return position;
}

export { changePosToAnimationDuration, generateStarAnimationPos };

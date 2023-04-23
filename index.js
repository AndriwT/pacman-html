//create and render maze - DONE
//maze hit detection - DONE
//dots
//score
//pacMan lives
//ghost
//fruit
//when eat fruit, can eat ghost

class PacMan {
  x = 180;
  y = 280;
  height = 20;
  width = 20;
}

let pacMan = new PacMan();

let xDirection = 0;
let yDirection = 0;

let SPEED = 10;

let wallSize = 20;
let dotSpace = 20;

// ------------------------- WALL POSITIONS
let wallPositions = [
  { x: 0, y: 0 },
  { x: wallSize, y: 0 },
  { x: wallSize * 2, y: 0 },
  { x: wallSize * 3, y: 0 },
  { x: wallSize * 4, y: 0 },
  { x: wallSize * 5, y: 0 },
  { x: wallSize * 6, y: 0 },
  { x: wallSize * 7, y: 0 },
  { x: wallSize * 8, y: 0 },
  { x: wallSize * 9, y: 0 },
  { x: wallSize * 9, y: wallSize },
  { x: wallSize * 9, y: wallSize * 2 },
  { x: wallSize * 9, y: wallSize * 3 },
  { x: wallSize * 10, y: wallSize },
  { x: wallSize * 10, y: wallSize * 2 },
  { x: wallSize * 10, y: wallSize * 3 },
  { x: wallSize * 10, y: 0 },
  { x: wallSize * 11, y: 0 },
  { x: wallSize * 12, y: 0 },
  { x: wallSize * 13, y: 0 },
  { x: wallSize * 14, y: 0 },
  { x: wallSize * 15, y: 0 },
  { x: wallSize * 16, y: 0 },
  { x: wallSize * 17, y: 0 },
  { x: wallSize * 18, y: 0 },
  { x: wallSize * 19, y: 0 },

  { x: 0, y: 0 },
  { x: wallSize, y: wallSize * 19 },
  { x: wallSize * 2, y: wallSize * 19 },
  { x: wallSize * 3, y: wallSize * 19 },
  { x: wallSize * 4, y: wallSize * 19 },
  { x: wallSize * 5, y: wallSize * 19 },
  { x: wallSize * 6, y: wallSize * 19 },
  { x: wallSize * 7, y: wallSize * 19 },
  { x: wallSize * 8, y: wallSize * 19 },
  { x: wallSize * 9, y: wallSize * 19 },
  { x: wallSize * 10, y: wallSize * 19 },
  { x: wallSize * 11, y: wallSize * 19 },
  { x: wallSize * 12, y: wallSize * 19 },
  { x: wallSize * 13, y: wallSize * 19 },
  { x: wallSize * 14, y: wallSize * 19 },
  { x: wallSize * 15, y: wallSize * 19 },
  { x: wallSize * 16, y: wallSize * 19 },
  { x: wallSize * 17, y: wallSize * 19 },
  { x: wallSize * 18, y: wallSize * 19 },
  { x: wallSize * 19, y: wallSize * 19 },

  { x: wallSize * 19, y: wallSize },
  { x: wallSize * 19, y: wallSize * 2 },
  { x: wallSize * 19, y: wallSize * 3 },
  { x: wallSize * 19, y: wallSize * 4 },
  { x: wallSize * 19, y: wallSize * 5 },
  { x: wallSize * 19, y: wallSize * 6 },
  { x: wallSize * 19, y: wallSize * 7 },
  { x: wallSize * 18, y: wallSize * 7 },
  { x: wallSize * 17, y: wallSize * 7 },
  { x: wallSize * 16, y: wallSize * 7 },
  { x: wallSize * 19, y: wallSize * 8 },
  { x: wallSize * 18, y: wallSize * 8 },
  { x: wallSize * 17, y: wallSize * 8 },
  { x: wallSize * 16, y: wallSize * 8 },
  { x: wallSize * 19, y: wallSize * 10 },
  { x: wallSize * 18, y: wallSize * 10 },
  { x: wallSize * 17, y: wallSize * 10 },
  { x: wallSize * 16, y: wallSize * 10 },
  { x: wallSize * 19, y: wallSize * 11 },
  { x: wallSize * 18, y: wallSize * 11 },
  { x: wallSize * 17, y: wallSize * 11 },
  { x: wallSize * 16, y: wallSize * 11 },
  { x: wallSize * 19, y: wallSize * 12 },
  { x: wallSize * 19, y: wallSize * 13 },
  { x: wallSize * 19, y: wallSize * 14 },
  { x: wallSize * 19, y: wallSize * 15 },
  { x: wallSize * 19, y: wallSize * 16 },
  { x: wallSize * 19, y: wallSize * 17 },
  { x: wallSize * 19, y: wallSize * 18 },
  { x: wallSize * 19, y: wallSize * 19 },

  { x: 0, y: wallSize },
  { x: 0, y: wallSize * 2 },
  { x: 0, y: wallSize * 3 },
  { x: 0, y: wallSize * 4 },
  { x: 0, y: wallSize * 5 },
  { x: 0, y: wallSize * 6 },
  { x: 0, y: wallSize * 7 },
  { x: wallSize, y: wallSize * 7 },
  { x: wallSize * 2, y: wallSize * 7 },
  { x: wallSize * 3, y: wallSize * 7 },
  { x: wallSize, y: wallSize * 8 },
  { x: wallSize * 2, y: wallSize * 8 },
  { x: wallSize * 3, y: wallSize * 8 },
  { x: 0, y: wallSize * 8 },
  { x: 0, y: wallSize * 10 },
  { x: wallSize, y: wallSize * 10 },
  { x: wallSize * 2, y: wallSize * 10 },
  { x: wallSize * 3, y: wallSize * 10 },
  { x: 0, y: wallSize * 11 },
  { x: 0, y: wallSize * 11 },
  { x: wallSize, y: wallSize * 11 },
  { x: wallSize * 2, y: wallSize * 11 },
  { x: wallSize * 3, y: wallSize * 11 },
  { x: 0, y: wallSize * 12 },
  { x: 0, y: wallSize * 13 },
  { x: 0, y: wallSize * 14 },
  { x: 0, y: wallSize * 15 },
  { x: 0, y: wallSize * 16 },
  { x: 0, y: wallSize * 17 },
  { x: 0, y: wallSize * 18 },
  { x: 0, y: wallSize * 19 },

  { x: wallSize * 2, y: wallSize * 2 },
  { x: wallSize * 3, y: wallSize * 2 },
  { x: wallSize * 2, y: wallSize * 3 },
  { x: wallSize * 3, y: wallSize * 3 },

  { x: wallSize * 16, y: wallSize * 2 },
  { x: wallSize * 17, y: wallSize * 2 },
  { x: wallSize * 16, y: wallSize * 3 },
  { x: wallSize * 17, y: wallSize * 3 },

  { x: wallSize * 2, y: wallSize * 5 },
  { x: wallSize * 3, y: wallSize * 5 },

  { x: wallSize * 16, y: wallSize * 5 },
  { x: wallSize * 17, y: wallSize * 5 },

  { x: wallSize * 5, y: wallSize * 2 },
  { x: wallSize * 6, y: wallSize * 2 },
  { x: wallSize * 7, y: wallSize * 2 },
  { x: wallSize * 7, y: wallSize * 3 },

  { x: wallSize * 14, y: wallSize * 2 },
  { x: wallSize * 13, y: wallSize * 2 },
  { x: wallSize * 12, y: wallSize * 2 },
  { x: wallSize * 12, y: wallSize * 3 },

  { x: wallSize * 5, y: wallSize * 4 },
  { x: wallSize * 5, y: wallSize * 5 },
  { x: wallSize * 6, y: wallSize * 5 },
  { x: wallSize * 7, y: wallSize * 5 },
  { x: wallSize * 5, y: wallSize * 6 },
  { x: wallSize * 5, y: wallSize * 7 },
  { x: wallSize * 5, y: wallSize * 8 },

  { x: wallSize * 9, y: wallSize * 5 },
  { x: wallSize * 10, y: wallSize * 5 },

  { x: wallSize * 14, y: wallSize * 4 },
  { x: wallSize * 14, y: wallSize * 5 },
  { x: wallSize * 13, y: wallSize * 5 },
  { x: wallSize * 12, y: wallSize * 5 },
  { x: wallSize * 14, y: wallSize * 6 },
  { x: wallSize * 14, y: wallSize * 7 },
  { x: wallSize * 14, y: wallSize * 8 },

  { x: wallSize * 5, y: wallSize * 11 },
  { x: wallSize * 5, y: wallSize * 10 },

  { x: wallSize * 7, y: wallSize * 11 },
  { x: wallSize * 8, y: wallSize * 11 },
  { x: wallSize * 9, y: wallSize * 11 },
  { x: wallSize * 9, y: wallSize * 12 },
  { x: wallSize * 9, y: wallSize * 13 },
  { x: wallSize * 10, y: wallSize * 12 },
  { x: wallSize * 10, y: wallSize * 13 },
  { x: wallSize * 10, y: wallSize * 11 },
  { x: wallSize * 11, y: wallSize * 11 },
  { x: wallSize * 12, y: wallSize * 11 },

  { x: wallSize * 7, y: wallSize * 15 },
  { x: wallSize * 8, y: wallSize * 15 },
  { x: wallSize * 9, y: wallSize * 15 },
  { x: wallSize * 9, y: wallSize * 16 },
  { x: wallSize * 9, y: wallSize * 17 },
  { x: wallSize * 10, y: wallSize * 16 },
  { x: wallSize * 10, y: wallSize * 17 },
  { x: wallSize * 10, y: wallSize * 15 },
  { x: wallSize * 11, y: wallSize * 15 },
  { x: wallSize * 12, y: wallSize * 15 },

  { x: wallSize * 7, y: wallSize * 17 },
  { x: wallSize * 6, y: wallSize * 17 },
  { x: wallSize * 5, y: wallSize * 17 },
  { x: wallSize * 5, y: wallSize * 16 },
  { x: wallSize * 5, y: wallSize * 15 },
  { x: wallSize * 4, y: wallSize * 17 },
  { x: wallSize * 3, y: wallSize * 17 },
  { x: wallSize * 2, y: wallSize * 17 },

  { x: wallSize * 12, y: wallSize * 17 },
  { x: wallSize * 13, y: wallSize * 17 },
  { x: wallSize * 14, y: wallSize * 17 },
  { x: wallSize * 14, y: wallSize * 16 },
  { x: wallSize * 14, y: wallSize * 15 },
  { x: wallSize * 15, y: wallSize * 17 },
  { x: wallSize * 16, y: wallSize * 17 },
  { x: wallSize * 17, y: wallSize * 17 },

  { x: wallSize * 7, y: wallSize * 7 },
  { x: wallSize * 7, y: wallSize * 8 },
  { x: wallSize * 7, y: wallSize * 9 },
  { x: wallSize * 8, y: wallSize * 9 },
  { x: wallSize * 8, y: wallSize * 7 },
  { x: wallSize * 9, y: wallSize * 9 },
  { x: wallSize * 10, y: wallSize * 9 },
  { x: wallSize * 11, y: wallSize * 7 },
  { x: wallSize * 11, y: wallSize * 9 },
  { x: wallSize * 12, y: wallSize * 9 },
  { x: wallSize * 12, y: wallSize * 8 },
  { x: wallSize * 12, y: wallSize * 7 },

  { x: wallSize, y: wallSize * 15 },

  { x: wallSize * 18, y: wallSize * 15 },

  { x: wallSize * 5, y: wallSize * 13 },
  { x: wallSize * 6, y: wallSize * 13 },
  { x: wallSize * 7, y: wallSize * 13 },

  { x: wallSize * 12, y: wallSize * 13 },
  { x: wallSize * 13, y: wallSize * 13 },
  { x: wallSize * 14, y: wallSize * 13 },

  { x: wallSize * 3, y: wallSize * 15 },
  { x: wallSize * 3, y: wallSize * 14 },
  { x: wallSize * 3, y: wallSize * 13 },
  { x: wallSize * 2, y: wallSize * 13 },

  { x: wallSize * 16, y: wallSize * 15 },
  { x: wallSize * 16, y: wallSize * 14 },
  { x: wallSize * 16, y: wallSize * 13 },
  { x: wallSize * 17, y: wallSize * 13 },

  { x: wallSize * 14, y: wallSize * 11 },
  { x: wallSize * 14, y: wallSize * 10 },
];
// ------------------------- DOT POSITIONS
let dotPositions = [
  { x: dotSpace, y: dotSpace },
  { x: dotSpace * 2, y: dotSpace },
  { x: dotSpace * 3, y: dotSpace },
  { x: dotSpace * 4, y: dotSpace },
  { x: dotSpace * 5, y: dotSpace },
  { x: dotSpace * 6, y: dotSpace },
  { x: dotSpace * 7, y: dotSpace },
  { x: dotSpace * 8, y: dotSpace },
  { x: dotSpace * 11, y: dotSpace },
  { x: dotSpace * 12, y: dotSpace },
  { x: dotSpace * 13, y: dotSpace },
  { x: dotSpace * 14, y: dotSpace },
  { x: dotSpace * 15, y: dotSpace },
  { x: dotSpace * 16, y: dotSpace },
  { x: dotSpace * 17, y: dotSpace },
  { x: dotSpace * 18, y: dotSpace },
  { x: dotSpace * 18, y: dotSpace * 2 },
  { x: dotSpace * 1, y: dotSpace * 2 },
  { x: dotSpace * 4, y: dotSpace * 2 },
  { x: dotSpace * 8, y: dotSpace * 2 },
  { x: dotSpace * 11, y: dotSpace * 2 },
  { x: dotSpace * 15, y: dotSpace * 2 },
  { x: dotSpace * 1, y: dotSpace * 3 },
  { x: dotSpace * 4, y: dotSpace * 3 },
  { x: dotSpace * 5, y: dotSpace * 3 },
  { x: dotSpace * 6, y: dotSpace * 3 },
  { x: dotSpace * 8, y: dotSpace * 3 },
  { x: dotSpace * 11, y: dotSpace * 3 },
  { x: dotSpace * 13, y: dotSpace * 3 },
  { x: dotSpace * 14, y: dotSpace * 3 },
  { x: dotSpace * 15, y: dotSpace * 3 },
  { x: dotSpace * 18, y: dotSpace * 3 },
  { x: dotSpace * 1, y: dotSpace * 4 },
  { x: dotSpace * 2, y: dotSpace * 4 },
  { x: dotSpace * 3, y: dotSpace * 4 },
  { x: dotSpace * 4, y: dotSpace * 4 },
  { x: dotSpace * 6, y: dotSpace * 4 },
  { x: dotSpace * 7, y: dotSpace * 4 },
  { x: dotSpace * 8, y: dotSpace * 4 },
  { x: dotSpace * 9, y: dotSpace * 4 },
  { x: dotSpace * 10, y: dotSpace * 4 },
  { x: dotSpace * 11, y: dotSpace * 4 },
  { x: dotSpace * 12, y: dotSpace * 4 },
  { x: dotSpace * 13, y: dotSpace * 4 },
  { x: dotSpace * 15, y: dotSpace * 4 },
  { x: dotSpace * 16, y: dotSpace * 4 },
  { x: dotSpace * 17, y: dotSpace * 4 },
  { x: dotSpace * 18, y: dotSpace * 4 },
  { x: dotSpace * 1, y: dotSpace * 5 },
  { x: dotSpace * 4, y: dotSpace * 5 },
  { x: dotSpace * 8, y: dotSpace * 5 },
  { x: dotSpace * 11, y: dotSpace * 5 },
  { x: dotSpace * 15, y: dotSpace * 5 },
  { x: dotSpace * 18, y: dotSpace * 5 },
  { x: dotSpace * 1, y: dotSpace * 6 },
  { x: dotSpace * 2, y: dotSpace * 6 },
  { x: dotSpace * 3, y: dotSpace * 6 },
  { x: dotSpace * 4, y: dotSpace * 6 },
  { x: dotSpace * 6, y: dotSpace * 6 },
  { x: dotSpace * 7, y: dotSpace * 6 },
  { x: dotSpace * 8, y: dotSpace * 6 },
  { x: dotSpace * 9, y: dotSpace * 6 },
  { x: dotSpace * 10, y: dotSpace * 6 },
  { x: dotSpace * 11, y: dotSpace * 6 },
  { x: dotSpace * 12, y: dotSpace * 6 },
  { x: dotSpace * 13, y: dotSpace * 6 },
  { x: dotSpace * 15, y: dotSpace * 6 },
  { x: dotSpace * 16, y: dotSpace * 6 },
  { x: dotSpace * 17, y: dotSpace * 6 },
  { x: dotSpace * 18, y: dotSpace * 6 },
  { x: dotSpace * 4, y: dotSpace * 7 },
  { x: dotSpace * 6, y: dotSpace * 7 },
  { x: dotSpace * 9, y: dotSpace * 7 },
  { x: dotSpace * 10, y: dotSpace * 7 },
  { x: dotSpace * 13, y: dotSpace * 7 },
  { x: dotSpace * 15, y: dotSpace * 7 },
  { x: dotSpace * 4, y: dotSpace * 8 },
  { x: dotSpace * 6, y: dotSpace * 8 },
  { x: dotSpace * 8, y: dotSpace * 8 },
  { x: dotSpace * 9, y: dotSpace * 8 },
  { x: dotSpace * 10, y: dotSpace * 8 },
  { x: dotSpace * 11, y: dotSpace * 8 },
  { x: dotSpace * 13, y: dotSpace * 8 },
  { x: dotSpace * 15, y: dotSpace * 8 },
  { x: dotSpace * 4, y: dotSpace * 9 },
  { x: dotSpace * 5, y: dotSpace * 9 },
  { x: dotSpace * 6, y: dotSpace * 9 },
  { x: dotSpace * 13, y: dotSpace * 9 },
  { x: dotSpace * 14, y: dotSpace * 9 },
  { x: dotSpace * 15, y: dotSpace * 9 },
  { x: dotSpace * 4, y: dotSpace * 10 },
  { x: dotSpace * 6, y: dotSpace * 10 },
  { x: dotSpace * 7, y: dotSpace * 10 },
  { x: dotSpace * 8, y: dotSpace * 10 },
  { x: dotSpace * 9, y: dotSpace * 10 },
  { x: dotSpace * 10, y: dotSpace * 10 },
  { x: dotSpace * 11, y: dotSpace * 10 },
  { x: dotSpace * 12, y: dotSpace * 10 },
  { x: dotSpace * 13, y: dotSpace * 10 },
  { x: dotSpace * 15, y: dotSpace * 10 },
  { x: dotSpace * 4, y: dotSpace * 11 },
  { x: dotSpace * 6, y: dotSpace * 11 },
  { x: dotSpace * 13, y: dotSpace * 11 },
  { x: dotSpace * 15, y: dotSpace * 11 },
  { x: dotSpace * 1, y: dotSpace * 12 },
  { x: dotSpace * 2, y: dotSpace * 12 },
  { x: dotSpace * 3, y: dotSpace * 12 },
  { x: dotSpace * 4, y: dotSpace * 12 },
  { x: dotSpace * 5, y: dotSpace * 12 },
  { x: dotSpace * 6, y: dotSpace * 12 },
  { x: dotSpace * 7, y: dotSpace * 12 },
  { x: dotSpace * 8, y: dotSpace * 12 },
  { x: dotSpace * 11, y: dotSpace * 12 },
  { x: dotSpace * 12, y: dotSpace * 12 },
  { x: dotSpace * 13, y: dotSpace * 12 },
  { x: dotSpace * 14, y: dotSpace * 12 },
  { x: dotSpace * 15, y: dotSpace * 12 },
  { x: dotSpace * 16, y: dotSpace * 12 },
  { x: dotSpace * 17, y: dotSpace * 12 },
  { x: dotSpace * 18, y: dotSpace * 12 },
  { x: dotSpace * 1, y: dotSpace * 13 },
  { x: dotSpace * 4, y: dotSpace * 13 },
  { x: dotSpace * 8, y: dotSpace * 13 },
  { x: dotSpace * 11, y: dotSpace * 13 },
  { x: dotSpace * 15, y: dotSpace * 13 },
  { x: dotSpace * 18, y: dotSpace * 13 },
  { x: dotSpace * 1, y: dotSpace * 14 },
  { x: dotSpace * 2, y: dotSpace * 14 },
  { x: dotSpace * 4, y: dotSpace * 14 },
  { x: dotSpace * 5, y: dotSpace * 14 },
  { x: dotSpace * 6, y: dotSpace * 14 },
  { x: dotSpace * 7, y: dotSpace * 14 },
  { x: dotSpace * 8, y: dotSpace * 14 },
  { x: dotSpace * 11, y: dotSpace * 14 },
  { x: dotSpace * 12, y: dotSpace * 14 },
  { x: dotSpace * 13, y: dotSpace * 14 },
  { x: dotSpace * 14, y: dotSpace * 14 },
  { x: dotSpace * 15, y: dotSpace * 14 },
  { x: dotSpace * 17, y: dotSpace * 14 },
  { x: dotSpace * 18, y: dotSpace * 14 },
  { x: dotSpace * 2, y: dotSpace * 15 },
  { x: dotSpace * 4, y: dotSpace * 15 },
  { x: dotSpace * 6, y: dotSpace * 15 },
  { x: dotSpace * 13, y: dotSpace * 15 },
  { x: dotSpace * 15, y: dotSpace * 15 },
  { x: dotSpace * 17, y: dotSpace * 15 },
  { x: dotSpace * 1, y: dotSpace * 16 },
  { x: dotSpace * 2, y: dotSpace * 16 },
  { x: dotSpace * 3, y: dotSpace * 16 },
  { x: dotSpace * 4, y: dotSpace * 16 },
  { x: dotSpace * 6, y: dotSpace * 16 },
  { x: dotSpace * 7, y: dotSpace * 16 },
  { x: dotSpace * 8, y: dotSpace * 16 },
  { x: dotSpace * 11, y: dotSpace * 16 },
  { x: dotSpace * 12, y: dotSpace * 16 },
  { x: dotSpace * 13, y: dotSpace * 16 },
  { x: dotSpace * 15, y: dotSpace * 16 },
  { x: dotSpace * 16, y: dotSpace * 16 },
  { x: dotSpace * 17, y: dotSpace * 16 },
  { x: dotSpace * 18, y: dotSpace * 16 },
  { x: dotSpace * 1, y: dotSpace * 17 },
  { x: dotSpace * 8, y: dotSpace * 17 },
  { x: dotSpace * 11, y: dotSpace * 17 },
  { x: dotSpace * 18, y: dotSpace * 17 },
  { x: dotSpace * 1, y: dotSpace * 18 },
  { x: dotSpace * 2, y: dotSpace * 18 },
  { x: dotSpace * 3, y: dotSpace * 18 },
  { x: dotSpace * 4, y: dotSpace * 18 },
  { x: dotSpace * 5, y: dotSpace * 18 },
  { x: dotSpace * 6, y: dotSpace * 18 },
  { x: dotSpace * 7, y: dotSpace * 18 },
  { x: dotSpace * 8, y: dotSpace * 18 },
  { x: dotSpace * 9, y: dotSpace * 18 },
  { x: dotSpace * 10, y: dotSpace * 18 },
  { x: dotSpace * 11, y: dotSpace * 18 },
  { x: dotSpace * 12, y: dotSpace * 18 },
  { x: dotSpace * 13, y: dotSpace * 18 },
  { x: dotSpace * 14, y: dotSpace * 18 },
  { x: dotSpace * 15, y: dotSpace * 18 },
  { x: dotSpace * 16, y: dotSpace * 18 },
  { x: dotSpace * 17, y: dotSpace * 18 },
  { x: dotSpace * 18, y: dotSpace * 18 },

  //DOT FOR TESTING ----------------
  { x: 200, y: 280 },
];

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

function createPacManElement() {
  const el = document.createElement("div");
  el.style.height = pacMan.height + "px";
  el.style.width = pacMan.width + "px";
  el.style.backgroundColor = "yellow";
  el.style.position = "absolute";
  el.style.left = pacMan.x + "px";
  el.style.top = pacMan.y + "px";
  el.style.border = "0px solid white";
  el.style.borderRadius = "50%";
  return el;
}

function boundHitDetection(gameContainer) {
  if (pacMan.x + pacMan.width > gameContainer.clientWidth) {
    pacMan.x = 0;
  }

  if (pacMan.x < 0) {
    pacMan.x = gameContainer.clientWidth - pacMan.width;
  }

  if (pacMan.y + pacMan.height > gameContainer.clientHeight) {
    pacMan.y = gameContainer.clientHeight - pacMan.height;
  }

  if (pacMan.y < 0) {
    pacMan.y = 0;
  }
}

function hitDetectionDifferent() {
  for (const wallPosition of wallPositions) {
    const rightSideInside =
      pacMan.x + pacMan.width > wallPosition.x &&
      pacMan.x + pacMan.width <= wallPosition.x + wallSize;

    const bottomSideInside =
      pacMan.y + pacMan.height > wallPosition.y &&
      pacMan.y + pacMan.height <= wallPosition.y + wallSize;

    const leftSideInside =
      pacMan.x > wallPosition.x && pacMan.x < wallPosition.x + wallSize;

    const topSideInside =
      pacMan.y > wallPosition.y && pacMan.y < wallPosition.y + wallSize;

    if (
      (rightSideInside && bottomSideInside) ||
      (rightSideInside && topSideInside) ||
      (leftSideInside && bottomSideInside) ||
      (leftSideInside && topSideInside)
    ) {
      console.log(
        "COLLIDING",
        rightSideInside,
        leftSideInside,
        bottomSideInside,
        topSideInside
      );
      // COLLIDE
      if (xDirection === 1) {
        console.log("collided to the right");
        pacMan.x = wallPosition.x - pacMan.width;
      } else if (xDirection === -1) {
        console.log("collided to the left");
        pacMan.x = wallPosition.x + wallSize;
      } else if (yDirection === 1) {
        console.log("collided at the top");
        pacMan.y = wallPosition.y - pacMan.height;
      } else if (yDirection === -1) {
        console.log("collided at the bottom");
        pacMan.y = wallPosition.y + wallSize;
      }

      xDirection = 0;
      yDirection = 0;
    }
  }
}

function dotHitDetection() {
  for (let i = 0; i < dotPositions.length; i++) {
    const rightSideInside =
      pacMan.x + pacMan.width > dotPositions[i].x &&
      pacMan.x + pacMan.width <= dotPositions[i].x + dotSpace;

    const bottomSideInside =
      pacMan.y + pacMan.height > dotPositions[i].y &&
      pacMan.y + pacMan.height <= dotPositions[i].y + dotSpace;

    const leftSideInside =
      pacMan.x > dotPositions[i].x && pacMan.x < dotPositions[i].x + dotSpace;

    const topSideInside =
      pacMan.y > dotPositions[i].y && pacMan.y < dotPositions[i].y + dotSpace;

    if (
      (rightSideInside && bottomSideInside) ||
      (rightSideInside && topSideInside) ||
      (leftSideInside && bottomSideInside) ||
      (leftSideInside && topSideInside)
    ) {
      console.log(
        "COLLIDING",
        rightSideInside,
        leftSideInside,
        bottomSideInside,
        topSideInside
      );
      deleteDot(i);
      // dotPositions[i].x = 0;
      // dotPositions[i].y = 0;
      // COLLIDE
      // if (xDirection === 1) {
      //   console.log("collided to the right");
      //   pacMan.x = wallPosition.x - pacMan.width;
      // } else if (xDirection === -1) {
      //   console.log("collided to the left");
      //   pacMan.x = wallPosition.x + wallSize;
      // } else if (yDirection === 1) {
      //   console.log("collided at the top");
      //   pacMan.y = wallPosition.y - pacMan.height;
      // } else if (yDirection === -1) {
      //   console.log("collided at the bottom");
      //   pacMan.y = wallPosition.y + wallSize;
      // }

      // xDirection = 0;
      // yDirection = 0;
    }
  }
}

function deleteDot(idx) {
  console.log("deleteDot fired!");
  const el = document.querySelector("#dot-" + idx);
  if (el) {
    el.remove();
  }
}

// WALL HIT DETECTION OLD - Works but above attempt is better
// function comparePositions(edges1, edges2) {
//   let edgesLeft, edgesRight;
//   edgesLeft = edges1[0] < edges2[0] ? edges1 : edges2;
//   edgesRight = edges1[0] < edges2[0] ? edges2 : edges1;
//   return edgesLeft[1] > edgesRight[0] || edgesLeft[0] === edgesRight[0];
// }

// function wallHitDetection() {
//   // let pacManLeft = pacMan.x;
//   // let pacManRight = pacMan.x + pacMan.width;
//   // let pacManTop = pacMan.y;
//   // let pacManBottom = pacMan.y + pacMan.height;

//   for (let i = 0; i < wallPositions.length; i++) {
//     // let wallLeft = wallPositions[i].x;
//     // let wallRight = wallPositions[i].x + wallSize;
//     // let wallTop = wallPositions[i].y;
//     // let wallBottom = wallPositions[i].y + wallSize;

//     if (
//       comparePositions([pacManLeft, pacManRight], [wallLeft, wallRight]) &&
//       comparePositions([pacManTop, pacManBottom], [wallTop, wallBottom])
//     ) {
//       if (xDirection === 1) {
//         console.log("collided to the right");
//         pacMan.x = wallPositions[i].x - pacMan.width;
//       } else if (xDirection === -1) {
//         console.log("collided to the left");
//         pacMan.x = wallPositions[i].x + wallSize;
//       } else if (yDirection === 1) {
//         console.log("collided at the top");
//         pacMan.y = wallPositions[i].y - pacMan.height;
//       } else if (yDirection === -1) {
//         console.log("collided at the bottom");
//         pacMan.y = wallPositions[i].y + wallSize;
//       }

//       xDirection = 0;
//       yDirection = 0;
//     }
//   }
// }

function createMaze(gameContainer) {
  for (let i = 0; i < wallPositions.length; i++) {
    const el = document.createElement("div");
    el.style.position = "absolute";
    el.style.top = wallPositions[i].y + "px";
    el.style.left = wallPositions[i].x + "px";
    el.style.height = wallSize + "px";
    el.style.width = wallSize + "px";
    el.style.backgroundColor = "#3C2DDF";
    el.style.margin = "0";
    gameContainer.appendChild(el);
  }
}

function createDots(gameContainer) {
  for (let i = 0; i < dotPositions.length; i++) {
    const el = document.createElement("div");
    el.style.position = "absolute";
    el.style.top = dotPositions[i].y + 7 + "px";
    el.style.left = dotPositions[i].x + 7 + "px";
    el.style.height = "5px";
    el.style.width = "5px";
    el.style.margin = "0";
    el.style.backgroundColor = "orange";
    el.style.border = "0px solid black;";
    el.style.borderRadius = "2.5px";
    el.id = "dot-" + i;
    gameContainer.appendChild(el);
  }
}

async function main() {
  const gameContainer = document.querySelector("#game");

  let pacManEl = createPacManElement();
  gameContainer.appendChild(pacManEl);

  createMaze(gameContainer);
  createDots(gameContainer);

  while (true) {
    pacMan.x += SPEED * xDirection;
    pacMan.y += SPEED * yDirection;

    boundHitDetection(gameContainer);
    hitDetectionDifferent();
    dotHitDetection(gameContainer);

    pacManEl.style.left = pacMan.x + "px";
    pacManEl.style.top = pacMan.y + "px";

    await sleep(50);
  }
}

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowRight":
      xDirection = 1;
      yDirection = 0;
      break;
    case "ArrowLeft":
      xDirection = -1;
      yDirection = 0;
      break;
    case "ArrowDown":
      yDirection = 1;
      xDirection = 0;
      break;
    case "ArrowUp":
      yDirection = -1;
      xDirection = 0;
      break;
    default:
      console.log("Unknown key pressed: ", event.key);
  }
});

main();

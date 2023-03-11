//create and render maze
//maze hit detection
//dots
//score
//pacMan lives
//ghost
//fruit
//when eat fruit, can eat ghost

class PacMan {
  x = 0;
  y = 60;
  height = 20;
  width = 20;
}

let pacMan = new PacMan();

let xDirection = 0;
let yDirection = 0;

let SPEED = 10;

let wallSize = 20;

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
  { x: wallSize * 19, y: wallSize },
  { x: wallSize * 19, y: wallSize * 2 },
  { x: wallSize * 19, y: wallSize * 3 },
  { x: wallSize * 19, y: wallSize * 4 },
  { x: wallSize * 19, y: wallSize * 5 },
  { x: wallSize * 19, y: wallSize * 6 },
  { x: wallSize * 5, y: 60 },
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
    pacMan.x = gameContainer.clientWidth - pacMan.width;
  }

  if (pacMan.x < 0) {
    pacMan.x = 0;
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

function comparePositions(edges1, edges2) {
  let edgesLeft, edgesRight;
  edgesLeft = edges1[0] < edges2[0] ? edges1 : edges2;
  edgesRight = edges1[0] < edges2[0] ? edges2 : edges1;
  return edgesLeft[1] > edgesRight[0] || edgesLeft[0] === edgesRight[0];
}

function wallHitDetection() {
  // let pacManLeft = pacMan.x;
  // let pacManRight = pacMan.x + pacMan.width;
  // let pacManTop = pacMan.y;
  // let pacManBottom = pacMan.y + pacMan.height;

  for (let i = 0; i < wallPositions.length; i++) {
    // let wallLeft = wallPositions[i].x;
    // let wallRight = wallPositions[i].x + wallSize;
    // let wallTop = wallPositions[i].y;
    // let wallBottom = wallPositions[i].y + wallSize;

    if (
      comparePositions([pacManLeft, pacManRight], [wallLeft, wallRight]) &&
      comparePositions([pacManTop, pacManBottom], [wallTop, wallBottom])
    ) {
      if (xDirection === 1) {
        console.log("collided to the right");
        pacMan.x = wallPositions[i].x - pacMan.width;
      } else if (xDirection === -1) {
        console.log("collided to the left");
        pacMan.x = wallPositions[i].x + wallSize;
      } else if (yDirection === 1) {
        console.log("collided at the top");
        pacMan.y = wallPositions[i].y - pacMan.height;
      } else if (yDirection === -1) {
        console.log("collided at the bottom");
        pacMan.y = wallPositions[i].y + wallSize;
      }

      xDirection = 0;
      yDirection = 0;
    }
  }
}

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

async function main() {
  const gameContainer = document.querySelector("#game");

  let pacManEl = createPacManElement();
  gameContainer.appendChild(pacManEl);

  createMaze(gameContainer);

  while (true) {
    pacMan.x += SPEED * xDirection;
    pacMan.y += SPEED * yDirection;

    boundHitDetection(gameContainer);
    hitDetectionDifferent();

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
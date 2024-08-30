// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

const body = [];
const back = [];
const exclaim = [];
const arms = [];

const bodyOutline = [];
const bodyEyes = [];
const bodyMouth = [];
const bodyCheecks = [];
const bodyBelly = [];

const bo = new bt.Turtle()

const turnMove = (turtle, direction, directionAngle, length) => {
  switch (direction) {
    case "left":
      turtle.left(directionAngle)
      break;
    case "right":
      turtle.right(directionAngle)
      break;
    default:
      return "no direction specified"
  }
  turtle.forward(length)
}

// const turnRight = (turtle, direction, length) =>  {
//   turtle.right(direction)
//   turtle.forward(length)
// }
// const turnLeft = (turtle, direction, length) =>  {
//   turtle.right(direction)
//   turtle.forward(length)
// }
const angleMove = (turtle, direction, length) =>  {
  turtle.setAngle(direction)
  turtle.forward(length)
}


bo.pos = [61, 93]
bo.up();
bo.down();

turnMove(bo, "right", 27, 19)
turnMove(bo, "right", 38, 22)
angleMove(bo, -90, 29)

bo.left(20)
bo.arc(73, 14)

bo.right(-67)
bo.arc(-70, -11)

turnMove(bo, "right", 181, 10)
turnMove(bo, "right", 400, 7)
turnMove(bo, "right", 230, 6)
turnMove(bo, "left", 270, 16)
turnMove(bo, "left", 287, 7)
turnMove(bo, "left", 143, 6)
turnMove(bo, "left", 288, 10)

bo.right(425)
bo.arc(-48, 56)

bo.right(271)
bo.arc(-88, 16)
bo.right(381)
bo.arc(-54, 25)

body.push(...bo.lines())

const final = [...body, ...back, ...exclaim, ...arms]
drawLines(final)

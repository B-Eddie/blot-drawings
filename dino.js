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
// const bodyEyes = [];
// const bodyMouth = [];
// const bodyCheecks = [];
const bodyFace = []
const bodyBack = [];
const bodyBelly = [];

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

const angleMove = (turtle, direction, length) =>  {
  turtle.setAngle(direction)
  turtle.forward(length)
}

const bo = new bt.Turtle()

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

const bb = new bt.Turtle()
bb.pos = [66, 91]
bb.up();
bb.down();
bb.right(269)
bb.arc(171, 9)

bb.pos = [82, 76]
bb.up();
bb.down();
bb.right(220)
bb.arc(181, 8)

bb.pos = [87, 55]
bb.up();
bb.down();
bb.right(213)
bb.arc(181, 8)

bb.pos = [87, 37]
bb.up();
bb.down();
bb.right(192)
bb.arc(181, 6)

bb.pos = [95, 27]
bb.up();
bb.down();
bb.right(133)
bb.arc(181, 5)


const be = new bt.Turtle()
be.pos = [47, 82]
be.up();
be.down();
be.right(127)
be.arc(360, 1.5)

be.pos = [65, 81.5]
be.up();
be.down();
be.right(127)
be.arc(360, 1.5)

bodyOutline.push(...bo.lines())
bodyBack.push(...bb.lines())
bodyFace.push(...be.lines())

body.push(...bodyOutline,  ...bodyBack, ...bodyFace)

const final = [...body, ...back, ...exclaim, ...arms]
drawLines(final)

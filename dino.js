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

// for (let i = 0; i<4; i++) {
//   be.pos = [65 - i, 81.5 - i]
//   be.up();
//   be.down();
//   be.right(127)
//   be.arc(360, 1.5 - i*0.1)
// }
be.pos = [61, 83.4]
be.up();
be.down();
turnMove(be, "left", 289, 4)

be.pos = [48.5, 85.5]
be.up();
be.down();
turnMove(be, "left", 286, 4)

be.pos = [47.4, 76.7]
be.up();
be.down();
turnMove(be, "left", 49, 4)

be.right(3)
be.arc(-65, 2.5)
be.right(-103)
be.arc(23, 3.0)
be.right(26)
be.arc(-65, 2.5)
be.right(44)
be.arc(20, 5.0)
be.right(-100)
be.arc(-71, 4.0)
be.right(0)
be.arc(-71, 4.0)
be.right(17)
be.arc(-71, 4.4)
be.right(-4)
be.arc(-45, 7.1)
be.right(-71)
be.arc(-45, 10.0)
be.right(10)
be.arc(-117, 3.6)

// belly
be.pos = [47.3, 48.3]
be.up();
be.down();
be.right(154)
be.arc(208, 12.2)
be.right(0)
be.arc(76, 14.4)
be.right(-16)
be.arc(65, 13.8)

be.pos = [56.0, 44.3]
be.up();
be.down();
turnMove(be, "left", 59, 4)
be.pos = [56.0, 41.8]
be.up();
be.down();
turnMove(be, "left", 92, 4)

const bl = new bt.Turtle()
// cheeks
bl.pos = [66, 76] 
bl.up()
bl.down()
bl.right(43)
bl.arc(105, 5)
turnMove(bl, "left", 38, 2)
bl.right(-40)
bl.arc(103, 5)
turnMove(bl, "left", 34, 2)

bl.pos = [35, 76] 
bl.up()
bl.down()
bl.right(-32)
bl.arc(100, 5)
turnMove(bl, "left", 36, 2)
bl.right(-40)
bl.arc(103, 5)
turnMove(bl, "left", 37, 2.1)


bodyOutline.push(...bo.lines())
bodyBack.push(...bb.lines())
bodyFace.push(...be.lines())
bodyBelly.push(...bl.lines())

body.push(...bodyOutline,  ...bodyBack, ...bodyFace, ...bodyBelly)

const final = [...body, ...back, ...exclaim, ...arms]
drawLines(final)

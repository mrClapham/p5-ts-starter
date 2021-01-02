import * as p5 from "p5";
import { create as createNode } from "./attractor-node";
const nodes = [];

export default (s: p5): void => {
  s.setup = () => {
    s.createCanvas(600, 600);
    for (let i = 0; i < 6; i++) {
      const origin = Math.random() * 100;
      const middle = s.createVector(s.width / 2, s.height / 2);
      const vec = p5.Vector.random2D().mult(origin).add(middle);
      nodes.push(createNode(vec, s));
    }
  };

  s.draw = () => {
    // s.clear()
    s.fill(255, 0, 255, 100);

    const mouse = s.createVector(s.mouseX, s.mouseY);
    nodes.forEach((n) => {
      //att1.applyForce(n)
      n.setDestination(mouse);
      //n.display()
    });
    // att1.display()
    //att2.display()
  };
};

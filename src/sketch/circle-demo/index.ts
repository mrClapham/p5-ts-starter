import { create } from "./particle-circ";
import * as p5 from "p5";

const particles = [];

export default (s: p5): void => {
  const { createVector } = s;
  s.setup = () => {
    const pVector = createVector(400, 500);
    for (let i = 0; i < 100; i++) {
      particles.push(create(pVector, s));
    }
    s.createCanvas(1000, 1000);
  };

  s.draw = () => {
    particles.forEach((element) => {
      element.display(s);
    });
  };
};

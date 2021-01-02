/* eslint-disable @typescript-eslint/no-unused-vars */
import p5 from "p5";
import circlesDemo from "./sketch/circle-demo";
import attractorsBasic from "./sketch/attractors-basic";
import attractorPerlin from "./sketch/attractor-perlin";

document.addEventListener("DOMContentLoaded", () => {
  const sketchInstance = new p5(circlesDemo, "circ");
  const attractorsInstance = new p5(attractorsBasic, "root");
  const { p5Sketch: attractorSketch, setColor } = attractorPerlin({
    width: 900,
    height: 600,
    gridX: 20,
    gridY: 20,
  });

  console.log("attractorSketch ---", attractorSketch);
  setTimeout(() => setColor([0, 255, 0]), 2000);

  const perlinInstance = new p5(attractorSketch, "attractors");
  //console.log("perlinInstance ", perlinInstance);
  //console.log("attractorSketch ", attractorSketch);
});

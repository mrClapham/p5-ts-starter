import * as p5 from "p5";
export interface IAttractorPerlin {
  p5Sketch: p5;
  setColor(color: number[]): void;
}

const defaultConfig = { width: 800, height: 800, gridX: 6, gridY: 4 };
export default (overrides = {}): IAttractorPerlin => {
  const config = { ...defaultConfig, ...overrides };
  const { width, height, gridX, gridY } = config;
  const gridXsize = width / gridX;
  const gridYsize = height / gridY;
  const gridPositions = [];
  let color = [255, 0, 0];

  const setColor = (c: number[]): void => {
    color = c;
  };

  const p5Sketch = (s: p5): void => {
    s.setup = () => {
      for (let i = 0; i < gridY; i++) {
        const _grid = [];
        for (let ii = 0; ii < gridX; ii++) {
          const vec = p5.Vector.random2D().mult(10);
          _grid.push({
            vec,
            x: gridXsize / 2 + gridXsize * ii,
            y: gridYsize / 2 + gridYsize * i,
          });
        }
        gridPositions.push(_grid);
      }
      s.createCanvas(width, height);
    };

    s.draw = () => {
      s.clear();
      gridPositions.forEach((e, i) => {
        e.forEach((ee, ii: number) => {
          s.push();
          s.fill(color, i * ii * 20);
          s.translate(ee.x, ee.y);
          s.line(0, 0, ee.vec.x, ee.vec.y);
          s.circle(0, 0, 6);
          s.pop();
        });
      });
    };
  };
  return { p5Sketch, setColor };
};

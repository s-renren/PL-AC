process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlB164: string[] = ["1 1", "1", "0"];

const linesPlB164: string[] = [];

const makeTwoDimensionalArray = (h: number, map: string[]): number[][] => {
  const resMap: number[][] = [];
  for (let i = 0; i < h; i++) {
    const row = linesPlB164[i].split(" ").map(Number);
    resMap.push(row);
  }
  return resMap;
};
const checkUp = (n: number, map: number[][], x: number, y: number): number => {
  let res: number = 0;
  for (let i = 0; i < n; i++) {
    const newY = y - i;
    if (newY < 0 || map[newY]?.[x] === undefined) {
      return res;
    }
    res += map[newY][x];
  }
  return res;
};
const checkDown = (
  n: number,
  map: number[][],
  x: number,
  y: number
): number => {
  let res: number = 0;
  for (let i = 0; i < n; i++) {
    const newY = y + i;
    if (newY < 0 || map[newY]?.[x] === undefined) {
      return res;
    }
    res += map[newY][x];
  }
  return res;
};
const checkLeft = (
  n: number,
  map: number[][],
  x: number,
  y: number
): number => {
  let res: number = 0;
  for (let i = 0; i < n; i++) {
    const newX = x - i;
    if (newX < 0 || map[y]?.[newX] === undefined) {
      return res;
    }
    res += map[y][newX];
  }
  return res;
};
const checkRight = (
  n: number,
  map: number[][],
  x: number,
  y: number
): number => {
  let res: number = 0;
  for (let i = 0; i < n; i++) {
    const newX = x + i;
    if (newX < 0 || map[y]?.[newX] === undefined) {
      return res;
    }
    res += map[y][newX];
  }
  return res;
};

const checkDirections = (
  n: number,
  map: number[][],
  x: number,
  y: number
): number => {
  const up: number = checkUp(n, map, x, y);
  const down: number = checkDown(n, map, x, y);
  const left: number = checkLeft(n, map, x, y);
  const right: number = checkRight(n, map, x, y);
  return Math.max(up, down, left, right);
};

const readerPlB164 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlB164.on("line", (line: string) => {
  linesPlB164.push(line);
});
readerPlB164.on("close", () => {
  // Write your code here
  const h: number = Number(linesPlB164[0].split(" ")[0]);
  const w: number = Number(linesPlB164[0].split(" ")[1]);
  const n: number = Number(linesPlB164[1]);
  linesPlB164.shift();
  linesPlB164.shift();
  // 2次元配列に
  const risuMap: number[][] = makeTwoDimensionalArray(h, linesPlB164);
  let max: number = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      const currentNum = checkDirections(n, risuMap, j, i);
      if (currentNum > max) max = currentNum;
    }
  }

  console.log(max);
});

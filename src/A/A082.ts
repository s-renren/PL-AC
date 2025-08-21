process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlA082: string[] = [
//   "5 5",
//   "##...",
//   ".#...",
//   "###..",
//   "###..",
//   "#####",
// ];
const linesPlA082: string[] = [];

const readerPlA082 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlA082.on("line", (line: string) => {
  linesPlA082.push(line);
});
readerPlA082.on("close", () => {
  // Write your code here
  // 1が池
  const [H, W] = linesPlA082[0].split(" ").map(Number);
  linesPlA082.shift();
  const lake: number[][][] = [];
  linesPlA082.forEach((i, n) => {
    lake.push([]);
    const row = i.split("");
    row.forEach((j) => {
      lake[n].push([j === "#" ? 1 : 0, 0]);
    });
  });
  const map: string[][] = [];
  linesPlA082.forEach((i) => {
    map.push(i.split(""));
  });
  const firstLake = map.flat().filter((i) => i === "#").length;

  // 呼び出す前に0に
  let lakeNumber = 0;

  const dir = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  function calcLake(x: number, y: number, nowLake: number[][][]) {
    dir.forEach(([dy, dx]) => {
      if (nowLake[y + dy]?.[x + dx]) {
        if (
          nowLake[y + dy][x + dx][0] === 1 &&
          nowLake[y + dy][x + dx][1] === 0
        ) {
          nowLake[y + dy][x + dx][1] = 1;
          lakeNumber++;
          calcLake(x + dx, y + dy, nowLake);
        }
      }
    });
  }
  // 分断されてないか
  function checkLake(x: number, y: number): boolean {
    const nowLake = lake.map((matrix) => matrix.map((row) => [...row]));

    nowLake[y][x][0] = 0;
    let xxx = 0;
    let yyy = 0;
    for (let i = 0; i < 4; i++) {
      const [xx, yy] = dir[i];
      if (nowLake[y + yy]?.[x + xx]?.[0] === 1) {
        xxx = x + xx;
        yyy = y + yy;
      }
    }
    lakeNumber = 0;
    calcLake(xxx, yyy, nowLake);
    if (lakeNumber === firstLake - 1) {
      return true;
    } else {
      return false;
    }
  }
  let res = 0;
  lake.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell[0] === 0) {
        res++;
      } else {
        if (checkLake(x, y)) {
          res++;
        }
      }
    });
  });
  console.log(res);

});

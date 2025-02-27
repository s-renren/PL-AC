process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！

// const linesB138: string[] = [
//   "5 5",
//   "###.#",
//   "#.###",
//   "###.#",
//   "#.###",
//   "###.#",
// ];

const linesB138:string[] = [];

const arround8 = [
  [-1, 1],
  [-1, 0],
  [-1, -1],
  [0, 1],
  [0, -1],
  [1, 1],
  [1, 0],
  [1, -1],
];
const check = (x: number, y: number, map: string[][]): number => {
  let bool = 0;
  arround8.forEach((a) => {
    const [dx, dy] = a;
    if (map[y + dy]?.[x + dx] === "#") {
      bool += 1;
    }
  });
  return bool;
};
const readerB138 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerB138.on("line", (line: string) => {
  linesB138.push(line);
});
readerB138.on("close", () => {
  linesB138.shift();
  const map: string[][] = linesB138.map((str) => str.split(""));
  let res: number = 0;
  map.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === ".") {
        const bool = check(j, i, map);
        if (bool === 8) {
          res++;
        }
      }
    });
  });
  console.log(res);
});
console.log("ready");

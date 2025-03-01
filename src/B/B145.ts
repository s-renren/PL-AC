process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！

// const linesB145: string[] = [
//   "3 8",
//   "1 2 3",
//   "4 0 5",
//   "6 7 8",
//   "1 2 3 4 5 6 7 8",
// ];

const linesB145:string[] = [];

const makeCheck = (n: number): number[][] => {
  const arr: number[][] = [...Array(n)].map(() => [...Array(n)].map(() => 0));
  return arr;
};
const checkRow = (n: number, arr: number[][]) => {
  let res = 0;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        count++;
      }
      if (count === n) {
        res++;
      }
    }
  }
  return res;
};
const checkCol = (n: number, arr: number[][]): number => {
  let res = 0;
  for (let j = 0; j < n; j++) {
    if (arr.every((row) => row[j] === 1)) {
      res++;
    }
  }
  return res;
};
const checkCross = (n: number, arr: number[][]): number => {
  let res = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i][i] === 1) count++;
  }
  if (count === n) res++;
  count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i][n - 1 - i] === 1) count++;
  }
  if (count === n) res++;
  return res;
};

const readerB145 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerB145.on("line", (line: string) => {
  linesB145.push(line);
});
readerB145.on("close", () => {
  const [n, k] = linesB145[0].split(" ").map(Number);
  const bingoBoard = makeCheck(n);
  linesB145.shift();
  const order = linesB145.pop()?.split(" ").map(Number);
  const board = linesB145.map((line) => line.split(" ").map(Number));
  for (let s = 0; s < k; s++) {
    const num = order?.[s];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === num) {
          bingoBoard[i][j] = 1;
        }
      }
    }
  }
  bingoBoard[Math.floor(n / 2)][Math.floor(n / 2)] = 1;
  const res =
    checkRow(n, bingoBoard) +
    checkCol(n, bingoBoard) +
    checkCross(n, bingoBoard);
  console.log(res);
});
console.log("ready");

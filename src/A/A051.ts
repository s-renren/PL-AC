process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlA051: string[] = [
//   "4 4",
//   "5 4 3 10",
//   "1 3 0 6",
//   "9 0 3 2",
//   "3 5 1 3",
// ];
const linesPlA051: string[] = [];

const readerPlA051 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlA051.on("line", (line: string) => {
  linesPlA051.push(line);
});
readerPlA051.on("close", () => {
  // Write your code here
  console.log(linesPlA051);
  const [H, W] = linesPlA051[0].split(" ").map(Number);
  linesPlA051.shift();
  const board: number[][] = [];
  linesPlA051.forEach((i) => {
    const line = i.split(" ").map(Number);
    board.push(line);
  });
  let maxCount: number = 0;
  const dir = [
    [1, -1],
    [1, 0],
    [1, -1],
  ];
  const calcRow = (y: number, x: number): number => {
    let res = 0;
    let countres = 0;
    dir.forEach((d) => {
      const [dy, dx] = d;
      if (board[y + dy]?.[x + dx]) {
        countres += board[y + dy][x + dx];
        if (board?.[y + dy]) {
          calcRow(y + dy, x + dx);
        }
      }
    });
    if (countres > res) {
      res = countres;
    }
    return countres;
  };
  const checkDown = (row: number): number => {
    const start: number = board[0][row];
    let res = 0;
    for (let i = 0; i < H; i++) {
      let countres = 0;
      dir.forEach((d) => {
        const [dy, dx] = d;
        if (board[i + dy]?.[row + dx]) {
          countres += board[i + dy][row + dx];
          // console.log(board[i + dy][row + dx]);
        }
      });
      if (countres > res) {
        res = countres;
      }
    }
    return res + start;
  };
  // 横の長さ分調べて、各銭湯の最大値を比べるようにする
  for (let i = 0; i < W; i++) {
    const count = checkDown(i);
    if (count > maxCount) {
      maxCount = count;
    }
  }

  console.log(maxCount);
});

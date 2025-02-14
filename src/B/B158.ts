process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！

// const linesB158: string[] = [
//   "5",
//   "3 3 3 2 6",
//   "1 9 4 5 3",
//   "1 8 4 6 5",
//   "4 9 2 6 8",
//   "7 5 8 1 6",
// ];

const linesB158:string[] = [];
const readerB158 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerB158.on("line", (line: string) => {
  linesB158.push(line);
});
readerB158.on("close", () => {
  const len = Number(linesB158[0]);
  linesB158.shift();
  let board: number[][] = linesB158.map((l) => l.split(" ").map(Number));
  let res = 0;
  let count = 1;
  let boardLen = len;

  for (let i = 0; i < Math.round(len / 2); i++) {
    for (let n = 0; n < boardLen; n++) {
      for (let m = 0; m < boardLen; m++) {
        if (board[n][m] === -1) {
          continue;
        } else {
          if (n === 0) {
            res += board[n][m] - count;
            board[n][m] = -1;
          } else if (m === 0) {
            res += board[n][m] - count;
            board[n][m] = -1;
          } else if (n === boardLen - 1) {
            res += board[n][m] - count;
            board[n][m] = -1;
          } else if (m === boardLen - 1) {
            res += board[n][m] - count;
            board[n][m] = -1;
          }
        }
      }
    }
    count++;
    const deletes = [0, boardLen - 1];
    for (let n = 0; n < deletes.length; n++) {
      board.splice(deletes[n] - n, 1);
    }
    for (let n = 0; n < board.length; n++) {
      for (let m = 0; m < deletes.length; m++) {
        board[n].splice(deletes[m] - m, 1);
      }
    }
    boardLen -= 2;
  }
  console.log(res)
});

process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlB161: string[] = [
//   "7 7",
//   "3",
//   "7 6 85 38",
//   "2 6 27 8",
//   "7 1 19 1",
//   "5",
//   "7 4",
//   "2 1",
//   "1 5",
//   "5 7",
//   "7 3",
// ];
const linesPlB161: string[] = [];

const around = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];
const readerPlB161 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlB161.on("line", (line: string) => {
  linesPlB161.push(line);
});
readerPlB161.on("close", () => {
  const [h, w] = linesPlB161[0].split(" ").map(Number);
  linesPlB161.shift();
  const n = Number(linesPlB161[0]);
  linesPlB161.shift();
  const mato = [...Array(n)].map(() =>
    linesPlB161.shift()?.split(" ").map(Number)
  );
  const m = Number(linesPlB161[0]);
  linesPlB161.shift();
  const hit = [...Array(m)].map(() =>
    linesPlB161.shift()?.split(" ").map(Number)
  );
  let board = [...Array(h)].map(() => [...Array(w)].map(() => 0));
  let res = 0;
  if (mato === undefined || hit === undefined) return;
  for (let i = 0; i < n; i++) {
    const [r, c, p, q] = mato[i]?.map(Number) as number[];
    board[r - 1][c - 1] = p;
    for (let j = 0; j < 8; j++) {
      const [dx, dy] = around[j];
      if (board[r - 1 + dx] !== undefined) {
        board[r - 1 + dx][c - 1 + dy] = q;
      }
    }
  }
  for (let s = 0; s < m; s++) {
    const [a, b] = hit[s]?.map(Number) as number[];
    res += board[a - 1][b - 1];
  }
  console.log(res);
});

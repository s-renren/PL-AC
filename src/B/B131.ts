process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlB131: string[] = [
//   "8 9",
//   "0 1 3 4 22 34 60 63 85",
//   "0 35 44 50 53 56 61 90 99",
//   "0 7 15 35 42 51 53 96 100",
//   "0 23 40 41 44 64 67 83 91",
//   "0 5 36 47 59 70 81 87 97",
//   "0 5 11 14 30 34 64 76 90",
//   "0 4 5 22 57 62 90 91 98",
//   "0 8 13 25 35 41 60 68 82",
//   "10",
//   "2 6",
//   "3 4",
//   "6 1",
//   "4 4",
//   "5 4",
//   "8 6",
//   "1 8",
//   "5 6",
//   "4 6",
//   "5 1",
// ];

const linesPlB131: string[] = [];
const readerPlB131 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlB131.on("line", (line: string) => {
  linesPlB131.push(line);
});
readerPlB131.on("close", () => {
  const [n, m] = linesPlB131[0].split(" ").map(Number);
  linesPlB131.shift();
  const eki: number[][] = linesPlB131
    .slice(0, n)
    .map((v) => v.split(" ").map(Number));
  const x = Number(linesPlB131[n]);
  const r: number[][] = linesPlB131
    .slice(n + 1)
    .map((v) => v.split(" ").map(Number));
  let res = 0;
  let now = 1;
  for (let i = 0; i < x; i++) {
    const r1 = r[i][0]; //路線
    const r2 = r[i][1]; //駅
    if (r2 === now) {
      res += 0;
    } else {
      if (now < r2) {
        res += eki[r1 - 1][r2 - 1] - eki[r1 - 1][now - 1];
        now = r2;
      } else {
        res += eki[r1 - 1][now - 1] - eki[r1 - 1][r2 - 1];
        now = r2;
      }
    }
  }
  console.log(res);
});

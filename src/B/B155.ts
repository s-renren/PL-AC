process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlB155: string[] = [
//   "2 3 2",
//   "abc",
//   "def",
//   "ghi",
//   "jkl",
//   "3 3",
//   "1 2 1",
//   "2 1 2",
//   "1 2 1",
// ];
const linesPlB155: string[] = [];

const readerPlB155 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlB155.on("line", (line: string) => {
  linesPlB155.push(line);
});
readerPlB155.on("close", () => {
  // Write your code here
  // 初期値取得
  const [H, W, N] = linesPlB155[0].split(" ").map(Number);
  linesPlB155.shift();
  const stamps: string[][][] = [];
  for (let i = 0; i < N; i++) {
    const stamp: string[][] = [];
    for (let j = 0; j < H; j++) {
      stamp.push(linesPlB155[0].split(" "));
      linesPlB155.shift();
    }
    stamps.push(stamp);
  }

  const [R, C] = linesPlB155[0].split(" ").map(Number);
  linesPlB155.shift();
  const plan: number[][] = [];
  linesPlB155.forEach((line) => {
    plan.push(line.split(" ").map((n) => Number(n) - 1));
  });
  const art: string[] = [];
  let res: string = "";
  // 大きいくくりだと計画通り3周で作る
  for (let i = 0; i < R; i++) {
    // スタンプはそれぞれ大きさを持っているので、それに合わせた回数周回するようにする
    for (let j = 0; j < H; j++) {
      let linestr = "";
      for (let k = 0; k < plan[i].length; k++) {
        linestr += stamps[plan[i][k]][j][0];
      }
      art.push(linestr);
    }
  }
  art.forEach((s) => {
    res += s;
    res += "\n";
  });
  console.log(res);
});

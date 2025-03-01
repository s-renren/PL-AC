process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
// const linesC117: string[] = ["4 3", "2556 3424 77", "137", "721", "984", "999"];

const linesC117:string[] = [];
const readerC117 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerC117.on("line", (line: string) => {
  linesC117.push(line);
});
readerC117.on("close", () => {
  const [n, m] = linesC117[0].split(" ").map(Number);
  linesC117.shift();
  const [a, b, c] = linesC117[0].split(" ").map(Number);
  linesC117.shift();
  const h = linesC117.map(Number);
  let res = 0;
  for (let i = 0; i < n; i++) {
    const benefit = -a - b * m + c * h[i];
    if (benefit < 0) {
      res++;
    }
  }
  console.log(res);
});
console.log("ready");

process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！

// const linesC160: string[] = ["5", "15 30 15 20 20"];
const linesC160: string[] = [];

const readerC160 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerC160.on("line", (line: string) => {
  linesC160.push(line);
});
readerC160.on("close", () => {
  const n: number = Number(linesC160[0]);
  linesC160.shift();
  const d: number[] = linesC160[0].split(" ").map(Number);
  let res: number = 0;
  for (let i = 0; i < n; i++) {
    res += d[i];
  }
  console.log(Math.ceil(res / n));
});

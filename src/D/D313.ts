process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
const linesD313: string[] = ["180", "160"];
const readerD313 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerD313.on("line", (line: string) => {
  linesD313.push(line);
});
readerD313.on("close", () => {
  let sum: number = 0;
  linesD313.forEach((line) => {
    sum += Number(line);
  });
  console.log(sum);
});

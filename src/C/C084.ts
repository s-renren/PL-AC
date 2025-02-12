process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
const linesC084: string[] = [];
const readerC084 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerC084.on("line", (line: string) => {
  linesC084.push(line);
});
readerC084.on("close", () => {
  const num: number = linesC084[0].length;
  const numAround: number = num + 2;
  const pls: string = "+".repeat(numAround);
  console.log(pls);
  console.log("+" + linesC084[0] + "+");
  console.log(pls);
});

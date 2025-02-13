process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
const readers = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readers.on("line", () => {});
readers.on("close", () => {
  for (let i = 1; i < 1000; i++) {
    console.log(i);
  }
});

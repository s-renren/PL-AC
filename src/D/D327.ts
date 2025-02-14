process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！

// const linesD327: string[] = ["11", "3"];
const linesD327:string[] = [];
const readerD327 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerD327.on("line", (line: string) => {
  linesD327.push(line);
});
readerD327.on("close", () => {
  const n = Number(linesD327[0]);
  const m = Number(linesD327[1]);
  console.log(n % m);
});

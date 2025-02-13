process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
const linesD326:string[] = [];
// const linesD326: string[] = ["paiza"];

const readerD326 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerD326.on("line", (line: string) => {
  linesD326.push(line);
});
readerD326.on("close", () => {
  const str: string[] = linesD326[0].split("");
  const res: string = str.join("\n");

  console.log(res);
});

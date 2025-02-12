process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
// const linesC144: string[] = ["6", "G C", "C G", "P G", "G C", "P P", "P C"];
const linesC144: string[] = [];

const readerC144 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerC144.on("line", (line: string) => {
  linesC144.push(line);
});
readerC144.on("close", () => {
  let count: number = 0;
  const num: number = Number(linesC144.shift());
  for (let i = 0; i < num; i++) {
    if (
      linesC144[i] === "G C" ||
      linesC144[i] === "C P" ||
      linesC144[i] === "P G"
    ) {
      count++;
    }
  }
  console.log(count);
});

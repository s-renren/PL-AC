process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
// const linesC163: string[] = [
//   "17",
//   "-72 60 -76 89 -7 5 -71 10 -85 94 -4 34 -34 11 -88 98 -53",
// ];

const linesC163:string[] = [];
const readerC163 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerC163.on("line", (line: string) => {
  linesC163.push(line);
});
readerC163.on("close", () => {
  const n = Number(linesC163[0]);
  linesC163.shift();
  const h = linesC163[0].split(" ").map(Number);
  let sum = 0;
  let bool = 0;
  for (let i = 0; i < n; i++) {
    sum += h[i];
    if (sum <= 0) {
      bool++
    }
  }
  console.log(bool === n ? "YES" : "NO");
});
console.log("ready");

process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！

const linesC099: string[] = ["3 4", "2", "1"];
// const linesC099:string[] = [];


const readerC099 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerC099.on("line", (line: string) => {
  linesC099.push(line);
});
readerC099.on("close", () => {
  const [m, n] = linesC099[0].split(" ").map(Number);
  linesC099.shift();
  let res = 0;
  for (let i = 0; i < m-1; i++) {
    res += n - Number(linesC099[i]);
  }
  res += n;
  console.log(res * n);
});

process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！

// const linesC115: string[] = ["5 10", "5", "6", "25", "4"];
const linesC115:string[] = [];
const readerC115 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerC115.on("line", (line: string) => {
  linesC115.push(line);
});
readerC115.on("close", () => {
  const [n, m] = linesC115[0].split(" ").map(Number);
  linesC115.shift();
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (Number(linesC115[i]) <= m) {
      res += Number(linesC115[i]);
    }
  }
  console.log(res);
});

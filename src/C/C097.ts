process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！

// const linesC097: string[] = ["5 2 4"];
const linesC097:string[] = [];

const readerC097 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerC097.on("line", (line: string) => {
  linesC097.push(line);
});
readerC097.on("close", () => {
  const [n, x, y] = linesC097[0].split(" ").map(Number);
  const res: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % x === 0 && i % y === 0) {
      res.push("AB");
    } else if (i % x === 0) {
      res.push("A");
    } else if (i % y === 0) {
      res.push("B");
    } else {
      res.push("N");
    }
  }
  console.log(res.join("\n"));
});

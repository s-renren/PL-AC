process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！

// const linesC162: string[] = ["8 3"];
const linesC162: string[] = [];
const readerC162 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerC162.on("line", (line: string) => {
  linesC162.push(line);
});
readerC162.on("close", () => {
  const [n, m] = linesC162[0].split(" ").map(Number);
  const arr: number[] = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  for (let i = 1; i <= m; i++) {
    const befArr: number[] = arr.slice(0, n / 2);
    const aftArr: number[] = arr.slice(n / 2);
    arr.splice(0);
    for (let j = 0; j <= befArr.length - 1; j++) {
      arr.push(aftArr[j]);
      arr.push(befArr[j]);
    }
  }

  const res: string[] = arr.map(String);
  console.log(res.join(" "));
});

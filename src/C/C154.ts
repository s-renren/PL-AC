process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！

// const linesC154: string[] = [
//   "10 1735",
//   "906 1498 240 934 872 688 1566 756 618 314",
// ];
const linesC154:string[] = [];

const readerC154 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerC154.on("line", (line: string) => {
  linesC154.push(line);
});
readerC154.on("close", () => {
  const [n, l] = linesC154[0].split(" ").map(Number);
  linesC154.shift();
  const u: number[] = linesC154[0].split(" ").map(Number);
  const big = Math.max(...u);
  let res = 0;
  let bool = false;
  let sum = 0;
  if (big >= l) {
    res += big / 2;
    let i = 0;
    while (bool === false || i < n) {
      if (u[i] === big) {
        u.splice(i, 1);
        bool = true;
      }
      i++;
    }
    sum = u.reduce((a, b) => a + b);
  } else {
    sum = u.reduce((a, b) => a + b);
  }

  console.log(res + sum);
});

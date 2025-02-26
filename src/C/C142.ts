process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！

// const linesC142: string[] = ["hamburg", "2", "cheese hamburg"];
const linesC142: string[] = [];

const readerC142 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerC142.on("line", (line: string) => {
  linesC142.push(line);
});
readerC142.on("close", () => {
  const s: string = linesC142[0];
  const n: number = Number(linesC142[1]);
  const t: string[] = linesC142[2].split(" ");
  let res: boolean = false;
  for (let i = 0; i < n; i++) {
    if (s === t[i]) {
      res = true;
    }
  }
  console.log(res ? "Yes" : "No");
});

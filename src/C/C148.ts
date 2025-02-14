process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！

// const linesC148: string[] = ["5 10", "5", "11", "20", "8", "7"];
const linesC148:string[] = [];
const readerC148 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerC148.on("line", (line: string) => {
  linesC148.push(line);
});
readerC148.on("close", () => {
  let [n, level] = linesC148[0].split(" ").map(Number);
  linesC148.shift();
  for (let i = 0; i < n; i++) {
    if (level === Number(linesC148[i])) {
    } else if (level > Number(linesC148[i])) {
      level = level + Math.floor(Number(linesC148[i]) / 2);
    } else {
      level = Math.floor(level / 2);
    }
  }
  console.log(level);
});

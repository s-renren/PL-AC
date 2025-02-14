process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！

const linesC038: string[] = ["3 7", "3", "2", "4"];

// const linesC038:string[] = [];
const readerC038 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerC038.on("line", (line: string) => {
  linesC038.push(line);
});
readerC038.on("close", () => {
  const [m, n] = linesC038[0].split(" ").map(Number);
  linesC038.shift();
  let over = n % Number(linesC038[0]);
  let divide = Math.floor(n / Number(linesC038[0]));
  let ret = over;
  linesC038.shift();
  for (let i = 1; i <= m - 1; i++) {
    if (n % Number(i) < over) {
      ret = Number(i);
    } else if (n % Number(i) === over) {
      if (n / Math.floor(Number(i)) > divide) {
        ret = Number(i);
      }
    }
    console.log(i);
  }
  console.log(ret);
});

process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlC157: string[] = ["5", "A B A B A"];

const linesPlC157: string[] = [];
const readerPlC157 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlC157.on("line", (line: string) => {
  linesPlC157.push(line);
});
readerPlC157.on("close", () => {
  const n = Number(linesPlC157[0]);
  linesPlC157.shift();
  const flowers = linesPlC157[0].split(" ");
  let res = 0;
  const bouquet = Array.from(new Set(flowers));
  console.log(bouquet.length);
});

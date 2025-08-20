process.stdin.resume();
process.stdin.setEncoding("utf8");
const linesPlD353: string[] = ["198", "300"];
// const linesPlD353: string[] = [];

const readerPlD353 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlD353.on("line", (line: string) => {
  linesPlD353.push(line);
});
readerPlD353.on("close", () => {
  // Write your code here
  const [x, y] = linesPlD353.map(Number);
  console.log(813 - (x + y));
});

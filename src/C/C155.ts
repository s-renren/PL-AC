process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！

// const linesC155: string[] = [
//   "Free",
//   "5",
//   "Get Your Free $100 Gift Card Now",
//   "The Concept of Freedom in Modern Society",
//   "Attention: Security Update Required",
//   "Unlock Your Free Access to Premium Content",
//   "CLAIM YOUR FREE SAMPLE PACK TODAY",
// ];

const linesC155:string[] = [];
const readerC155 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerC155.on("line", (line: string) => {
  linesC155.push(line);
});
readerC155.on("close", () => {
  const n = Number(linesC155[1]);
  const key = linesC155[0];
  const newArr = linesC155.slice(2);
  const res: string[] = [];
  for (let i = 0; i < n; i++) {
    if (newArr[i].includes(key)) {
      res.push("Yes");
    } else {
      res.push("No");
    }
  }
  console.log(res.join("\n"));
});

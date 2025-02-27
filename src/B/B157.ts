process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！

const linesB157: string[] = [
  "3 3",
  "100 200 300",
  "150 180 210",
  "200 150 200",
];
// const linesB157: string[] = [];

const readerB157 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerB157.on("line", (line: string) => {
  linesB157.push(line);
});
readerB157.on("close", () => {
  const [n, k] = linesB157[0].split(" ").map(Number);
  linesB157.shift();
  const p: number[][] = linesB157.map((str) => str.split(" ").map(Number));
  let res: number = 0;
  const store = [];
  for (let i = 0; i < k; i++) {
    const goods = [];
    const buy = [];
    for (let j = 0; j < n; j++) {
      goods.push(p[j][i]);
    }
    buy.push(goods.indexOf(Math.min(...goods)));
    store.push(buy);
  }
  res = Array.from(new Set(store.flat())).length;
  console.log(res);
});
console.log("ready");

process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
// const linesB143: string[] = [ '4 2', '1 2', '3 4' ];

const linesB143:string[] = [];
const makeArray = (n: number) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push({ p: i + 1, len: 1 });
  }
  return arr;
};
const readerB143 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerB143.on("line", (line: string) => {
  linesB143.push(line);
});
readerB143.on("close", () => {
  const [n, m] = linesB143[0].split(" ").map(Number);
  linesB143.shift();
  const arr = makeArray(n);
  const time = linesB143.map((str) => str.split(" ").map(Number));
  for (let i = 0; i < m; i++) {
    const [a, b] = time[i];
    arr[a - 1].len += arr[b - 1].len;
    arr[b - 1].len = 0;
  }
  const win = arr.map((a) => a.len);
  const max = Math.max(...win);
  const res:number[] = []
  win.forEach((a, i) => {
    if ( a === max) {
      res.push(i + 1);
    }
  })
  console.log(res.join("\n"));
});
console.log("ready");

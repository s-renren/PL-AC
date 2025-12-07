process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlB107: string[] = ["9 3 1"];
const linesPlB107: string[] = [];

const readerPlB107 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlB107.on("line", (line: string) => {
  linesPlB107.push(line);
});
readerPlB107.on("close", () => {
  // Write your code here
  const [N, M, K] = linesPlB107[0].split(" ").map(Number);
  let beforeTrump: number[] = [...Array(N)].map((_, i) => i + 1);
  let nowTrump: number[] = [];
  // シャッフル回数
  for (let i = 0; i < K; i++) {
    nowTrump.splice(0);
    let box: number[][] = [];
    for (let j = 0; j < Math.ceil(N / M); j++) {
      box.push(beforeTrump.slice(j * M, M + j * M));
    }
    let nowTrumpBox: number[][] = [];
    box.map((num) => {
      nowTrumpBox.unshift(num);
    });
    nowTrump = nowTrumpBox.flat();

    beforeTrump.splice(0);
    beforeTrump = [...nowTrump];
  }
  nowTrump.map((n) => {
    console.log(n);
  })
});

process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlA052: string[] = ["15", "4 6"];
const linesPlA052: string[] = [];

const readerPlA052 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlA052.on("line", (line: string) => {
  linesPlA052.push(line);
});
readerPlA052.on("close", () => {
  // Write your code here
  const N = Number(linesPlA052[0]);
  const [A, B] = linesPlA052[1].split(" ").map(Number);
  const line: number[] = Array(N + 1).fill(0);

  const dan = (n: number) => {
    console.log(n);
    if (n > N || line[n] === 1) return;
    if (n < N) {
      line[n] = 1;
      dan(n + A);
      dan(n + B);
    }
  };

  for (let i = 0; i < N; i++) {
    dan((i + 1) * A);
    dan((i + 1) * B);
  }

  //最後の段を埋める
  line[0] = 1;
  line[line.length - 1] = 1;
  console.log(line);
  const res = line.filter((n) => n === 0);
  console.log(res.length);
});

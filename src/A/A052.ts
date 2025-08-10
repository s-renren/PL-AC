process.stdin.resume();
process.stdin.setEncoding("utf8");
const linesPlA052: string[] = ["15", "4 6"];
// const linesPlA052: string[] = [];

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

  const Adan = (n: number) => {
    //Aの倍数
    for (let i = 0; i < Math.floor(N - n / A); i++) {
      if (line[n + i + 1] * A === 0) {
        line[(n + i + 1) * A] = 1;
        // Bdan(n + i + 1);
        if (line[(n + i + 1) * A + B]) {
          line[(n + i + 1) * A + B] = 1;
          // Adan(n + i + 1);
        }
      }
    }
  };
  //Bの倍数
  const Bdan = (n: number) => {
    for (let i = 0; i < Math.floor(N - n / B); i++) {
      if (line[(n + i + 1) * B] === 0) {
        line[(n + i + 1) * B] = 1;
        // Adan(n + i + 1);
        if (line[(n + i + 1) * B + A]) {
          if (line[(n + i + 1) * B + A] === 0) {
            line[(n + i + 1) * B + A] = 1;
            // Bdan(n + i + 1);
          }
        }
      }
    }
  };
  Adan(0);
  Bdan(0);

  //最後の段を埋める
  line[0] = 1;
  line[line.length - 1] = 1;
  console.log(line);
  const res = line.filter((n) => n === 0);
  console.log(res.length);
});

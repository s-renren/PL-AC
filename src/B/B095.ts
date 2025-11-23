process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlB095: string[] = [
//   "2 3",
//   "400",
//   "410",
//   "420",
//   "400",
//   "400",
//   "400",
//   "300",
//   "300",
//   "300",
// ];
const linesPlB095: string[] = [];

const readerPlB095 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlB095.on("line", (line: string) => {
  linesPlB095.push(line);
});
readerPlB095.on("close", () => {
  // Write your code here
  let higherScore = 0;
  const [N, M] = linesPlB095[0].split(" ").map((n) => Number(n));
  linesPlB095.shift();
  const correctNumber: number[] = [];
  for (let n = 0; n < M; n++) {
    correctNumber.push(Number(linesPlB095[0]));
    linesPlB095.shift();
  }
  for (let i = 0; i < N; i++) {
    let score = 100;
    for (let j = 0; j < M; j++) {
      const scoreAbs = Math.abs(Number(linesPlB095[0]) - correctNumber[j]);
      const genten =
        scoreAbs <= 5
          ? 0
          : scoreAbs <= 10
          ? 1
          : scoreAbs <= 20
          ? 2
          : scoreAbs <= 30
          ? 3
          : 5;
      score -= genten;
      linesPlB095.shift();
    }
    if (score >= higherScore) {
      higherScore = score;
    }
  }

  if (higherScore < 0) {
    higherScore = 0;
  }

  console.log(higherScore);
});

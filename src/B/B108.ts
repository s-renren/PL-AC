process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlB108: string[] = ["3 3", "5", "5", "5", "6", "5", "3"];
// const linesPlB108: string[] = [
//   "4 6",
//   "4",
//   "2",
//   "4",
//   "2",
//   "9",
//   "3",
//   "5",
//   "7",
//   "1",
//   "3",
// ];
const linesPlB108: string[] = [];

const readerPlB108 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlB108.on("line", (line: string) => {
  linesPlB108.push(line);
});
readerPlB108.on("close", () => {
  // Write your code here
  const [N, M] = linesPlB108[0].split(" ").map(Number);
  linesPlB108.shift();
  const gondola: number[] = [...Array(N)].map(() => 0);
  const gondolaMax: number[] = linesPlB108.slice(0, N).map(Number);
  const human: number[] = linesPlB108.slice(N, linesPlB108.length).map(Number);
  let nowGondola = 0;
  const plusNowCounter = () => {
    nowGondola = (nowGondola + 1) % N;
    // console.log(nowGondola);
  };
  const calcHumanToGondola = (humanNum: number) => {
    if (humanNum > gondolaMax[nowGondola]) {
      // console.log(
      //   "a",
      //   nowGondola,
      //   gondolaMax[nowGondola],
      //   humanNum - gondolaMax[(nowGondola + 1) % N]
      // );
      const now = nowGondola;
      gondola[nowGondola] = gondola[nowGondola] + gondolaMax[nowGondola];
      plusNowCounter();
      calcHumanToGondola(humanNum - gondolaMax[now]);
      // console.log(humanNum - gondolaMax[nowGondola]);
    } else {
      // console.log("c", nowGondola, humanNum);
      gondola[nowGondola] = gondola[nowGondola] + humanNum;
      plusNowCounter();
    }
  };
  human.forEach((num) => {
    // console.log("bb", num);
    calcHumanToGondola(num);
  });
  // console.log(gondola);
  // console.log(gondolaMax);
  // console.log(human);
  console.log(gondola.join("\n"));
});

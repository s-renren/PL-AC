process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlB128: string[] = ["123456"];
const linesPlB128: string[] = [];

const readerPlB128 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlB128.on("line", (line: string) => {
  linesPlB128.push(line);
});

readerPlB128.on("close", () => {
  // Write your code here

  const line: number = linesPlB128[0].length / 3;
  const resultBox: string[][][] = [];

  function createBrock(num: number) {
    const stamp = [...Array(3)].map(() => [...Array(3)].map(() => "."));
    const ii = num <= 3 ? 1 : num <= 6 ? 2 : 3;
    if (ii === 1) {
      for (let i = 0; i < num; i++) {
        stamp[0][i] = "#";
      }
    } else if (ii === 2) {
      stamp[0][0] = "#";
      stamp[0][1] = "#";
      stamp[0][2] = "#";
      const nums = num - 3;
      for (let i = 0; i < nums; i++) {
        stamp[1][i] = "#";
      }
    } else {
      stamp[0][0] = "#";
      stamp[0][1] = "#";
      stamp[0][2] = "#";
      stamp[1][0] = "#";
      stamp[1][1] = "#";
      stamp[1][2] = "#";
      const nums = num - 6;
      for (let i = 0; i < nums; i++) {
        stamp[2][i] = "#";
      }
    }
    return stamp;
  }

  const stamps = linesPlB128[0].split("").map(Number);
  stamps.forEach((i) => {
    resultBox.push(createBrock(i));
  });
  // console.log(line);
  // console.log(stamps);
  // console.log(resultBox.length);
  if (resultBox.length > 0) {
    for (let i = 0; i < line; i++) {
      for (let j = 0; j < 3; j++) {
        console.log(
          resultBox[0][j].join("") +
            resultBox[1][j].join("") +
            resultBox[2][j].join("")
        );
      }
      resultBox.shift();
      resultBox.shift();
      resultBox.shift();
    }
  }
});

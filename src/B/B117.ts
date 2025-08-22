process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlB117: string[] = ["5", "5", "2", "1", "3", "4"];
const linesPlB117: string[] = [];

const readerPlB117 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlB117.on("line", (line: string) => {
  linesPlB117.push(line);
});
readerPlB117.on("close", () => {
  // Write your code here
  const N: number = Number(linesPlB117.shift());
  const cars: number[][] = [];
  linesPlB117.map((i) => cars.push([Number(i), 0]));
  let canGo = 1;
  while (cars.length > 1) {
    if (cars[0][0] === canGo) {
      cars.shift();
      canGo++;
    } else {
      const plus = cars[0];
      plus[1] = plus[1] + 1;
      cars.shift();
      cars.push(plus);
    }
  }
  console.log(cars[0][1]);
});

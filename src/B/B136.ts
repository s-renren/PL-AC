process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlB136: string[] = [
//   "3 3 3",
//   "2 1",
//   "FRB",
//   "3 6 2",
//   "0 4 1",
//   "5 0 7",
// ];

const linesPlB136: string[] = [];

const readerPlB136 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlB136.on("line", (line: string) => {
  linesPlB136.push(line);
});
readerPlB136.on("close", () => {
  // Write your code here
  const direction: Record<string, [number, number]> = {
    R: [0, 1],
    L: [0, -1],
    F: [-1, 0],
    B: [1, 0],
  };
  const [N, H, W] = linesPlB136[0].split(" ").map(Number);
  let [nowY, nowX] = linesPlB136[1].split(" ").map((n) => Number(n) - 1);
  const s: string[] = linesPlB136[2].split("");
  linesPlB136.shift();
  linesPlB136.shift();
  linesPlB136.shift();
  const seats: number[][] = [];
  linesPlB136.forEach((i) => {
    const line: number[] = i.split(" ").map(Number);
    seats.push(line);
  });
  for (let i = 0; i < s.length; i++) {
    const dir: string = s[i];
    const [dy, dx] = direction[dir];
    nowY += dy;
    nowX += dx;
    console.log(seats[nowY]?.[nowX]);
  }
});

process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlB109: string[] = [
//   "9 4 5 2 3",
//   "1 0",
//   "1 2",
//   "1 3",
//   "1 4",
//   "2 2",
//   "2 3",
//   "2 4",
//   "3 3",
//   "3 4",
// ];
// const linesPlB109: string[] = ["4 3 2 2 0", "0 0", "1 0", "1 1", "2 1"];
const linesPlB109: string[] = [];
const readerPlB109 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlB109.on("line", (line: string) => {
  linesPlB109.push(line);
});
readerPlB109.on("close", () => {
  // Write your code here
  const [N, H, W, P, Q] = linesPlB109[0].split(" ").map(Number);
  linesPlB109.shift();
  const seat = [...Array(H)].map(() => [...Array(W)].map(() => 0));
  linesPlB109.forEach((n) => {
    const [y, x] = n.split(" ").map(Number);
    seat[y][x] = 1;
  });
  let yoyaku: number[][] = [];
  let nowLowest = H * W;

  const resetYoyaku = () => {
    yoyaku = [];
  };

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const abs = Math.abs(P - y) + Math.abs(Q - x);
      if (seat[y][x] === 0) {
        if (abs < nowLowest) {
          nowLowest = abs;
          resetYoyaku();
          yoyaku.push([y, x]);
        } else if (abs === nowLowest) {
          yoyaku.push([y, x]);
        }
      }
    }
  }

  for (let i = 0; i < yoyaku.length; i++) {
    console.log(yoyaku[i].join(" "));
  }
});

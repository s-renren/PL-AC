process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlB129: string[] = [
//   "7 4",
//   "1 10",
//   "1 1 1 9 4",
//   "1 1 2 3 3",
//   "1 1 7 9 1",
//   "1 1 4 7 3",
//   "1 1 2 3 2",
//   "1 1 1 3 1",
//   "1 1 3 3 3",
// ];
// a b c d e

const linesPlB129: string[] = [];

const readerPlB129 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlB129.on("line", (line: string) => {
  linesPlB129.push(line);
});
readerPlB129.on("close", () => {
  const [n, m] = linesPlB129[0].split(" ").map(Number);
  const [aa, bb] = linesPlB129[1].split(" ").map(Number);
  linesPlB129.shift();
  linesPlB129.shift();
  let arr: number[][] = [...Array(aa)].map(() => [...Array(bb)].map(() => 0));
  let harvest: number[] = [];
  for (let i = 0; i < n; i++) {
    const [a, b, c, d, e] = linesPlB129[i].split(" ").map(Number);
    for (let n = 0; n < b - a + 1; n++) {
      for (let m = 0; m < d - c + 1; m++) {
        const [nn, mm] = [n + a - 1, m + c - 1];
        if (arr[nn][mm] === 0) {
          arr[nn][mm] = e;
        } else {
          harvest.push(arr[nn][mm]);
          arr[nn][mm] = e;
        }
      }
    }
  }
  harvest = harvest.sort((a, b) => a - b);
  const map = harvest.reduce(
    (acc, curr) => acc.set(curr, (acc.get(curr) || 0) + 1),
    new Map()
  );
  const res = [...map.entries()];
  let resArr = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        resArr += ".";
      } else {
        resArr += arr[i][j];
      }
    }
    resArr += "\n";
  }
  for (let i = 0;i<res.length;i++){
    console.log(res[i][1])
  }
  console.log(resArr);
});

process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlA053: string[] = [
//   "5 5",
//   "RRRGG",
//   "RRRGG",
//   "BBBBB",
//   "RRGGG",
//   "GRGGG",
// ];
const linesPlA053: string[] = [];

const readerPlA053 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlA053.on("line", (line: string) => {
  linesPlA053.push(line);
});
readerPlA053.on("close", () => {
  // Write your code here
  const [H, W] = linesPlA053[0].split(" ").map(Number);
  linesPlA053.shift();
  type Color = "R" | "G" | "B";
  type Paint = [Color, 0 | 1];
  type Grid = Paint[][];
  const board: Grid = [];
  linesPlA053.forEach((l) => {
    const charas: string[] = l.split("");
    const row: Paint[] = charas.map((c) => {
      const rgb: Color = c as Color;
      return [rgb, 0];
    });
    board.push(row);
  });
  let red: number = 0;
  let green: number = 0;
  let blue: number = 0;
  const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const count = (rgb: Color) => {
    if (rgb === "R") {
      red += 1;
    } else if (rgb === "G") {
      green += 1;
    } else {
      blue += 1;
    }
  };
  const paintBoard = (x: number, y: number, rgb: Color) => {
    if (board[y]?.[x][1] === 0) {
      board[y][x][1] = 1;
      dir.forEach((n) => {
        const [dy, dx] = n;
        if (board[y + dy]?.[x + dx] && rgb === board[y+dy]?.[x+dx][0]) {
          paintBoard(x + dx, y + dy, board[y + dy]?.[x + dx][0]);
        }
      });
    } else {
      return;
    }
  };
  board.forEach((line, y) => {
    line.forEach((row, x) => {
      //まだ塗られてないとき
      if (board[y][x][1] === 0) {
        paintBoard(x, y, board[y][x][0]);
        count(board[y][x][0]);
      }
      // console.log(board[y][x][0], y, x);
    });
  });
  console.log([red, green, blue].join(" "));
});

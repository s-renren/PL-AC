process.stdin.resume();
process.stdin.setEncoding("utf8");
const linesPlA078: string[] = [
  "5",
  ".214.",
  "1321.",
  "33311",
  "13214",
  "33324",
];
// const linesPlA078: string[] = [];

const readerPlA078 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlA078.on("line", (line: string) => {
  linesPlA078.push(line);
});
readerPlA078.on("close", () => {
  const H = Number(linesPlA078[0]);
  linesPlA078.shift();
  const board: number[][] = [];
  linesPlA078.forEach((line) => {
    board.push(line.split("").map((i) => (i === "." ? 0 : Number(i))));
  });
  // Write your code here
  let sansyouBoard = board.map((row) => [...row]);
  while (true) {
    const newBoard = deleteFlow(sansyouBoard);
    if (countZero(newBoard) === countZero(deleteFlow(newBoard))) {
      sansyouBoard = newBoard.map((row) => [...row]);
      break;
    } else {
      sansyouBoard = [];
      sansyouBoard = newBoard.map((row) => [...row]);
    }
  }
  sansyouBoard.forEach((i) => {
    let str = "";
    i.map((n) => {
      str += n === 0 ? "." : n;
    });
    console.log(str);
  });
});

// 上下左右にブロックがある場合ブロックがある数をスコアにし、存在しないマスがある場合(端)などは、その分プラスする
//　スコアが4のブロックを消すことができる

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const cloneBoard = (board: number[][]): number[][] =>
  board.map((row) => [...row]);

const forEachCell = (board: number[][], fn: (x: number, y: number) => void) => {
  board.forEach((row, y) => row.forEach((_, x) => fn(x, y)));
};

const checkDelete = (board: number[][], x: number, y: number): boolean => {
  let score = 0;
  if (x === 0 || x === board[0].length - 1) score++;
  if (y === 0 || y === board.length - 1) score++;

  for (const [dx, dy] of dir) {
    if (board[y + dy]?.[x + dx] === board[y][x]) {
      score++;
    }
  }
  return score === 4;
};

const deleteBlock = (board: number[][], x: number, y: number) => {
  board[y][x] = 0;
  for (const [dx, dy] of dir) {
    if (board[y + dy]?.[x + dx]) {
      board[y + dy][x + dx] = 0;
    }
  }
};

const dropBlock = (board: number[][]): number[][] => {
  const H = board.length,
    W = board[0].length;
  for (let x = 0; x < W; x++) {
    const column = [];
    for (let y = 0; y < H; y++) {
      if (board[y][x] !== 0) column.push(board[y][x]);
    }
    // 上から埋め直す
    for (let y = H - 1; y >= 0; y--) {
      board[y][x] = column.pop() ?? 0;
    }
  }
  return board;
};

const deleteFlow = (board: number[][]): number[][] => {
  const next = cloneBoard(board);
  const toDelete: [number, number][] = [];

  forEachCell(board, (x, y) => {
    if (board[y][x] !== 0 && checkDelete(board, x, y)) {
      toDelete.push([x, y]);
    }
  });

  toDelete.forEach(([x, y]) => deleteBlock(next, x, y));
  return dropBlock(next);
};

const countZero = (board: number[][]): number =>
  board.reduce((acc, row) => acc + row.filter((n) => n === 0).length, 0);

process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlA078: string[] = [
//   "5",
//   ".214.",
//   "1321.",
//   "33311",
//   "13214",
//   "33324",
// ];
const linesPlA078: string[] = [];

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

const deleteFlow = (nowBoard: number[][]): number[][] => {
  const canDelete: number[][] = [];
  nowBoard.forEach((row, y) => {
    row.forEach((_, x) => {
      if (checkDelete(nowBoard, x, y)) {
        canDelete.push([x, y]);
      }
    });
  });
  canDelete.forEach((i) => {
    const [x, y] = i;
    deleteBlock(nowBoard, x, y);
  });
  return dropBlock(nowBoard);
};

const dropBlock = (nowBoard: number[][]): number[][] => {
  for (let i = 0; i < nowBoard.length; i++) {
    for (let line = nowBoard.length - 1; line > 0; line--) {
      for (let x = 0; x < 5; x++) {
        if (nowBoard[line][x] === 0 && nowBoard[line - 1][x] !== 0) {
          nowBoard[line][x] = nowBoard[line - 1][x];
          nowBoard[line - 1][x] = 0;
        }
      }
    }
  }
  return nowBoard;
};

const deleteBlock = (nowBoard: number[][], x: number, y: number) => {
  nowBoard[y][x] = 0;
  dir.forEach((p) => {
    const [dx, dy] = p;
    if (nowBoard[y + dy]?.[x + dx]) {
      nowBoard[y + dy][x + dx] = 0;
    }
  });
};

const checkDelete = (nowBoard: number[][], x: number, y: number): boolean => {
  let score = 0;
  if (x === 0 || x === 4) {
    score += 1;
  }
  if (y === 0 || y === nowBoard.length - 1) {
    score += 1;
  }
  dir.forEach((p) => {
    const [dx, dy] = p;
    if (nowBoard[y + dy]?.[x + dx]) {
      if (nowBoard[y][x] === nowBoard[y + dy][x + dx]) {
        score += 1;
      }
    }
  });

  if (score === 4) {
    return true;
  } else {
    return false;
  }
};

const countZero = (board: number[][]): number => {
  let res = 0;
  board.forEach((i) => {
    res += i.filter((n) => n === 0).length;
  });
  return res;
};

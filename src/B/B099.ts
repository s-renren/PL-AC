process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlB099: string[] = ["3 200", "100 200 20", "100 20 20", "500 20 20"];

const linesPlB099: string[] = [];

const readerPlB099 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlB099.on("line", (line: string) => {
  linesPlB099.push(line);
});
readerPlB099.on("close", () => {
  // Write your code here
  const [N, M] = linesPlB099[0].split(" ").map(Number);
  const map: number[][] = [];
  linesPlB099.shift();
  linesPlB099.forEach((i) => {
    map.push(i.split(" ").map(Number));
  });
  const routes: number[] = [];
  const allRoutes: number[] = [];
  for (let i = 0; i < N; i++) {
    allRoutes.push(i + 1);
  }

  // 行
  for (let i = 0; i < N; i++) {
    // 列
    for (let j = 0; j < N; j++) {
      if (!routes.includes(j + 1)) {
        if (map[i][j] >= M) {
          routes.push(j + 1);
        }
      }
    }
  }

  const deleteRoute = (all: number[], cantRoute: number[]): number[] => {
    const res = [];
    for (let i = 0; i < all.length; i++) {
      if (!cantRoute.includes(all[i])) {
        res.push(i + 1);
      }
    }
    return res;
  };

  if (routes.length === N) {
    console.log("wait");
  } else {
    console.log(deleteRoute(allRoutes, routes.sort()).join(" "));
  }
});

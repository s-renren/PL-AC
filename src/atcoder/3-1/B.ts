function MainB31(input: string) {
  const result = input.split("\n");
  const n = Number(result[0]);
  const arr: number[][] = [...Array(n)].map(() => [...Array(n)].map(() => 0));
  const res: string[][] = [...Array(n)].map(() => [...Array(n)].map(() => ""));
  const done: number[] = [];
  for (let s = 0; s < n; s++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (done.includes(i) || done.includes(j)) {
          continue;
        } else {
          s % 2 === 0 ? (arr[i][j] = 1) : (arr[j][i] = 2);
        }
      }
    }
    if (!done.includes(s)) {
      done.push(n - 1 - s);
      done.push(s);
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      res[j][i] = arr[i][j] === 1 ? "#" : ".";
    }
  }
  res.forEach((a) => {
    console.log(a.join(""));
  });
}
MainB31(require("fs").readFileSync("/dev/stdin", "utf8"));
// MainB31(`2`);

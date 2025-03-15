function MainAtC2025315(input: string) {
  const result = input.split("\n");
  const n = Number(result[0]);
  const a = result[1].split(" ").map(Number);
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    let bun1 = [];
    let bun2 = [];
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        bun1.push(a[j]);
      } else {
        bun2.push(a[j]);
      }
    }
    const newBun1 = [...new Set(bun1)];
    const newBun2 = [...new Set(bun2)];
    let bunCount = newBun1.length + newBun2.length;
    if (bunCount > count) {
      count = bunCount;
    }
  }

  console.log(count);
}
// MainAtC2025315(require("fs").readFileSync("/dev/stdin", "utf8"));
MainAtC2025315(`10
2 5 6 5 2 1 7 9 7 2`);

function MainAA31(input: string) {
  const result = input.split("\n");
  const n = Number(result[0]);
  const a = result[1].split(" ").map(Number);
  for ( let i = 0;i<n-1;i++) {
    if (a[i] >= a[i+1]) {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
}
MainAA31(require("fs").readFileSync("/dev/stdin", "utf8"));
// MainAA31(`10
// 1 1 2 3 5 8 13 21 34 55
// `);

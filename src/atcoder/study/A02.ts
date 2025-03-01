function MainAA02(input: string) {
  const result = input.split("\n");
  const [n, x] = result[0].split(" ").map(Number);
  const a = result[1].split(" ").map(Number);
  const s = a.find((num) => num === 1);
  if (s) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
MainAA02(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main(`5 40
// 10 20 30 40 50`);

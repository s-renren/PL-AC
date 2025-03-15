function MainAtA2025315(input: string) {
  const result = Number(input);
  if (result >= 38) {
    console.log(1);
  } else if (result >= 37.5) {
    console.log(2);
  } else {
    console.log(3);
  }

}
MainAtA2025315(require("fs").readFileSync("/dev/stdin", "utf8"));
// MainAtA2025315(`36.6`);

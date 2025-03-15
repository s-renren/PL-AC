function MainAtB2025315(input: string) {
  const result: string[] = input.split("");
  let count = 0;
  const first: boolean = result[0] === "i";
  const last: boolean = result[result.length - 1] === "o";
  for (let i = 0; i < result.length; i++) {
    if (result[i] === result[i + 1]) {
      count++;
    }
  }
  if (!first) {
    count++;
  }
  if (!last) {
    count++;
  }
  console.log(count);
}
MainAtB2025315(require("fs").readFileSync("/dev/stdin", "utf8"));
MainAtB2025315("iiooiioi");

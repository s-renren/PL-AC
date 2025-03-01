const readline = require("readline");

const stream = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let inputsAA01 = "5 40 10 20 30 40 50";
stream.on("line", (line: string) => {
  inputsAA01 += line;
  inputsAA01 += "\n";
});
stream.on("close", () => {
  console.log(Number(inputsAA01) * Number(inputsAA01));
});

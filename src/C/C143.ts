process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlC143: string[] = [ '--PA-I---ZA' ];

const linesPlC143: string[] = [];

const checkLine = (line:string[]):string[] => {
  const res:string[] = []
  for(let i = 0; i < line[0].length; i++) {
    if(line[0][i] === '-') {
      if(line[0]?.[i-1] !== '-') {
        res.push(line[0][i]);
      }
    } else {
      res.push(line[0][i]);
    }
  }
  return res;
}

const readerPlC143 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlC143.on("line", (line: string) => {
  linesPlC143.push(line);
});
readerPlC143.on("close", () => {
  // Write your code here
  const res:string = checkLine(linesPlC143).join('');
  console.log(res);
});

process.stdin.resume();
process.stdin.setEncoding("utf8");
// const linesPlC166: string[] = [ '733' ];

const linesPlC166: string[] = [];

const minus500 = (num:number):number => {
  return Math.floor(num / 500);
}
const minus100 = (num:number):number => {
  return Math.floor(num / 100);
}
const minus50 = (num:number):number => {
  return Math.floor(num / 50);
}
const minus10 = (num:number):number => {
  return Math.floor(num / 10);
}
const minus5 = (num:number):number => {
  return Math.floor(num / 5);
}
const minus1 = (num:number):number => {
  return Math.floor(num / 1);
}
const countCoin = (num:number):number => {
  let balance = num;
  let res = 0
  res += minus500(balance)
  balance -= minus500(balance)*500;
  res += minus100(balance);
  balance -= minus100(balance)*100;
  res += minus50(balance);
  balance -= minus50(balance)*50;
  res += minus10(balance);
  balance -= minus10(balance)*10;
  res += minus5(balance);
  balance -= minus5(balance)*5;
  res += minus1(balance);
  return res;
}

const readerPlC166 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readerPlC166.on("line", (line: string) => {
  linesPlC166.push(line);
});
readerPlC166.on("close", () => {
  // Write your code here
  const num = Number(linesPlC166)
  const res = countCoin(num);
  console.log(res);
});

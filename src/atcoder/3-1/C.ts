function MainCC31(input: string) {
  const result = input.split("\n");
  let a = result[1].split(" ").map(Number);
  if (isDuplicated(a)) {
    const dupNum = a.filter(function (x, i, self) {
      return self.indexOf(x) !== i;
    });
    let count = [];
    let res = 0;
    let ii = 0;
    while (a.indexOf(dupNum[ii]) !== -1) {
      const s = a.findIndex((num) => num === dupNum[ii]);
      a[s] = -1;
      count.push(s);
    }
    res = count[1] - 1 - count[0];
    console.log(res + 2);
    return;
  }
  console.log(-1);
}
const isDuplicated = (elements: number[]): boolean => {
  const setElements = new Set(elements);
  return setElements.size !== elements.length;
};
MainCC31(require("fs").readFileSync("/dev/stdin", "utf8"));
// MainCC31(`10
// 1 1 2 3 5 8 13 21 34 55
// `);

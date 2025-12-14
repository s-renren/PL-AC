process.stdin.resume();
process.stdin.setEncoding("utf8");

const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line: string) => {
  lines.push(line);
});

reader.on("close", () => {
  const [N, x]: [number, number] =
    lines[0].split(" ").map(Number) as [number, number];

  const fish = lines
    .slice(1)
    .map(line => line.split(" ").map(Number)); // [w, r]

  // dp[w] = 重さ w のときの最大美しさ
  const dp = Array(x).fill(0);

  for (let i = 0; i < N; i++) {
    const [w, r] = fish[i];

    // 後ろから更新（同じ魚を2回使わないため）
    for (let weight = x - 1; weight >= w; weight--) {
      dp[weight] = Math.max(dp[weight], dp[weight - w] + r);
    }
  }

  // 重量 < x の中で最大値
  let res = 0;
  for (let w = 0; w < x; w++) {
    res = Math.max(res, dp[w]);
  }

  console.log(res);
});

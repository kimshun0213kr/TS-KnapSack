type Bagage = {
  id: number;
  weight: number;
  value: number;
};

const bagages: Bagage[] = [
  { id: 0, weight: 1, value: 1 },
  { id: 1, weight: 1, value: 2 },
  { id: 2, weight: 2, value: 2 },
  { id: 3, weight: 4, value: 10 },
  { id: 4, weight: 12, value: 4 },
];

const bagAmount = 15;

// DPテーブルを作成
// dp[i][w]でi番目までの荷物で重さwまでに入れられる最大価値を呼び出し可能
const n = bagages.length;
const dp: number[][] = Array.from({ length: n + 1 }, () =>
  Array(bagAmount + 1).fill(0)
);

// DP表を埋める
for (let i = 0; i < n; i++) {
  const { weight, value } = bagages[i];
  for (let w = 0; w <= bagAmount; w++) {
    if (weight <= w) {
      // 入れる or 入れない のどちらが良いか
      dp[i][w] = Math.max(dp[i][w], dp[i][w - weight] + value);
    } else {
      dp[i][w] = dp[i][w];
    }
  }
}

// 最大価値
const maxValue = dp[n][bagAmount];
console.log("最大価値:", maxValue);

// どの荷物を選んだかを復元する
let w = bagAmount;
const chosenIds: number[] = [];

for (let i = n; i > 0; i--) {
  if (dp[i][w] !== dp[i - 1][w]) {
    // i番目の荷物が選ばれた
    chosenIds.push(bagages[i - 1].id);
    w -= bagages[i - 1].weight;
  }
}

console.log("選んだID:", chosenIds.reverse());

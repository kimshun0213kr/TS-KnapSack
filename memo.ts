// type Bagage = {
//   id: number;
//   weight: number;
//   value: number;
// };

// const bagages: Bagage[] = [
//   { id: 0, weight: 1, value: 1 },
//   { id: 1, weight: 1, value: 2 },
//   { id: 2, weight: 2, value: 2 },
//   { id: 3, weight: 4, value: 10 },
//   { id: 4, weight: 12, value: 4 },
// ];

// const bagAmount = 15;

// type Result = {
//   value: number;
//   ids: number[];
// };

// // メモ用変数の定義
// const memo = new Map<string, Result>();

// let keisanCount = 0;

// function knapsack(tmpID: number, amount: number): Result {
//   // メモのチェック
//   const key = `${tmpID}-${amount}`;
//   if (memo.has(key)) {
//     return memo.get(key)!;
//   }
//   if (tmpID >= bagages.length) {
//     return { value: 0, ids: [] };
//   }

//   // その荷物を入れない場合
//   const noPut = knapsack(tmpID + 1, amount);

//   // その荷物を入れる場合
//   let put: Result = { value: -1, ids: [] };
//   if (bagages[tmpID].weight <= amount) {
//     const next = knapsack(tmpID + 1, amount - bagages[tmpID].weight);
//     put = {
//       value: next.value + bagages[tmpID].value,
//       ids: [bagages[tmpID].id, ...next.ids],
//     };
//   }

//   // より価値が高い方を返す
//   if (put.value > noPut.value) {
//     keisanCount++;
//     // メモに値を追加
//     memo.set(key, put);
//     return put;
//   } else {
//     keisanCount++;
//     // メモに値を追加
//     memo.set(key, noPut);
//     return noPut;
//   }
// }

// const result = knapsack(0, bagAmount);

// console.log("最大価値:", result.value);
// console.log("選んだID:", result.ids);
// console.log(memo);
// console.log("計算回数:", keisanCount);

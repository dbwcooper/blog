
// TODO： 这道题没懂
let memo: Record<number, number> = {};

function coinChange(coins: number[], amount: number): number {
  return dp(coins, amount);
}

function dp(coins: number[], amount: number): number {
  if (amount === 0) return 0;
  if (amount < 0) return -1;

  if (typeof memo[amount] === "number") {
    return memo[amount];
  }

  let res: number = Number.MAX_SAFE_INTEGER;
  // 每次找到 最优的 一颗硬币
  for (const coin of coins) {
    let count = dp(coins, amount - coin);
    if (count === -1) continue;
    res = Math.min(res, count + 1);
  }

  memo[amount] = res === Number.MAX_SAFE_INTEGER ? -1 : res;
  return memo[amount];
}

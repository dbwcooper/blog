// const obj: Record<string, number> = {};
// function fib(n: number): number {
//   if (n === 1 || n === 2) return 1;

//   if (obj[n]) {
//     return obj[n];
//   }
//   obj[n] = fib(n - 1) + fib(n - 2);
//   return obj[n];
// }

// function fib(n: number): number {
//   if (n === 1 || n === 2) return 1;

//   const dp: number[] = [];
//   dp[0] = 0;
//   dp[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n];
// }

function fib(n: number): number {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  let dp1 = 0,
    dp2 = 1;
  for (let i = 2; i <= n; i++) {
    let sum = dp1 + dp2;

    dp1 = dp2;
    dp2 = sum;
  }
  return dp2;
}

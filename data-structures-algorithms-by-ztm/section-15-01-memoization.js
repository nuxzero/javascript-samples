// Find the nth number in the Fibonacci sequence.
// O(2^n) time complexity.
let fibCount = 0;
function fibonacci(n) {
  fibCount++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log("count: ", fibCount, "result: ", fibonacci(6)); // 8
console.log("result: ", fibonacci(30)); // 832040
console.log("count: ", fibCount); // 832040

// Find the nth number in the Fibonacci sequence.
// This uses memoization to improve performance by caching results.
// Time complexity is O(n).
let fibMemoCount = 0;
function fibonacciMemo() {
  let cache = {};
  return function fib(n) {
    fibMemoCount++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFib = fibonacciMemo();
// console.log("count: ", fibMemoCount, "result: ", fasterFib(6)); // 8
console.log("result: ", fasterFib(30)); // 832040
console.log("count: ", fibMemoCount); // 832040

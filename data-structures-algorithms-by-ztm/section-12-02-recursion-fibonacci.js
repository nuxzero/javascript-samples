// Given a number n, return the index value of the Fibonacci sequence, where the sequence is:
// 0 1 1 2 3 5 8 13 21 34 55 89 144 ...
// The pattern of the sequence is that each value is the sum of the 2 previous values, that means that for n = 5 → 2 + 3.
// For example, fibonacciRecursive(6) should return 8.
// For example, fibonacciRecursive(8) should return 21.

// O(n) - Linear Time Complexity
function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

// O(2^N) - Exponential Time Complexity
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciIterative(3)); // 2
console.log(fibonacciIterative(8)); // 21
console.log(fibonacciRecursive(8)); // 21

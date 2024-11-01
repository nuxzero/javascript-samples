function findFactorialRecursive(number) {
  if (number <= 2) {
    return number;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;

  if (number === 2) {
    answer = 2;
  }

  for (let i = 2; i <= number; i++) {
    answer *= i;
  }
  return answer;
}

console.log(findFactorialRecursive(1)); // 1
console.log(findFactorialRecursive(5)); // 120
console.log(findFactorialIterative(5)); // 120

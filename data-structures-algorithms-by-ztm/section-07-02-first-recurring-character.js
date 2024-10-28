// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

// Naive solution O(n^2)
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

// Use hash table O(n)
function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    // If value already exists in map, return it otherwise add it to map.
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}

const result = firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
console.log(result);

// const result2 = firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]);
const result2 = firstRecurringCharacter2([2, 5, 5, 1, 2, 3, 5, 1, 2, 4]);
console.log(result2);

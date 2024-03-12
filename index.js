function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }

  return false;
}

// Testing the function
const array = [3, 8, 12, 4, 11, 7];
const target = 10;

console.log(hasTargetSum(array, target)); // Output: true

module.exports = hasTargetSum;

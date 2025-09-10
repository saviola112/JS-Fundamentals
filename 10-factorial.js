// 10-factorial.js
function factorial(n) {
  if (isNaN(n) || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(parseInt(process.argv[2])));---

# JS-Fundamentals — 10-factorial.js

This script computes and prints the factorial of an integer using recursion.

## Usage




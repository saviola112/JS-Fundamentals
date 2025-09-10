// 7-multi_c.js
const arg = process.argv[2];
const n = parseInt(arg, 10);

if (isNaN(n)) {
  console.log('Missing number of occurrences');
} else if (n > 0) {
  let i = 0;
  let out = '';
  while (i < n) {
    out += 'C is fun';
    if (i !== n - 1) out += '\n';
    i++;
  }
  console.log(out);
}

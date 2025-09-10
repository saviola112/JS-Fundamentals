// 8-square.js
const arg = process.argv[2];
const size = parseInt(arg, 10);

if (isNaN(size)) {
  console.log('Missing size');
} else if (size > 0) {
  let row = '';
  for (let i = 0; i < size; i++) {
    row += 'X';
  }
  for (let j = 0; j < size; j++) {
    console.log(row);
  }
}

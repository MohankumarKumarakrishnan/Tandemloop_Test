function countMultiples(arr) {
  const result = {};
  for (let i = 1; i <= 9; i++) {
    result[i] = arr.filter(num => num % i === 0).length;
  }
  console.log(result);
}


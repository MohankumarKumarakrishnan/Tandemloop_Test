function generateSeries2(a) {
  const length = a % 2 === 0 ? a - 1 : a;
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(2 * i + 1);
  }
  console.log(result.join(", "));
}


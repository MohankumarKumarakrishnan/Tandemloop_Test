function generateSeries1(a) {
  const result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }
  console.log(result.join(", "));
}

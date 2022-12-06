const power = (x, n) => {
  if (n === 0) return 1;
  if (x === 1) return x;
  return x * power(x, n - 1);
};

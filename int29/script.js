function calculateSquares(A, B, C) {
  const squaresInLength = Math.floor(A / C);
  const squaresInWidth = Math.floor(B / C);
  const totalSquares = squaresInLength * squaresInWidth;
  const remainingArea = A * B - totalSquares * C * C;

  return {
    squares: totalSquares,
    remainingArea: remainingArea,
  };
}

console.log(calculateSquares(10, 10, 3));
console.log(calculateSquares(5, 7, 2));

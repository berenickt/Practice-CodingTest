// 피보나치 수열
// 1 1 2 3 5 8 13
function fibonacci(x) {
  if (x <= 2) {
    // 무한 루프 방지를 위해 탈출 코드를 작성해야 한다.
    return 1;
  }
  return fibonacci(x - 1) + fibonacci(x - 2);
}
console.log(fibonacci(7)); // 13

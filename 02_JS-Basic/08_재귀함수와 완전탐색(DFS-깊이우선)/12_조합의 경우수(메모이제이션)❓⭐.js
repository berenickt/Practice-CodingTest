/**
 * @param {*} n 자연수 ( 3 <= n <= 33 )
 * @param {*} r 자연수 ( 0 <= r <= n )
 * @returns 재귀를 이용한 조합수
 */
function solution(n, r) {
  let answer = [];
  // 메모이제이션, 모두 0으로 초기화된 35행, 35열 2차원 배열 생성
  let zeroArr = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    // 해당 행렬이 이미 존재하면, 생략
    if (zeroArr[n][r] > 0) return zeroArr[n][r];
    if (n === r || r === 0) return 1;
    else return (zeroArr[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(5, 3)); // 10
console.log(solution(33, 19)); // 818809200

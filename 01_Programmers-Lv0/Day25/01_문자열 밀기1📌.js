/** https://school.programmers.co.kr/learn/courses/30/lessons/120921
 * 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다.
 * @param {*} A
 * @param {*} B
 * @returns A를 밀어서 B가 될 수 있다면 몇 번 밀어야 하는지 횟수
 * -- 밀어서 `B`가 될 수 없으면 -1
 */
function solution(A, B) {
  if (A === B) return 0;

  // arr.slice(인덱스 포함, 인덱스 미포함)
  for (let i = 0; i < A.length; i++) {
    // 뒤에서 첫 번쨰 + 첫 번쨰부터 마지막 전까지
    A = A.slice(-1) + A.slice(0, -1);
    if (A === B) return i + 1;
  }
  return -1;
}

console.log(solution('hello', 'ohell')); // 1
console.log(solution('apple', 'elppa')); // -1

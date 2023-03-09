/** https://school.programmers.co.kr/learn/courses/30/lessons/120897
 * @param {*} n 정수
 * @returns n의 약수를 오름차순으로 담은 배열
 */
function solution(n) {
  // (1부터 n만큼의 요소를 가진 새 배열을 생성).(요소로 나눈 값이 0인 값)
  return Array.from({ length: n }, (_, i) => i + 1).filter((el) => n % el === 0);
}

console.log(solution(24)); // [1, 2, 3, 4, 6, 8, 12, 24]

// 아래 두 구문은 동일
// console.log(Array.from({ length: n }, (_, i) => i + 1));
// console.log(Array.from(Array(n), (_, i) => i + 1));

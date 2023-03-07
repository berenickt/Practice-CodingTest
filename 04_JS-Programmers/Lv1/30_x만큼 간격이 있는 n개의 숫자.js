/** https://school.programmers.co.kr/learn/courses/30/lessons/12954
 * 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴
 * @param {*} x
 * @param {*} n
 * @returns
 *
 * x의 배수를 n개 나열하면 됩니다.
 * 2와 5면 [2,4,6,8,10]이고 -4와 2면 [-4,-8]입니다.
 */
function solution(x, n) {
  return Array.from(Array(n), (_, index) => x * (index + 1));
}

function solution2(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

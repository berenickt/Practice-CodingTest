/** https://school.programmers.co.kr/learn/courses/30/lessons/120871
 * 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다.
 * @param {*} n 정수
 * @returns n을 3x 마을에서 사용하는 숫자로 바꿔 return
 */
function solution(n) {
  let num = 0;
  let count = 0;

  while (count < n) {
    num += 1;
    if (!('' + num).includes('3') && num % 3 !== 0) count += 1;
  }

  return num;
}

console.log(solution(15)); //  25
console.log(solution(40)); //  76

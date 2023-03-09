/** https://school.programmers.co.kr/learn/courses/30/lessons/12947
 * 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
 * e.g. 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수
 * 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수
 *
 * e.g. 10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수
 * e.g. 12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수
 * e.g. 11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아님
 * e.g. 13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아님
 * @param {*} x
 * @returns
 * 1. 자릿수를 쪼개서 더하기 : split과 reduce
 */
function solution(x) {
  const sum = x
    .toString() // 문자열로 변환
    .split('') // 문자 단위로 쪼개기
    .map((x) => parseInt(x)) // 각 배열 요소를 숫자로
    .reduce((acc, curr) => acc + curr); // 각 배열 요소 더하기
  return x % sum === 0;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));

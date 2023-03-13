/** https://school.programmers.co.kr/learn/courses/30/lessons/12947
 * @param {*} x 양의 정수
 * @returns 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사
 * 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
 * e.g. 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수
 */
function solution(x) {
  // 자릿수의 합의 총 값을 저장하는 변수
  let sum = 0;

  // 숫자 타입의 x 값을 문자열 타입으로 변환
  x = String(x);
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }

  // 조건식을 리턴 : 나머지 값이 없다면 true, 있다면 false
  return x % sum === 0;
}

// **** reduce
function solution2(x) {
  // 자릿수의 합의 총 값을 저장하는 변수
  const sum = x
    .toString()
    .split('')
    .reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0);
  return x % sum === 0;
}

console.log(solution(121)); // 144
console.log(solution(3)); // -1

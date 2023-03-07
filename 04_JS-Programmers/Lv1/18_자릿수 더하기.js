/** https://school.programmers.co.kr/learn/courses/30/lessons/12931
 * 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return
 * e.g. N = 123이면 1 + 2 + 3 = 6을 return
 * @param {*} num
 * @returns
 *
 * 숫자 방법
 */
function solution(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

// **** 문자 방법, String(n)
function solution2(n) {
  // (문자).(문자 단위로 배열).(각 요소를 정수로 변환한 후 더한 누적 결과값 반)
  return String(n)
    .split('')
    .reduce((acc, item) => (acc += parseInt(item)), 0);
}

// **** 문자 방법, (n + '')
function solution3(n) {
  // (n + '')하면 ''은 빈문자열이기 때문에 연겨랳도 반환값에 영향X
  // 따라서 문자열로 형변환함
  // 즉, String(n)과 동일
  return (n + '').split('').reduce((acc, curr) => acc + parseInt(curr), 0);
}

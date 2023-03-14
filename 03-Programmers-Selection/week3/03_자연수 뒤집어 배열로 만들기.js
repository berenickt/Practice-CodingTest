/** https://school.programmers.co.kr/learn/courses/30/lessons/12932
 * @param {*} n  자연수
 * @returns 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴
 * e.g. 12345  ->	 [5,4,3,2,1]
 *
 * reverse() 사용
 */
function solution(n) {
  const answer = [];
  // 숫자 타입의 데이터를 문자열 타입으로 변환
  n = String(n);

  for (let i = 0; i < n.length; i++) {
    answer.push(Number(n[i]));
  }
  answer.reverse();

  return answer;
}

// **** for 사용
function solution2(n) {
  const answer = [];
  // 숫자 타입의 데이터를 문자열 타입으로 변환
  n = String(n);

  // 최초식 : n의 length 값이 5를 가지면, 최초식의 인덱스 값은 4부터
  // 조건식 : 인덱스의 0번째 까지 ( 0번째를 포함 )
  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(Number(n[i]));
  }

  return answer;
}

// **** map 사용
function solution3(n) {
  return String(n)
    .split('')
    .reverse()
    .map(el => Number(el));
}

console.log(solution(12345)); // [5, 4, 3, 2, 1]

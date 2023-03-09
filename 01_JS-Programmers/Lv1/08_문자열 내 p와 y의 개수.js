/** https://school.programmers.co.kr/learn/courses/30/lessons/12916
 * 1. 문자열을 배열로 만들어서 각 단어가 p나 P인지, 또는 y나 Y인지를 찾아서 개수 세기
 * 2. 개수 비교 후 같으면 true, 다르면 false
 */
function solution(s) {
  const p = s.toLowerCase().split('p').length;
  const y = s.toLowerCase().split('y').length;
  return p === y ? true : false;
}

/** 정규식으로 푸는 법
 * - g는 모두 찾기
 * - i는 대소문자 구분 안함
 * - (참고) replace대신 match를 쓰면, 문자열에 p와 y가 없는 경우 에러 발생함
 * 1. 정규표현식으로 p와 y의 개수 찾기
 * 2. 개수 비교 후 같으면 true, 다르면 false
 */
function solution2(s) {
  return s.replace(/p/gi).length == s.replace(/y/gi).length;
}

console.log(solution('pPoooyY'));

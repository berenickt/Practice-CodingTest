/** https://school.programmers.co.kr/learn/courses/30/lessons/12915
 * 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
 * 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하는 함수
 * @param {*} strings
 * @param {*} n
 * @returns
 *
 * **** localeCompare : 사전순으로 정렬
 * 지정된 문자열이 정렬상 string 객체의 문자열 뒤에 있으면 음수
 * 그 반대의 경우는 양수
 * 동등한 경우에는 0을 반환
 */
function solution(strings, n) {
  return strings.sort((s1, s2) => (s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])));
}

// sort로 직접 사전순으로 정렬 구현
function solution2(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] < b[n]) return -1;
    if (a[n] > b[n]) return 1;
    if (a[n] === b[n]) return a < b ? -1 : 1;
    return 0;
  });
}

console.log(solution(['sun', 'bed', 'car'], 1));

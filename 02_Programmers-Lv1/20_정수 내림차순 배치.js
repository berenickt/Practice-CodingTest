/** https://school.programmers.co.kr/learn/courses/30/lessons/12933
 * 함수 solution은 정수 n을 매개변수로 입력받습니다.
 * n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴
 * e.g. n이 118372면 873211을 리턴
 *
 * @param {*} n
 * @returns
 */
function solution(n) {
  return parseInt(
    n
      .toString() // 문자열로 변환
      .split('') // 문자 단위로 쪼개기
      .sort((a, b) => b - a) // 내림차순
      .join('') // 문자 합치기
  );
}

console.log(solution(118372));

/**
 * 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면
 * 이 세 막대로 삼각형을 만들 수 있으면 "YES"를 출력하고,
 * 만들 수 없으면 "NO"를 출력
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @returns
 * 삼각형을 만들려면, 가장 긴 선의 길이보다 나머지 2개의 길이가 커야 함
 * 1. 주어진 3개의 수 중 최대값 찾기
 * 2. 최대값(가장 긴 선)이 나머지 2개 길이보다 작으면 NO
 */
function solution(a, b, c) {
  let answer = 'YES';
  let max = 0;
  let sum = a + b + c;

  // 1. 주어진 3개의 수 중 최대값 찾기
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  // 2. 최대값(가장 긴 선)이 나머지 2개 길이보다 작으면 NO
  if (sum - max <= max) answer = 'NO';
  return answer;
}

console.log(solution(6, 7, 11)); // 6 + 7 > 11이니 YES
console.log(solution(13, 33, 17)); // 13 + 17 < 33이니 NO

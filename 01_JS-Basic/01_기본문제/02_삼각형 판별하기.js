/**
 * 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면
 * 이 세 막대로 삼각형을 만들 수 있으면 "YES"를 출력하고,
 * 만들 수 없으면 "NO"를 출력
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @returns
 */
function solution(a, b, c) {
  let answer = 'YES',
    max;
  let tot = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (tot - max <= max) answer = 'NO';
  return answer;
}

console.log(solution(13, 33, 17));

/** https://school.programmers.co.kr/learn/courses/30/lessons/42746
 *
 * @param {*} numbers
 * @returns
 *
 * 정렬 문제이나, Greedy한 시각도 필요
 * 매 sort시 최선의 선택
 */
function solution(numbers) {
  if (numbers.every((v) => v === 0)) return '0';

  return numbers
    .sort((a, b) => {
      a = String(a);
      b = String(b);
      return parseInt(a + b) > parseInt(b + a) ? -1 : 1;
    })
    .join('');
}

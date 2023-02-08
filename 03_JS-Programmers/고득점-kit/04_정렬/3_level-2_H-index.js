/** https://school.programmers.co.kr/learn/courses/30/lessons/42747
 *
 * @param {*} citations
 * @returns
 *
 * 큰 순서대로 정렬한 후,
 * i를 올려가며 h인덱스의 조건을 만족하는지 검증
 *
 * h이상의 요소를 따로 count할 필요가 없는데
 * 그 이유는, i를 1씩 올리는 것 자체가 count를 담고 있기 때문
 */
function solution(citations) {
  const sorted = citations.filter((a) => a > 0).sort((a, b) => b - a);
  let i = 0;
  for (i = 0; i < sorted.length; i++) {
    if (i + 1 >= sorted[i]) break;
  }
  return i;
}

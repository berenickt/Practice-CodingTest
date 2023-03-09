/** https://school.programmers.co.kr/learn/courses/30/lessons/120842
 * @param {*} num_list 정수 배열
 * @param {*} n 정수
 * @returns
 */
function solution(num_list, n) {
  let answer = [];

  // 길이만큼 반복
  while (num_list.length) {
    // (새 배열에 넣기).(0번 인덱스에 n개 요소 대체)
    answer.push(num_list.splice(0, n));
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));

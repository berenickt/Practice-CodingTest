/** https://school.programmers.co.kr/learn/courses/30/lessons/120850
 * @param {*} my_string 문자열
 * @returns `my_string` 안에 있는 숫자만 골라 오름차순 정렬한 리스트
 */
function solution(my_string) {
  return my_string
    .match(/[0-9]/g) // 숫자만 찾아서
    .map((str) => +str) // 새 배열로 대응
    .sort((a, b) => a - b); // 오름차순
}

console.log(solution('hi12392')); // 1, 2, 3, 9, 2를 오름차순 정렬한 [1, 2, 2, 3, 9]

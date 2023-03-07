/** https://school.programmers.co.kr/learn/courses/30/lessons/12906
 * [1,1,3,3,0,1,1]이면 [1,3,0,1]로 연속되는 중복을 제거하는 문제
 */
function solution(arr) {
  return arr.filter((el, i) => el !== arr[i + 1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));

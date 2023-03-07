/** https://school.programmers.co.kr/learn/courses/30/lessons/12935
 *
 * @param {*} arr
 * @returns
 *
 * 1. arr에서 가장 최솟값의 위치를 찾아
 * 2. 해당 위치의 값을 삭제
 * 3. 배열에 값이 있다면 ? r : -1
 * - arr.length가 참이라면 = arr.length에 값이 있다면
 */
function solution(arr) {
  const min = Math.min(...arr);
  const r = arr.filter((v) => v !== min);
  return r.length ? r : [-1];
}

console.log(solution([4, 3, 2, 1])); // [ 4, 3, 2 ]

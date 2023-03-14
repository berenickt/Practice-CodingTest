/** https://school.programmers.co.kr/learn/courses/30/lessons/120812
 * 주어진 값 중에서 가장 자주 나오는 값(최빈값) 구하기
 * @param {*} array 숫자 배열
 * @returns 최빈값, 최빈값이 여러 개면 -1
 */
function solution(array) {
  const hash = new Map();

  // Map객체에 값이 있으면
  array.forEach((element) => {
    if (hash.has(element)) hash.set(element, hash.get(element, 1) + 1);
    else hash.set(element, 1); // 값이 없다면
  });

  console.log(hash);

  const max = Math.max(...hash.values());
  // console.log(max);
  const answer = Array.from(hash).filter((item) => item[1] === max);

  // return answer.length > 1 ? -1 : answer[0][0];
}

console.log(solution([1, 2, 3, 3, 3, 4])); // 3
// console.log(solution([1, 1, 2, 2])); // -1
// console.log(solution([1])); // 1

/** https://school.programmers.co.kr/learn/courses/30/lessons/120923
 * 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다
 * @param {*} num 정수
 * @param {*} total 정수
 * @returns 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return
 */
function solution(num, total) {
  let min = Math.ceil(total / num - Math.floor(num / 2));
  let max = Math.floor(total / num + Math.floor(num / 2));

  return new Array(max - min + 1).fill(0).map((el, i) => {
    return i + min;
  });
}

// num = 3, total = 12인 경우 [3, 4, 5]를 return
console.log(solution(3, 12)); // [3, 4, 5]
console.log(solution(5, 15)); // [1, 2, 3, 4, 5]
console.log(solution(4, 14)); // [2, 3, 4, 5]
console.log(solution(5, 5)); // [-1, 0, 1, 2, 3]

/** https://school.programmers.co.kr/learn/courses/30/lessons/120809
 * @param {*} numbers 배열
 * @returns 각 원소에 두배한 원소를 가진 배열
 * 1. numbers에서 원소를 꺼내야함
 * 2. 원소를 꺼내 2배를 한 후 새 배열에 넣어줘야 함
 */
function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    answer.push(numbers[i] * 2);
  }

  return answer;
}
console.log(solution([1, 2, 3, 4, 5])); // [ 2, 4, 6, 8, 10 ]

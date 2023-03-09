/** https://school.programmers.co.kr/learn/courses/30/lessons/12944
 * 정수를 담고 있는 배열 arr의 평균값을 return하는 함수
 * @param {*} array
 * @returns
 *
 * 평균, 곱, 합 등등 뭔가 쌓이는 것들은 다 reduce로 하면 깔끔
 */
function solution(array) {
  return array.reduce((acc, curr) => acc + curr) / array.length;
}

console.log(solution([1, 2, 3, 4])); // 2.5

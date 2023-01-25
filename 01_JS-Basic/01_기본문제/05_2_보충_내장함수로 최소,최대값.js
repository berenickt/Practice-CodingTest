/**
 * 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램
 * @param {*} arr 7개의 수가 들어있는 배열
 * @returns 그 숫자 중 가장 작은 수
 */
function solution(arr) {
  let answer = Math.min(...arr); // 최소값찾아줌, 인자는 숫자 형태로
  console.log(Math.max(...arr));
  console.log(Math.min.apply(null, arr)); // 인자는 (객체, 배열)
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

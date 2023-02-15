/**
 * 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램
 * cf. 단 재귀함수를 이용해서 출력
 * @param {*} num  1 <= N <= 1,000의 정수
 * @returns
 */
function solution(num) {
  let answer = '';

  function DFS(num) {
    if (num === 0) return;
    else {
      DFS(parseInt(num / 2)); // 몫
      answer += String(num % 2); // 나머지
    }
  }

  DFS(num);
  return answer;
}

console.log(solution(11)); // 1011

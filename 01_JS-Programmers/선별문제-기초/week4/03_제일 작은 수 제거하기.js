/** https://school.programmers.co.kr/learn/courses/30/lessons/12935
 * @param {*} arr 1차원 정수 배열
 * @returns arr 에서 가장 작은 수를 제거한 배열
 *          cf. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴
 */
function solution(arr) {
  const answer = [];

  // 1. 제일 작은 수 찾기
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  // 2. 제일 작은 수를 제외한 숫자만 배열에 추가
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }

  // 빈 배열인지를 체크한 후
  // 빈 배열일 경우에는 배열에 -1을 담아서 리턴
  // 빈 배열이 아닐 경우에는 2번째 과정의 배열을 리턴
  return answer.length === 0 ? [-1] : answer;
}

function solution2(arr) {
  // 배열 안에서 제일 작은 값을 저장
  const min = Math.min(...arr);

  // 제일 작은 위치의 값을 삭제
  const answer = arr.filter(num => num !== min);

  return answer.length === 0 ? [-1] : answer;
}

console.log(solution([4, 3, 2, 1])); // [4, 3, 2]
console.log(solution([10])); // [-1]

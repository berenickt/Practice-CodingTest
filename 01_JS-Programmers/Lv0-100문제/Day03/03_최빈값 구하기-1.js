/** https://school.programmers.co.kr/learn/courses/30/lessons/120812
 * 1. 앞에서부터 차례대로 원소를 확인하며 갯수를 센다.
 * 2. 최빈값을 그떄그떄 기록한다.
 */
function solution(array) {
  let sortedArray = array.sort((a, b) => a - b);
  let cnt = 0;
  let mode = -1; // 최빈값
  let modeRepeatCnt = 0; // 최빈값이 될 떄 몇번 반복해서 된건지
  let repeatCnt = 0; // 현재 똑같은 숫자가 몇번 등장했는지
  let beforeNumber = -1; // 지금 보고있는 숫자 이전 숫자
  let isDupMode = false;

  while (cnt < array.length) {
    // 이전 숫자랑 지금 숫자랑 다르면 -> 경계면을 넘음 -> 반복횟수 1
    if (beforeNumber !== array[cnt]) {
      repeatCnt = 1;
    } else {
      // 같은 숫자가 반복되는 경우
      repeatCnt = repeatCnt + 1;
    }

    // 중복이 되는 경우
    if (repeatCnt === modeRepeatCnt) {
      if (mode !== array[cnt]) {
        isDupMode = true;
      }
    }

    // 새로운 최빈값이 등장할 떄,
    if (repeatCnt > modeRepeatCnt) {
      mode = array[cnt]; // 최빈값을 현재값으로 바꿔주고
      modeRepeatCnt = repeatCnt; // 최빈값 반복 횟수가 지금 반복 횟수
      isDupMode = false;
    }

    beforeNumber = array[cnt];
    cnt = cnt + 1;
  }
  if (isDupMode) return -1;
  return mode;
}

console.log(solution([1, 2, 3, 3, 3, 4]));

/**
 * A, B 두 사람이 가위바위보 게임을 합니다.
 * 총 N번의 게임을 하여
 * A가 이기면 A를 출력하고,
 * B가 이기면 B를 출력합니다.
 * 비길 경우에는 D를 출력합니다.
 *
 * cf. 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보
 * 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램
 *
 * e.g.
 * | A의 정보 | 2    | 3    | 3    | 1    | 3    |
 * | -------- | ---- | ---- | ---- | ---- | ---- |
 * | B의 정보 | 1    | 1    | 2    | 2    | 3    |
 * | 승자     | A    | B    | A    | B    | D    |
 * @param {*} a A가 낸 가위, 바위, 보 정보 배열
 * @param {*} b B가 낸 가위, 바위, 보 정보 배열
 * @returns
 */
function solution(a, b) {
  let answer = '';

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += 'D '; // 비긴 경우
    // ** A가 이기는 경우
    else if (a[i] === 1 && b[i] === 3) answer += 'A '; // A(가위) && B(보)인 경우
    else if (a[i] === 2 && b[i] === 1) answer += 'A '; // A(바위) && B(가위)인 경우
    else if (a[i] === 3 && b[i] === 2) answer += 'A '; // A(보) && B(바위)인 경우
    // ** 그외에는 B가 이기는 경우
    else answer += 'B ';
  }

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));

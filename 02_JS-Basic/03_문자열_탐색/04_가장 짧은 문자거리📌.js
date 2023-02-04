/**
 * 한 개의 문자열 s와 문자 t가 주어지면,
 * 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램
 *
 * cf. 문자는 소문자로만 주어지며, 문자열의 길이는 100문자를 넘지 않음
 * @param {*} string 문자열
 * @param {*} target 문자 1개
 * @returns e와 떨어진 위치가 적혀있는 배열
 *
 * e.g. 입력 t e a c h e r m o d e
 * e.g. 출력 1 0 1 2 1 0 1 2 2 1 0
 */
function solution(string, target) {
  let answer = [];

  // **** string 각각의 문자와 target의 거리를 카운팅 해줄 변수
  // 가장 첫번째 문자인 't'에는 왼쪽 타켓 문자인 'e'가 없기 때문
  // 이 왼쪽 타켓 문자("target")와의 거리를 대충 큰 숫자로 정하여
  // 오른쪽 타켓 문자와의 거리가 채택되게 하려고 적당히 큰 숫자인 1000으로 할
  let p = 1000;

  // **** 왼쪽에서 오른쪽으로 순회
  // target를 만나면 0으로 초기화하고, 정답 배열에 추가
  // target이 아니면 p++하고, 정답 배열에 추가
  for (let x of string) {
    if (x === target) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 1000;

  // **** 오른쪽에서 왼쪽으로 순회
  for (let i = string.length - 1; i >= 0; i--) {
    // console.log('우에서 좌로 순회했을 떄 i : ', string[i]);
    if (string[i] === target) p = 0;
    else {
      p++;
      // 왼쪽 순회와 오른쪽 순회를 비교해서 더 작은 값을 넣기
      answer[i] = Math.min(answer[i], p);
      // console.log(answer[i]); // 1 2 2 1 1 2 1 1
      // console.log(p);         // 1 2 3 4 1 2 3 1
    }
  }
  return answer; // 1, 0, 1, 2, 1, 0, 1, 2, 2, 1
}

console.log(solution('teachermode', 'e'));

/** https://school.programmers.co.kr/learn/courses/30/lessons/120839
 * 가위 = 2 | 바위 = 0 | 보 = 5
 * @param {*} rsp 가위 바위 보를 내는 순서대로 나타낸 문자열
 * @returns rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열
 */
function solution(rsp) {
  const win = {
    0: 5, // 바위 -> 보
    2: 0, // 가위 -> 바위
    5: 2, // 보 -> 가위
  };
  // (새 배열로 입력값을 받아서).(순회).(합치기)
  return [...rsp].map((num) => win[num]).join('');
}

// console.log(solution('2'));

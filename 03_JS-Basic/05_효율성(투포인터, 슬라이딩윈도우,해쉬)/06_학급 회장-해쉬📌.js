/** Hash Map
 * 학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
 * 투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며,
 * 선생님은 그 기호를 발표하고 있습니다.
 * 선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램
 *
 * cf. 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정
 * @param {*} voteResult N개의 투표용지에 각 후보의 기호가 선생님이 발표한 순서대로 적힌 문자열
 * @returns 가장 value가 많은 key = 회장
 */
function solution(voteResult) {
  let answer;
  let hash = new Map();

  for (let element of voteResult) {
    // 해시에 값이 있다면, 삽입(요소, 기존요소+1)
    if (hash.has(element)) hash.set(element, hash.get(element) + 1);
    else hash.set(element, 1);
  }

  let max = Number.MIN_SAFE_INTEGER; // 최소값으로 해야 첫 번쨰 값이 들어감

  for (let [key, val] of hash) {
    // console.log(key, val); B->3 A->3 C->5 D->2 E->2
    if (val > max) {
      // console.log(val); // 3 5
      max = val;
      answer = key;
    }
  }
  return answer;
}

console.log(solution('BACBACCACCBDEDE'));

/** Map 객체
 * set으로 맵 객체 삽입
 * get으로 맵 객체 조회
 * has로 해당 요소 존재 여부를 불리언 값으로 반환
 * delete로 삭제
 * clear로 맵 안의 프로퍼티 전부삭제
 */

/** 풀이, https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * - sort로도 해결할 수 있지만 sort를 사용하면 O(NlogN) 시간이 걸리는 반면,
 * - 해시(Map)로 풀면 O(N) 시간이 걸림
 * @param {*} participant // 참가자 배열
 * @param {*} completion // 완주자 배열
 * @returns // 완주하지 못한 참가자
 */
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  let i = 0;
  while (1) {
    if (participant[i] !== completion[i]) return participant[i];
    i++;
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));

/** https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * @param {*} participant 마라톤에 참여한 선수들의 이름이 담긴 배열
 * @param {*} completion 완주한 선수들의 이름이 담긴 배열
 * @returns 완주하지 못한 선수의 이름
 */
function solution(participant, completion) {
  participant.sort(); // 참가자 명단을 오름차순으로 정렬
  completion.sort(); // 완주자 명단을 오름차순으로 정렬

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      // 참가자 명단과 완주자 명단을 비교했을 때
      // 완주자 명단에 없는 참가자를 찾은 후, 바로 반복문을 종료
      return participant[i];
    }
  }
}

// **** filte
function solution2(participant, completion) {
  participant.sort(); // 참가자 명단을 오름차순으로 정렬
  completion.sort(); // 완주자 명단을 오름차순으로 정렬

  const answer = participant.filter((name, i) => name !== completion[i]);
  return answer[0];
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // leo
// console.log(solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola']));
// console.log(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']));

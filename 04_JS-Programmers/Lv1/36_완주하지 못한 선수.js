/** https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * @param {*} participant // 참가자 배열
 * @param {*} completion // 완주자 배열
 * @returns // 완주하지 못한 참가자
 *
 * - sort로도 해결할 수 있지만 sort를 사용하면 O(NlogN) 시간이 걸리는 반면,
 * - 해시(Map)로 풀면 O(N) 시간이 걸린
 * 1. 참가자 배열을 순회하면서 이름이 나온 횟수를 map에 저장
 * 2. 완주자 배열을 순회하면서 이름이 나온 횟수만큼 map의 value에서 뺀다
 * 3. 최종적으로 완주하지 못한 선수의 이름의 value는 1이고 나머지 이름은 모두 0이 된다.
 * 4. map을 순회하면서 value가 1인 값의 key(이름)를 출력
 */
function solution(participant, completion) {
  const map = new Map();

  participant.forEach((name) => map.set(name, (map.get(name) || 0) + 1));
  completion.forEach((name) => map.set(name, (map.get(name) || 0) - 1));

  for (const [name, value] of map) {
    if (value) {
      return name;
    }
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));

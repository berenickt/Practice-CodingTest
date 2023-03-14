/** 풀이, https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * - sort로도 해결할 수 있지만 sort를 사용하면 O(NlogN) 시간이 걸리는 반면,
 * - 해시(Map)로 풀면 O(N) 시간이 걸림
 * @param {*} participant 참가자 배열
 * @param {*} completion 완주자 배열
 * @returns 완주하지 못한 참가자
 *
 * participant(참가자) 배열과 completion(완주자) 배열의 비교해서 남는 배열 요소를 출력
 * 1. 참가자 배열을 순회하면서 이름이 나온 횟수를 map에 저장
 * 2. 완주자 배열을 순회하면서 이름이 나온 횟수만큼 map의 value에서 뺀다
 * 3. 최종적으로 완주하지 못한 선수의 value는 1이고 나머지 이름은 모두 0이 된다.
 * 4. map을 순회하면서 value가 1인 값의 key(이름)를 출력
 */
function solution(participant, completion) {
  const hash = new Map();

  // 동명이인이 있을 수 있기 때문에
  // 참가자 hash에 ([key: 참가자 이름], [(value: 이미 추가한 key가 있다면 해당 값에 +1 아니면 0) + 1])
  // 완주한 선수의 value는 0, 완주하지 못한 선수의 value는 0보다 큰 값을 가짐
  participant.forEach((name) => hash.set(name, (hash.get(name) || 0) + 1));
  completion.forEach((name) => hash.set(name, (hash.get(name) || 0) - 1));

  // hash변수에 담겨있는 Map을 순회하면서 value가 0보다 큰 key(참가자)를 걸러내면 해당 key(참가자)가 완주하지 못한 선수로 판별
  for (const [name, value] of hash) {
    if (value) {
      return name;
    }
  }
}
console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));

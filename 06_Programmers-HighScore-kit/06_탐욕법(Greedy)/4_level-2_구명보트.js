/** https://school.programmers.co.kr/learn/courses/30/lessons/42885
 *
 * @param {*} people
 * @param {*} limit
 * @returns
 *
 * 비교적 무거운 사람을 우선순위
 * 오름차순으로 정렬하여, pop()한 사람을 먼저 태우고, 그 위에 가벼운 사람을 가능한 실어서 출발시킬 것
 */
function solution(people, limit) {
  let boat = 0;
  let sum = 0;

  people.sort((a, b) => a - b);

  while (people.length > 0) {
    if (sum === 0) {
      boat++;
      sum += people.pop();
    } else {
      while (sum < limit) {
        if (people[0] && sum + people[0] <= limit) sum += people.shift();
        else break;
      }
      sum = 0;
    }
  }
  return boat;
}

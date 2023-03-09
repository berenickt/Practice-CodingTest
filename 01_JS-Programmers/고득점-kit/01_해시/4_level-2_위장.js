/** https://school.programmers.co.kr/learn/courses/30/lessons/42578
 * 해시 set에 모든 경우를 충분히 넣어주고 경우의 수를 계산
 * @param {*} clothes 스파이가 가진 의상들이 담긴 2차원 배열
 * @returns 서로 다른 옷의 조합의 수
 * cf. clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어짐
 */
function solution(clothes) {
  const map = new Map();

  for (let style of clothes) {
    console.log(map.set(style[1], map.get(style[1]) + 1));
    // [의상의종류]가 있다면, 추가(의상의종류, 찾기[의상의종류] + 1)
    if (map.has(style[1])) map.set(style[1], map.get(style[1]) + 1);
    else map.put(style[1], 1);
  }

  let answer = 1;
  for (let [key, value] of map) answer *= value + 1;

  return answer - 1;
}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
); // 5

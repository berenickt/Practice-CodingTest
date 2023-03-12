/** https://school.programmers.co.kr/learn/courses/30/lessons/42578
 * 해시 set에 모든 경우를 충분히 넣어주고 경우의 수를 계산
 * @param {*} clothes 스파이가 가진 의상들이 담긴 2차원 배열
 * @returns 서로 다른 옷의 조합의 수
 * cf. clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어짐
 *
 * 각 종류마다 의상의 수에 안입는 경우(1)를 더해 곱해주고, 모두 입지 않는 경우(1)를 빼서 return
 */
function solution(clothes) {
  let answer = 1;
  const hash = new Map();

  for (let style of clothes) {
    // [의상의종류]가 있다면, 추가(의상의종류, 찾기[의상의종류] + 1)
    if (hash.has(style[1])) hash.set(style[1], hash.get(style[1]) + 1);
    // 없다면, 추가(의상의종류, 1)
    else hash.set(style[1], 1);
  }

  // [의상의종류키, 나온횟수]
  for (let [key, value] of hash) answer *= value + 1;

  // 최소 1개 이상은 입으므로 아예 입지 않는 경우 1을 빼준다
  return answer - 1;
}

console.log(
  solution([
    // [의상의 이름, 의상의 종류]
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
); // 5

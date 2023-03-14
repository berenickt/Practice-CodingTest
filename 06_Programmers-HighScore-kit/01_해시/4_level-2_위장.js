/** https://school.programmers.co.kr/learn/courses/30/lessons/42578
 * 해시 set에 모든 경우를 충분히 넣어주고 경우의 수를 계산
 * @param {*} clothes 스파이가 가진 의상들이 담긴 2차원 배열
 * @returns 서로 다른 옷의 조합의 수
 * cf. clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어짐
 *
 * 풀이
 * 1. 종류별로 분류 - 옷을 종류별로 구분
 * 2. 입지 않는 경우 추가 - 종류별로 하나씩 입지 않아도 되니, 입지 않아도 되는 경우를 추가
 * 3. 전체 조합 - 전체 조합을 계산하고, 아무것도 입지 않는 경우의 수를 빼준다.
 *
 * 종류별로 경우의 수를 구할 떄는 Hash를 사용하는 것이 편리합니다.
 */
function solution(clothes) {
  let answer = 1;
  const hash = new Map();

  // **** 1. 종류별로 분류
  for (let [value, key] of clothes) {
    // 추가(키, 키가 있으면 기존 키 + 1 || 키가 없으면 1로 초기화)
    hash.set(key, hash.get(key) + 1 || 1);
  }

  // **** 2. 입지 않는 경우 추가
  for (let [key, value] of hash) {
    // console.log(`${key}는 ${value}개 있다!`);
    answer *= value + 1;
  }

  // **** 3. 최소 1개 이상은 입으므로 아예 입지 않는 경우 1을 빼준다
  return answer - 1;
}

console.log(
  solution([
    // [의상의 이름, 의상의 종류]
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ]),
); // 5

/*** Map 객체
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map
 * has() : 존재하는지 확인
 * get() : 찾기
 * set() : 추가
 * delete() : 삭제
 * clear() : 전부삭제
 */

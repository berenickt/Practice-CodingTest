/** Hash Map
 * Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만,
 * 그 구성이 일치하면 두 단어는 아나그램이라고 합니다.
 *
 * 예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만
 * 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다.
 *
 * 즉, 어느 한 단어를 재배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.
 * 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램
 *
 * cf. 아나그램 판별시 대소문자가 구분
 * cf. 단어의 길이는 100을 넘지 않음
 * @param {*} str1 문자열1
 * @param {*} str2 문자열2
 * @returns 아나그램이면 'YES', 아니면 'NO'
 */
function solution(str1, str2) {
  let answer = 'YES';
  let hash = new Map();

  for (let element of str1) {
    // 해시에 값이 있다면, 삽입(요소, 기존요소+1)
    if (hash.has(element)) hash.set(element, hash.get(element) + 1);
    // 해시(요소, 1)
    else hash.set(element, 1);
  }
  // console.log(hash); // A->2 b->1 a->1 e->2 c->1

  for (let element of str2) {
    // 해시에 값이 없거나 0이면
    if (!hash.has(element) || hash.get(element) === 0) return 'NO';
    // 해시(요소, 요소-1)
    hash.set(element, hash.get() - 1);
  }
  // console.log(hash); // A->NaN b->NaN a->NaN e->NaN c->NaN

  return answer;
}

console.log(solution('AbaAeCe', 'baeeACA'));

/** Map 객체
 * set으로 맵 객체 삽입
 * get으로 맵 객체 조회
 * has로 해당 요소 존재 여부를 불리언 값으로 반환
 * delete로 삭제
 * clear로 맵 안의 프로퍼티 전부삭제
 */

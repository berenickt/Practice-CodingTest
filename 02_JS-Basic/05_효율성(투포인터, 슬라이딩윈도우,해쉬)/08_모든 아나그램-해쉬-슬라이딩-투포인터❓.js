/** Hash & Sliding Window & Two Pointers
 * S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램
 * cf. 아나그램 판별시 대소문자가 구분됨
 * cf. 부분문자열은 연속된 문자열이어야 함
 *
 * cf. 1번쨰 문자열의 길이는 10,000을 넘지 않으며, 2번쨰 문자열은 S문자열보다 길이가 작거나 같음
 * @param {*} s
 * @param {*} t
 * @returns
 */
function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();

  // **** 해쉬
  for (let element of t) {
    // 해시에 값이 있다면, 삽입(요소, 기존요소+1)
    if (tH.has(element)) tH.set(element, tH.get(element) + 1);
    // 해시(요소, 1)
    else tH.set(element, 1);
  }
  // console.log(tH); // 'a' => 1, 'b' => 1, 'c' => 1

  let len = t.length - 1;

  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  // console.log(sH); // { 'b' => 1, 'a' => 1 }

  // **** 슬라이딩 윈도우
  let left = 0;

  for (let right = len; right < s.length; right++) {
    if (sH.has(s[right])) sH.set(s[right], sH.get(s[right]) + 1);
    else sH.set(s[right], 1);

    // 두 Map이 같으면 경우의수++
    if (compareMaps(sH, tH)) answer++;

    // 기존 값을 가져와서 -1
    sH.set(s[left], sH.get(s[left]) - 1);

    // 가져올려는 값이 0이면, 삭제
    if (sH.get(s[left]) === 0) sH.delete(s[left]);
    left++;
  }
  return answer;
}

// **** 두 Map을 비교
// 두 Map의 크기가 다르면 false
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;

  // **** 키, 값이 정확하게 같은지 비교
  // map1의 키가 map2에도 있으면 참, 없으면 거짓
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }

  return true;
}
console.log(solution('bacaAacba', 'abc')); // 3

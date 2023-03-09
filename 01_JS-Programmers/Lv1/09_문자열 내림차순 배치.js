/** https://school.programmers.co.kr/learn/courses/30/lessons/12917
 * @param {*} s 영문 대소문자로만 구성된 문자열
 * @returns 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열
 * cf. 대문자는 소문자보다 작은 것으로 간주
 *
 * cf. split-apply-combine 기법이라고도 불리는 3단 콤보
 * - split, sort(또는 map) join(또는 reduce)으로 이어지는 메서드
 */
function solution(s) {
  // (문자열로 나누기).(문자단위로 정렬).(순서뒤집기).(합치기)
  return s.split('').sort().reverse().join('');
}

console.log(solution('Zbcdefg'));

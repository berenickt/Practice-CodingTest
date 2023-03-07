/** https://school.programmers.co.kr/learn/courses/30/lessons/120904
 *
 * @param {*} num 정수
 * @param {*} k 정수
 * @returns num을 이루는 숫자 중에 k가 있으면, num의  그 숫자가 있는 자리 수
 *
 * findexIndex : 만족하는 배열 첫 번쨰 인덱스 반환, 만족하는 요소가 없으면 -1 반환
 */
function solution(num, k) {
  // (문자 단위로 나누고).(인덱스가 k인 값 찾기)
  const index = [...('' + num)].findIndex((n) => +n === k);
  return index === -1 ? -1 : index + 1;
}

// 29183에서 1은 3번째에 있습니다.
console.log(solution(29183, 1)); // 3
console.log(solution(232443, 4)); // 4
console.log(solution(123456, 7)); // -1

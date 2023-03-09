/** https://school.programmers.co.kr/learn/courses/30/lessons/120844
 * @param {*} numbers 정수가 담긴 배열
 * @param {*} direction 문자열
 * @returns `numbers`의 원소를 `direction`방향으로 한 칸씩 회전시킨 배열
 */
function solution(numbers, direction) {
  return direction === 'right'
    ? // slice(인덱스포함, 미포함) : 잘라내서 새 배열
      [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
    : // 왼쪽인 경우, 1번 인덱스 포함해서 새 배열, 첫 번쨰 배열
      [...numbers.slice(1), numbers[0]];
}

console.log(solution([1, 2, 3], 'right')); // [3, 1, 2]
console.log(solution([4, 455, 6, 4, -1, 45, 6], 'left')); // [455, 6, 4, -1, 45, 6, 4]

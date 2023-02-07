/** https://school.programmers.co.kr/learn/courses/30/lessons/120889
 * 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
 * - 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
 *
 * @param {*} sides 삼각형의 세 변의 길이가 담긴 배열
 * @returns 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2
 */
function solution(sides) {
  sides.sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}

console.log(solution([1, 2, 3])); // 2

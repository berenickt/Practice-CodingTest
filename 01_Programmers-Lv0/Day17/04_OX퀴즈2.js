/** https://school.programmers.co.kr/learn/courses/30/lessons/120907
 * @param {*} quiz 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열
 * @returns 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열
 */
function solution(quiz) {
  return quiz
    .map((el) => el.split(' = '))
    .map((el) => {
      return eval(el[0]) == el[1] ? 'O' : 'X';
    });
}

console.log(solution(['3 - 4 = -3', '5 + 6 = 11'])); // ["X", "O"]
console.log(solution(['19 - 6 = 13', '5 + 66 = 71', '5 - 15 = 63', '3 - 1 = 2'])); // ["O", "O", "X", "O"]

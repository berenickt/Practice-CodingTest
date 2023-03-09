/** https://school.programmers.co.kr/learn/courses/30/lessons/120895
 *
 * @param {*} my_string 문자열
 * @param {*} num1 정수
 * @param {*} num2 정수
 * @returns my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열
 */
function solution(my_string, num1, num2) {
  const str = [...my_string];

  [str[num1], str[num2]] = [str[num2], str[num1]];

  return str.join('');
}

// "hello"의 1번째 인덱스인 "e"와 2번째 인덱스인 "l"을 바꾸면 "hlelo
console.log(solution('hello', 1, 2)); // "hlelo"
console.log(solution('I love you', 3, 6)); // "I l veoyou"

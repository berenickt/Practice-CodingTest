/** https://school.programmers.co.kr/learn/courses/30/lessons/120913
 *
 * @param {*} my_str 문자열
 * @param {*} n 문자열
 * @returns my_str을 길이 n씩 잘라서 저장한 배열
 */
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, 'g'));
}

// "abc1Addfggg4556b" 를 길이 6씩 잘라 배열에 저장한 ["abc1Ad", "dfggg4", "556b"]를 return
console.log(solution('abc1Addfggg4556b', 6)); // ["abc1Ad", "dfggg4", "556b"]
console.log(solution('abcdef123', 3)); // ["abc", "def", "123"]

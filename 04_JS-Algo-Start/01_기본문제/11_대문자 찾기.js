/**
 * 한 개의 문자열을 입력받아
 * 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램
 * cf. 문자열의 길이는 100을 넘지 않음
 * @param {*} s 문자열
 * @returns
 */
function solution(s) {
  let answer = 0;

  for (let x of s) {
    // let num = x.charCodeAt();
    // if (num >= 65 && num <= 90) answer++;
    if (x === x.toUpperCase()) answer++;
    // console.log(x.toUpperCase(), x);
  }

  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));

/**
 * 대문자로 이루어진 영어단어가 입력되면
 * 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력
 * @param {*} s 문자열
 * @returns
 */
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
}

let str1 = "BANANA";
console.log(solution(str1)); // B#N#N#

// 정규표현식으로 -----------------------------------
function solution2(s) {
  let answer = s;
  answer = answer.replace(/A/g, "#");
  return answer;
}

let str2 = "BANANA";
console.log(solution2(str2));

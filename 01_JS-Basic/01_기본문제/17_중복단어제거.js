/**
 * N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램
 * 출력하는 문자열은 원래의 입력순서를 유지해야 함
 * cf. 3<=N<=30
 * cf. 문자열의 길이는 100을 넘지 않습니다
 * @param {*} s
 * @returns
 */
function solution(s) {
  let answer;
  //console.log(s.indexOf("time"));
  answer = s.filter(function (v, i) {
    return s.indexOf(v) === i;
  });
  return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));

/** https://school.programmers.co.kr/learn/courses/30/lessons/120894
 * 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
 * @param {*} numbers 문자열
 * @returns numbers를 정수로 바꿔 return
 */
function solution(numbers) {
  let numStr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  numStr.forEach((str, index) => {
    numbers = numbers.replaceAll(str, index);
  });

  return Number(numbers);
}
console.log(solution('onetwothreefourfivesixseveneightnine')); // 123456789
console.log(solution('onefourzerosixseven')); // 14067

// arr.forEach((item, index, thisArr)
// - item : 배열 요소 값
// - index : 배열 인덱스
// - thisArr : 참조한 배열

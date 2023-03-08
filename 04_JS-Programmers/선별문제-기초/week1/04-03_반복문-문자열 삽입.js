/**
 * num을 입력받아 1부터 num까지 각각의 숫자 사이에 "-"가 들어간 문자열을 만들어야 합니다.
 * num에 3일 경우에는 "1-2-3"입니다.
 */
function makeNumber(num) {
  let str = '';
  for (let i = 1; i <= num; i++) {
    str += i; // str = str + i;

    if (i !== num) {
      str += '-'; // str = str + "-"
    }
  }
}

makeNumber(5); // 1-2-3-4-5
makeNumber(7); // 1-2-3-4-5-6-7

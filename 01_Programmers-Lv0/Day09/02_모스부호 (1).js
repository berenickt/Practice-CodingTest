/** https://school.programmers.co.kr/learn/courses/30/lessons/120838
 * @param {*} letter 문자열
 * @returns `letter`를 영어 소문자로 바꾼 문자열
 */
function solution(letter) {
  // prettier-ignore
  const morse = { 
  '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
  '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
  '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
  '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
  '-.--':'y','--..':'z'
  }
  return letter
    .split(' ')
    .map((l) => morse[l]) // morse로 대응
    .join('');
}

console.log(solution('.... . .-.. .-.. ---'));

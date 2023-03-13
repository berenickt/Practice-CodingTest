const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

/** https://school.programmers.co.kr/learn/courses/30/lessons/81301
 * 네오와 프로도가 숫자놀이를 하고 있습니다.
 * 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면
 * 프로도는 원래 숫자를 찾는 게임입니다.
 *
 * 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
 * - 1478 → "one4seveneight"
 * - 234567 → "23four5six7"
 * - 10203 → "1zerotwozero3"
 *
 * @param {*} s 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열
 * @returns s가 의미하는 원래 숫자
 */
function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    while (s.includes(numbers[i])) {
      s = s.replace(numbers[i], i);
    }
  }
  return Number(s);
}

/**
 * forEach, split, join
 */
function solution2(s) {
  numbers.forEach((num, i) => {
    s = s.split(num).join(i);
  });
  return Number(s);
}

/**
 * 정규표현식
 */
function solution3(s) {
  s = s.replace(/zero/g, '0');
  s = s.replace(/one/g, '1');
  s = s.replace(/two/g, '2');
  s = s.replace(/three/g, '3');
  s = s.replace(/four/g, '4');
  s = s.replace(/five/g, '5');
  s = s.replace(/six/g, '6');
  s = s.replace(/seven/g, '7');
  s = s.replace(/eight/g, '8');
  s = s.replace(/nine/g, '9');

  return Number(s);
}

/**
 * 정규표현식[new RegExp] + 반복문
 */
function solution4(s) {
  for (let i = 0; i < numbers.length; i++) {
    const regExp = new RegExp(numbers[i], 'g');
    s = s.replace(regExp, i);
  }
  return Number(s);
}

console.log(solution('one4seveneight')); // 1478
console.log(solution('23four5six7')); // 234567
console.log(solution('2three45sixseven')); // 234567
console.log(solution('123')); // 123

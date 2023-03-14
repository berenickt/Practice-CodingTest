const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz'; // 소문자 알파벳만 저장
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // 대문자 알파벳만 저장

/** https://school.programmers.co.kr/learn/courses/30/lessons/12926
 * 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
 * e.g. "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다.
 * e.g. "z"는 1만큼 밀면 "a"가 됩니다.
 * @param {*} s 문자열
 * @param {*} n 거리
 * @returns s를 n만큼 민 암호문
 *
 * for : 대소문자 구분없이 푸는법
 */
function solution(s, n) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      // 공백일 경우
      answer += ' ';
    } else {
      let index = alphabet.indexOf(s[i]);
      const word = index > 25 ? alphabet.slice(26, alphabet.length) : alphabet.slice(0, 26);
      index = word.indexOf(s[i]) + n;

      if (index >= 26) {
        index -= 26;
      }

      answer += word[index];
    }
  }

  return answer;
}

/**
 * for : 대소문자 구분해서 푸는법
 */
function solution2(s, n) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      // 공백일 경우
      answer += ' ';
    } else {
      // 소문자인지를 먼저 검증한 후
      // 소문자가 맞다면, 소문자 리스트를 저장
      // 소문자가 아니라면, 대문자 리스트를 저장
      const word = lower.includes(s[i]) ? lower : upper;
      let index = word.indexOf(s[i]) + n;

      if (index >= 26) {
        index -= 26;
      }

      answer += word[index];
    }
  }
  return answer;
}

/**
 * reduce
 */
function solution3(s, n) {
  const answer = s.split('').reduce((acc, cur) => {
    const word = lower.includes(cur) ? lower : upper;
    let idx = word.indexOf(cur) + n;

    if (idx >= 26) {
      idx -= 26;
    }
    return acc + (cur === ' ' ? ' ' : word[idx]);
  }, '');
  return answer;
}

/**
 * charCode
 */
function solution4(s, n) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      answer += ' ';
      continue;
    }
    let code = s[i].charCodeAt() + n;
    if (code > 122 || (code > 90 && code - n < 97)) {
      // 소문자 z(122) 초과했거나
      // 대문자 Z(90)을 초과하면서
      // 기존의 유니코드 번호가 대문자일 경우
      code -= 26;
    }
    answer += String.fromCharCode(code);
  }

  return answer;
}

function solution5(s, n) {
  return s
    .split('')
    .map(el => {
      if (el == ' ') return el;
      let tmp = el.charCodeAt();
      return el.toLowerCase().charCodeAt() + n > 122
        ? String.fromCharCode(tmp + n - 26) //
        : String.fromCharCode(tmp + n);
    })
    .join('');
}

console.log(solution('AB', 1)); // "BC"
console.log(solution('z', 1)); // "a"
console.log(solution('a B z', 4)); // "e F d"

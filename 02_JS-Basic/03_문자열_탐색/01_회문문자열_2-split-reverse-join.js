function solution2(s) {
  let answer = 'YES';
  s = s.toLowerCase(); // 모든 문자를 소문자로 바꾸고

  // console.log(s.split('').reverse().join(''));
  // 배열로 바꾸고-뒤집고-다시 합치기
  if (s.split('').reverse().join('') !== s) return 'NO';
  return answer;
}

console.log(solution2('goooG'));
console.log(solution2('goGS'));

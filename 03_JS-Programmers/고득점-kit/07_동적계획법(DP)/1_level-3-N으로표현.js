/** https://school.programmers.co.kr/learn/courses/30/lessons/42895
 *
 * @param {*} N
 * @param {*} number
 * @returns
 *
 * N을 몇 번 썼는지를 메모이제이션 해둔다.
 * https://ko.wikipedia.org/wiki/메모이제이션
 *
 * loop(i)에서 계산한 내용이 loop(i+1)로 넘어가면 증발하므로,
 * 증발하기 전에 loop(i) 단에서 계산 결과만 전역 변수에 따로 저장하는 방식
 *
 * 문제에서는 loop의 수가 8까지로 정해져있고,
 * 각 메모이제이션마다 계산으로는 도달하는 것이 아닌 초기요소들 N, NN, NNN, NNNN, … 이 있으므로
 * 이를 초반에 정적으로 정의
 */
function solution(N, number) {
  if (N === number) return 1;

  const memo = [0, 1, 11, 111, 1111, 11111, 111111, 1111111, 11111111].map((v) => new Set([v * N]));

  const check = (x, y, i) => {
    const isNumber = (cal) => {
      if (cal === number) return true;
      else memo[i].add(cal);
    };
    if (
      isNumber(x + y) ||
      isNumber(x * y) ||
      isNumber(x - y) ||
      isNumber(y - x) ||
      (x !== 0 && isNumber(parseInt(y / x))) ||
      (y !== 0 && isNumber(parseInt(x / y)))
    )
      return true;
  };

  let nUsing = 2;

  while (nUsing < 9) {
    if (memo[nUsing].has(number)) return nUsing;
    for (let a = 1; a <= nUsing / 2; a++) {
      for (let x of memo[a]) {
        for (let y of memo[nUsing - a]) {
          if (check(x, y, nUsing)) return nUsing;
        }
      }
    }
    nUsing++;
  }

  return -1;
}

// -------------------------------------------------
function solution2(N, number) {
  const cache = new Array(9).fill(0).map((el) => new Set());
  for (let i = 1; i < 9; i++) {
    cache[i].add('1'.repeat(i) * N);
    for (let j = 1; j < i; j++) {
      for (const arg1 of cache[j]) {
        for (const arg2 of cache[i - j]) {
          cache[i].add(arg1 + arg2);
          cache[i].add(arg1 - arg2);
          cache[i].add(arg1 * arg2);
          cache[i].add((arg1 / arg2) >> 0);
        }
      }
    }
    if (cache[i].has(number)) return i;
  }
  return -1;
}

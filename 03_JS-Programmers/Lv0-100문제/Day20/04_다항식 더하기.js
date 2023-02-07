/** https://school.programmers.co.kr/learn/courses/30/lessons/120863
 * 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다.
 * 다항식을 계산할 때는 동류항끼리 계산해 정리합니다.
 * @param {*} polynomial 덧셈으로 이루어진 다항식
 * @returns 동류항끼리 더한 결괏값을 문자열
 * - 같은 식이라면 가장 짧은 수식을 return
 */
function solution(polynomial) {
  const countX = (x) => {
    const count = x.replaceAll('x', '');
    return count === '' ? 1 : +count;
  };

  const count = polynomial.split(' + ').reduce((a, c) => (c.includes('x') ? { ...a, x: a.x + countX(c) } : { ...a, num: a.num + +c }), {
    x: 0,
    num: 0,
  });

  const x = count.x > 0 ? `${count.x > 1 ? count.x : ''}x` : '';
  const num = count.num > 0 ? '' + count.num : '';
  const plus = x !== '' && num !== '' ? ' + ' : '';

  return x + plus + num;
}

console.log(solution('3x + 7 + x')); // "4x + 7"
console.log(solution('x + x + x')); // "3x"

/** https://school.programmers.co.kr/learn/courses/30/lessons/120818
 * @param {*} price 구매한 옷의 가격
 * @returns 지불해야 할 금액
 */
function solution(price) {
  if (price >= 500000) return Math.floor(price * 0.8);
  else if (price >= 300000) return Math.floor(price * 0.9);
  else if (price >= 100000) return Math.floor(price * 0.95);
  return price;
}
console.log(solution(150000));

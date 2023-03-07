/** https://school.programmers.co.kr/learn/courses/30/lessons/120884
 * 프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다.
 * 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다.
 * @param {*} chicken 시켜먹은 치킨의 수
 * @returns 받을 수 있는 최대 서비스 치킨의 수
 */
function solution(chicken) {
  const order = (coupons) => {
    if (coupons < 10) return 0;
    const service = Math.floor(coupons / 10);
    return service + order(service + (coupons % 10));
  };
  return order(chicken);
}

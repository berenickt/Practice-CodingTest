/**
 * 현수는 송아지를 잃어버렸다. 다행히 송아지에는 위치추적기가 달려 있다.
 * 현수의 위치와 송아지의 위치가 수직선상의 좌표 점으로 주어지면,
 * 현수는 현재 위치에서 송아지의 위치까지 다음과 같은 방법으로 이동한다.
 *
 * 송아지는 움직이지 않고 제자리에 있다.
 * 현수는 스카이 콩콩을 타고 가는데,
 * 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 있다.
 * 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램
 *
 * @param {*} start 현수의 위치
 * @param {*} end 송아지의 위치
 * @returns
 */
function solution(start, end) {
  let answer = 0;
  let check = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(start);
  check[start] = 1;
  let L = 0;

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === end) return L + 1;
        if (nx > 0 && nx <= 10000 && check[nx] === 0) {
          check[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++;
  }
  return answer;
}

console.log(solution(5, 14)); // 3

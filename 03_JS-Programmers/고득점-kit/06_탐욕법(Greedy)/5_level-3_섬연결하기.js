/** https://school.programmers.co.kr/learn/courses/30/lessons/42861
 *
 * @param {*} n
 * @param {*} costs
 * @returns
 *
 * 기준이 되는 것은 각 노드가 아니라 노드을 연결하는 간선이 되어야 한다.
 * 1. 간선을 기준으로 costs 배열을 오름차순 정렬한다.
 * 2. costs 앞요소부터 꺼내서 sum에 더 해나간다.
 * 3. 모든 노드가 연결되었을 때 종료한다.
 */
function solution(n, costs) {
  if (n === 1) return 0;
  costs.sort((a, b) => a[2] - b[2]);

  const tmp = costs.shift();
  let con = new Set([new Set([tmp[0], tmp[1]])]);
  let sum = tmp[2];

  while (1) {
    if ([...con][0].size === n) break;
    const [a, b, val] = costs.shift();
    if ([...con].some((v) => v.has(a) && v.has(b))) continue;
    sum += val;

    const conA = [...con].find((v) => v.has(a));
    if (conA) con.delete(conA);
    const conB = [...con].find((v) => v.has(b));
    if (conB) con.delete(conB);

    if (conA && conB) con.add(new Set([...conA, ...conB]));
    else if (conA) con.add(new Set([...conA, b]));
    else if (conB) con.add(new Set([...conB, a]));
    else con.add(new Set([a, b]));
  }

  return sum;
}

/** https://school.programmers.co.kr/learn/courses/30/lessons/42884
 *
 * @param {*} routes
 * @returns
 */
function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);

  let cam = routes.shift()[1];
  let cnt = 1;

  while (routes.length > 0) {
    let [start, end] = routes.shift();
    if (start <= cam) continue;
    else {
      cam = end;
      cnt++;
      continue;
    }
  }

  return cnt;
}

// --------------------------------------------
const solution = (routes) => {
  let cnt = 0;
  let camera = -30001;
  routes.sort((a, b) => a[1] - b[1]);
  for (let item of routes) {
    if (item[0] > camera) {
      cnt++;
      camera = item[1];
    }
  }
  return cnt;
};

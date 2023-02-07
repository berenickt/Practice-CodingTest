/** https://school.programmers.co.kr/learn/courses/30/lessons/120812
 * @param {*} array 숫자 배열
 * @returns 최빈값
 */
function solution(array) {
  const map = new Map();

  array.forEach((val) => {
    if (map.has(val)) {
      map.set(val, map.get(val) + 1);
    } else {
      map.set(val, 1);
    }
  });

  const max = Math.max(...map.values());
  let count = 0;
  let result = 0;

  for (const [key, value] of map) {
    if (max === value) {
      count++;
      result = key;
    }
  }

  return count > 1 ? -1 : result;
}

console.log(solution([1, 2, 3, 3, 3, 4]));

/** https://school.programmers.co.kr/learn/courses/30/lessons/120880
 * 수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다.
 * 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다.
 * @param {*} numlist 정수가 담긴 배열
 * @param {*} n 정수
 * @returns numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열
 */
function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const [aDiff, bDiff] = [Math.abs(a - n), Math.abs(b - n)];
    if (aDiff === bDiff) return b - a;
    return aDiff - bDiff;
  });
}

function solution2(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

// 4에서 가까운 순으로 [4, 5, 3, 6, 2, 1]을 return합니다.
// 3과 5는 거리가 같으므로 더 큰 5가 앞에 와야 합니다.
// 2와 6은 거리가 같으므로 더 큰 6이 앞에 와야 합니다.
console.log(solution([1, 2, 3, 4, 5, 6], 4)); // [4, 5, 3, 6, 2, 1]
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30)); // [36, 40, 20, 47, 10, 6, 7000, 10000]

/**
 * 임의의 N개의 숫자가 입력으로 주어집니다.
 * N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한 개의 수인 M이 주어지면
 * 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램
 *
 * cf. 단 중복값은 존재하지 않습니다
 *
 * @param {*} target : 목표하는 수
 * @param {*} array : 3<=N<=1,000,000까지의 자연수 배열
 * @returns 정렬된 상태에서 target의 위치
 *
 * 1. 오름차순
 * 2. target의 위치 찾기
 */
function solution(target, array) {
  let answer;

  // 1. 오름차순
  array.sort((a, b) => a - b);

  // 포인터 변수 2개 선언
  let left = 0;
  let right = array.length - 1;

  // left가 right보다 작거나 같을 동안에만 반복
  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    // mid가 목표하는 수와 같다면, [mid+1]인덱스가 정답
    if (array[mid] === target) {
      answer = mid + 1;
      break;
    }
    // mid가 목표하는 수보다 크다면, 오른쪽 포인터를 mid 왼쪽에
    else if (array[mid] > target) right = mid - 1;
    // mid가 목표하는 수보다 작다면, 왼쪽 포인터를 mid 오른쪽에
    else left = mid + 1;
  }

  return answer;
}

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81])); // 3

/**
 * Cache Miss : 캐시에 해당 작업이 없어서 모두 뒤로 밀고, 맨 뒤에 제거하고, 새 캐시를 맨 앞에 입력
 * Cache Hit : 캐시에 해당 작업이 이미 있어서, 이미 있는 캐시를 맨 앞에 입력
 * @param {*} size 캐시 크기 배열
 * @param {*} array n개의 작업이 순서대로 있는 배열
 * @returns n개의 작업을 처리한 후 캐시메모리 상태를 최근 사용한 작업부터 차례대로 출력
 *
 */
function solution(size, array) {
  // 입력받은 캐시크기만큼 0으로 초기화한 배열 생성
  let answer = Array.from({ length: size }, () => 0);

  array.forEach((element) => {
    let pos = -1; // 초기화

    // **** Cache Hit인지 Miss인지 확인
    // 이미 있는 작업이라면(Cache Hit), 그 인덱스를 찾아서 넣기
    for (let i = 0; i < size; i++) if (element === answer[i]) pos = i;

    // 없는 작업이라면(Cache Miss),
    if (pos === -1) {
      // 뒤에서 앞으로 순회, 앞의 요소를 뒤로 보내기
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      // 있는 작업이라면(Cache Hit)
      // Hit난 곳부터 뒤에서 앞으로 순회, 앞의 요소를 뒤로 보내기
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    // 입력되는 순서대로 들어온 작업은 맨 앞으로
    answer[0] = element;
  });

  return answer;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7])); // 7 5 3 2 6

/**
 * N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램
 * 정렬하는 방법은 버블정렬
 * @param {*} array 자연수 N(1<=N<=100)이 여러 개 들어있는 배열
 * @returns
 *
 * ** 버블정렬 알고리즘(Bubble Sort)
 * 1. 매번 연속된 두 개 인덱스를 비교
 * 2. 정한 기준의 값을 뒤로 넘겨 정렬
 * cf. 성능이 매우 안좋은 정렬이기 때문에 잘 사용되지는 않는다
 */
function bubbleSort(array) {
  let answer = array; // 얕은 복사

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      // 뒤에꺼가 앞에꺼보다 크면, 자리 바꾸기
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
    console.log(`${i}회전: ${array}`);
  }

  return answer;
}

console.log(bubbleSort([5, 3, 2, 4, 1])); // [ 1, 2, 3, 4, 5 ]

/**
 * N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램
 * 정렬하는 방법은 삽입정렬
 * @param {*} array 1~100까지의 자연수가 여러 개 들어있는 배열
 * @returns
 *
 * ** 삽입 정렬(Insertion Sort)
 * 1. 아직 정렬되지 않은 임의의 데이터를 이미 정렬된 배열 부분과 비교하여,
 * 2. 자신의 위치를 찾아 삽입함으로써 정렬
 */
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let cur = array[i];
    let left = i - 1;

    while (left >= 0 && array[left] > cur) {
      array[left + 1] = array[left];
      left--;
    }
    array[left + 1] = cur;
    console.log(`${i}회전: ${array}`);
  }
  return array;
}
console.log(insertionSort([5, 4, 3, 2, 1]));

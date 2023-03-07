const array = [1, 1, 5, 124, 400, 599, 1004, 2876, 8712];

function binarySearch(array, findValue) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  // mid가 찾는 값이 일치할 떄까지 순회
  while (left < right) {
    if (array[mid] === findValue) {
      return mid;
    }
    if (array[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  // 만약 left값과 right값이 동일할 경우 루프 탈출
  // 루프를 그대로 빠져나온다면,
  // 요소를 찾지 못했다는 뜻이기에 - 1반환
  return -1;
}
console.log(binarySearch(array, 2876)); // 7
console.log(binarySearch(array, 1)); // 0
console.log(binarySearch(array, 500)); // -1

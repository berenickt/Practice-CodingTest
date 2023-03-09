/** https://school.programmers.co.kr/learn/courses/30/lessons/120811
 * 1. 정렬
 * 1-1. 배열 중 가장 작은 값을 찾는다.
 * 1-2. 찾으면 새 배열에 넣는다.
 * 1-3. 원래 배열에 찾은 값은 지운다.
 * 1-4. 만약 원래 배열 길이만큼 반복했으면 끝낸다. 아니면 1-1로 돌아간다.
 * 2. 가운데 값 꺼내기
 */
function solution(array) {
  let arrayCnt = 0;
  let newArray = [];

  // 1. 정렬
  // 1-4. 만약 원래 배열 길이만큼 반복했으면 끝낸다. 아니면 1-1로 돌아간다.
  while (arrayCnt < array.length) {
    let minNumber = 1000;

    // 1-1. 배열 중 가장 작은 값을 찾는다.
    let cnt = 0;
    while (cnt < array.length) {
      if (minNumber > array[cnt]) {
        minNumber = array[cnt];
      }
      cnt = cnt + 1;
    }
    // 1-2. 찾으면 새 배열에 넣는다.
    newArray.push(minNumber);

    // 1-3. 원래 배열에서 찾은 값은 지운다.
    let cnt2 = 0;
    while (cnt2 < array.length) {
      if (minNumber === array[cnt2]) {
        array[cnt2] = 1000;
        break;
      }
      cnt2 = cnt2 + 1;
    }
    arrayCnt = arrayCnt + 1;
  }
  console.log('new Array :', newArray);

  // 2. 가운데 값 꺼내기
  // 배열 길이가 5이면 array[2]
  // 배열 길이가 3이면 array[1]
  // 배열 길이가 n이면 array[Math.floor(n / 2]
  return newArray[Math.floor(array.length / 2)];
}

console.log(solution([1, 2, 7, 10, 11]));

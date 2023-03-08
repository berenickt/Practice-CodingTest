/**
 * numberData 배열에는 오직 number 타입의 데이터만 있어야 합니다.
 * 그런데 누군가의 실수로 다른 타입의 값들도 배열 안에 있습니다.
 * number 타입의 데이터만 남기고 나머지는 삭제해주세요.
 *
 * - 배열의 기능을 함께 활용해 보세요.
 */

let numberData = [1, '가나', true, 126, 'false', 100];

let newData = [];
for (let i = 0; i < numberData.length; i++) {
  if (typeof numberData[i] === 'number') {
    newData.push(numberData[i]);
  }
}

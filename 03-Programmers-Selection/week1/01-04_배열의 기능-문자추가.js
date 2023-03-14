/**
 * 주어진 fruits 배열의 모든 요소에 "맛있는" 이라는 문자열을 추가하세요.
 * - 배열의 index와 변수의 재할당을 사용해서 문제를 풀어주세요.
 */
let fruits = ['사과', '바나나'];

fruits[0] = '맛있는 ' + fruits[0];
fruits[1] = '맛있는 ' + fruits[1];

console.log(fruits); // ["맛있는 사과", "맛있는 바나나"]

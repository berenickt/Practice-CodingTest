// forEach, map, filter, reduce = 고차함수 = 매개변수로 함수를 전달받음

// **** (1) forEach
// function forEach(콜백함수, this객체) {
//   for(let i = 0; i < a.length; i++) {
//     함수(a[i], i);
//   }
// }

// forEach함수의 내부 콜백함수 안에서 무언가를 작성
a = [10, 11, 12, 13, 14, 15];
a.forEach(
  (element, index) => {
    console.log(element, index, this); // 이떄 this는 [1, 2]를 초기값으로 가짐
  },
  [1, 2]
);

// ------------------------------------------------------------------------------
// **** (2) map : 요소를 탐색하면서 새로운 배열 반환
// function map(콜백함수, this객체) {
//   let list = [];
//   for (let i = 0; i < a.length; i++) {
//     list.push(콜백함수(a[i], i))
//   }
//   return list;
// }

b = [1, 2, 3, 4, 5, 6];
let answer = b.map(
  (v, i) => {
    return v * v;
  },
  [1, 2]
);
console.log(answer); // [ 1, 4, 9, 16, 25, 36 ]

// ------------------------------------------------------------------------------
// **** (3) filter : 원하는 원소만 선택해 새로운 배열 반환
// function filter(콜백함수, this객체) {
//   let list = [];
//   for (let i = 0; i < a.length; i++) {
//     if(콜백함수(a[i], i)) list.push(a[i])
//   }
//   return list;
// }

c = [1, 2, 3, 4, 5, 6];
let answer2 = c.filter(
  (v, i) => {
    return v % 2 === 0;
  },
  [1, 2]
);
console.log(answer2); // [ 2, 4, 6 ]

// ------------------------------------------------------------------------------
// **** (4) reduice : 원소를 누적되어 새로운 값을 반환
// function reduice(콜백함수(누적값, 원본값), 초기값) {
//   let result = 초기값;
//   for (let i = 0; i < a.length; i++) {
//     result = 콜백함수(누적값, a[i]);
//   }
//   return result;
// }

d = [1, 2, 3, 4, 5, 6];
let answer3 = d.reduce((acc, v) => {
  return acc + v;
}, 0);
console.log(answer3); // 21

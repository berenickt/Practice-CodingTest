/**
 * 주어진  student는 "철수"에 대한 정보를 모아둔 객체입니다.
 * 그런데 철수와 관련이 없는 drink라는 키가 있네요.
 * student에서 { drink: "사이다" }를 삭제해주세요.
 */
let student = {
  name: '철수',
  age: 8,
  drink: '사이다',
};

delete student.drink;

console.log(student); // { name : "철수", age: 8 }

/**
 * new Date()를 이용하여 "오늘은 0000년 00월 00일 입니다." 라는 문구를 만들어 보세요.
 */

let today = new Date();

console.log(`오늘은 ${today.getFullYear()}년 ${today.getMonth()}월 ${today.getDate()}일 입니다.`);

/**
 * TodoList는 철수의 오늘 할 일들과 해당 일을 끝냈는지 나타내는 배열입니다.
 * 철수가 TodoList 전체 목록에서 완료한 일이 전체의 몇 %인지 구하세요.
 * %는 2자리의 자연수로 나와야 하고, 소수점이 있을 경우 반올림 해야 합니다.
 * 예상 결과에 있는 문구처럼 나와야 합니다.
 *
 * 수학객체를 이용해 반올림을 하세요.
 */
const TodoList = [
  { work: '청소', finish: false },
  { work: '미적분 과제', finish: true },
  { work: '논문 해석', finish: false },
  { work: '알고리즘 풀기', finish: false },
  { work: '미니홈피 제작', finish: false },
  { work: 'Blog 글 쓰기', finish: true },
];

let count = 0;
for (let i = 0; i < TodoList.length; i++) {
  if (TodoList[i].finish === true) {
    count++;
  }
}
let per = Math.floor(TodoList.length / count) * 10 + '%';

console.log('총 ' + per + ' 진행하셨습니다.'); // 총 30% 진행하셨습니다.

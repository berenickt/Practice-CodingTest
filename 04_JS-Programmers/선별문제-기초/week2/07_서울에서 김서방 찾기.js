/** https://school.programmers.co.kr/learn/courses/30/lessons/12919
 * String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수
 */
function solution(seoul) {
  let x = 0; // 김서방의 위치 (인덱스) 값을 저장

  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') {
      x = i;
      break;
    }
  }

  return `김서방은 ${x}에 있다`;
}

function solution2(seoul) {
  const x = seoul.indexOf('Kim');
  return `김서방은 ${x}에 있다`;
}

function solution3(seoul) {
  return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}

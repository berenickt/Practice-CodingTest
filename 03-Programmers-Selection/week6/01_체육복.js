/** https://school.programmers.co.kr/learn/courses/30/lessons/42862
 * 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다.
 * 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
 * 학생들의 번호는 체격 순으로 매겨져 있어,
 * 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
 *
 * e.g. 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.
 * 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
 * @param {*} n 전체 학생의 수
 * @param {*} lost 체육복을 도난당한 학생들의 번호가 담긴 배열
 * @param {*} reserve 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열
 * @returns 체육수업을 들을 수 있는 학생의 최대값
 */
function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost.filter(student => reserve.includes(student) === false).sort((a, b) => a - b); // 오름차순
  reserve = reserve.filter(student => losted.includes(student) === false).sort((a, b) => a - b); // 오름차순

  // 체육복을 잃어버린 학생들의 수를 뺀 값을 초기값으로 저장
  // (= 체육수업을 들을 수 있는 학생의 수)
  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    // 잃어버린 학생의 앞 번호를 조회
    if (reserve.includes(lost[i] - 1)) {
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
      answer++;

      // 잃어버린 학생의 뒷 번호를 조회
    } else if (reserve.includes(lost[i] + 1)) {
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
      answer++;
    }
  }
  return answer;
}

/**
 * map
 */
function solution2(n, lost, reserve) {
  const losted = [...lost];
  lost = lost.filter(student => reserve.includes(student) === false).sort((a, b) => a - b); // 오름차순
  reserve = reserve.filter(student => losted.includes(student) === false).sort((a, b) => a - b); // 오름차순

  // 체육복을 잃어버린 학생들의 수를 뺀 값을 초기값으로 저장
  // (= 체육수업을 들을 수 있는 학생의 수)
  let answer = n - lost.length;

  lost.forEach(student => {
    // 앞에 있는 학생의 인덱스 값 번호를 가져온다.
    const prev = reserve.indexOf(student - 1);
    // 뒤에 있는 학생의 인덱스 값 번호를 가져온다.
    const next = reserve.indexOf(student + 1);

    if (prev !== -1) {
      // 앞에 학생이 있을 경우 (여벌복이 있는 학생인 경우)
      answer++;
      reserve.splice(prev, 1);
    } else if (next !== -1) {
      // 뒤에 학생이 있는 경우 (여벌복이 있는 학생인 경우)
      answer++;
      reserve.splice(next, 1);
    }
  });
  return answer;
}

/**
 *
 */
function solution3(n, lost, reserve) {
  // students 초기화 - 학생들은 체육복 개수 1로 초기화
  let students = Array.from({ length: n }).fill(1);

  // 읽어버린 학생 개수 반영
  lost.forEach(target => {
    students[target - 1]--;
  });

  // 여별 체육복 개수 반영
  reserve.forEach(target => {
    students[target - 1]++;
  });

  // 학생들 순차적으로 접근
  for (let i = 0, len = students.length; i < len; i++) {
    // 체육복 0 | 1 을 가진 학생들을 대여 불가능이기 때문에 continue
    if (students[i] === 0 || students[i] === 1) continue;
    // 이전 번호의 학생이 있고 그 학생이 0개의 체육복을 가졌다면
    if (i !== 0 && students[i - 1] === 0) {
      // 이전 학생 증가
      students[i - 1]++;
      // 자신은 대여해줬으니 감소
      students[i]--;
    }
    // 인덱스 학생이 1개 초과한 체육을 가지고 다음 번호의 학생이 있고 그 학생이 0개의 체육복을 가졌다면
    if (students[i] > 1 && i + 1 !== len && students[i + 1] === 0) {
      // 다음 학생 증가
      students[i + 1]++;
      // 자신은 대여해줬으니 감소
      students[i]--;
    }
  }
  // 체육복 1개 이상을 가진 학생들의 수 반환
  return students.filter(v => v >= 1).length;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2

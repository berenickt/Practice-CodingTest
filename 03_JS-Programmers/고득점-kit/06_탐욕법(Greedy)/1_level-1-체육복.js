/**
 *
 * @param {*} n
 * @param {*} lost
 * @param {*} reserve
 * @returns
 *
 * 문제에서 여분을 가져온 사람이 도난을 당하면 그 경우를 최우선으로 처리한다고 명시해놓았다.
 * 그래서 루프를 2번 돌아야한다.
 *
 * lost와 reserve에서 같은 요소가 있다면 둘 다 빼는 루프
 * lost 요소 - 1 == reserve 요소 or
 * lost 요소 + 1 == reserve 요소인 경우, lost와 reserve에서 각 요소 제거
 */
function solution(n, lost, reserve) {
  lost = lost.reduce((acc, cur) => {
    const a = reserve.indexOf(cur);
    if (a > -1) {
      reserve.splice(a, 1);
      return acc;
    }
    acc.push(cur);
    return acc;
  }, []);

  lost = lost.reduce((acc, cur) => {
    const a = reserve.indexOf(cur - 1);
    if (a > -1) {
      reserve.splice(a, 1);
      return acc;
    }
    const b = reserve.indexOf(cur + 1);
    if (b > -1) {
      reserve.splice(b, 1);
      return acc;
    }
    acc.push(cur);
    return acc;
  }, []);

  return n - lost.length;
}

// ---------------------------------------------------
function solution2(n, lost, reserve) {
  // students 초기화 - 학생들은 체육복 개수 1로 초기화
  let students = Array.from({ length: n }).fill(1);

  // 읽어버린 학생 개수 반영
  lost.forEach((target) => {
    students[target - 1]--;
  });

  // 여별 체육복 개수 반영
  reserve.forEach((target) => {
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
  return students.filter((v) => v >= 1).length;
}

// ---------------------------------------------------
function solution3(n, lost, reserve) {
  const students = {};
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }
  lost.forEach((number) => (students[number] -= 1));
  reserve.forEach((number) => (students[number] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
    }
  }
  for (let key in students) {
    if (students[key] >= 1) {
      answer++;
    }
  }
  return answer;
}

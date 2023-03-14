const leftNumbers = [1, 4, 7]; // 왼쪽 키패드에 해당하는 숫자를 배치
const rightNumbers = [3, 6, 9]; // 오른쪽 키패드에 해당하는 숫자를 배치

/** https://school.programmers.co.kr/learn/courses/30/lessons/67256
 * 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
 * 맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며,
 * 엄지손가락을 사용하는 규칙은 다음과 같습니다.
 * - 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
 * - 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
 * - 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
 * - 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
 * -- 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
 *
 * @param {*} numbers 순서대로 누를 번호가 담긴 배열
 * @param {*} hand 왼손잡이인지 오른손잡이인 지를 나타내는 문자열
 * @returns 각 번호를 누른 엄지손가락이 왼손인지 오른손인지를 나타내는 연속된 문자열 형태
 */
function solution(numbers, hand) {
  let answer = '';

  // 현재 두 엄지손가락이 어떤 위치에 있는지
  const current = {
    left: 10,
    right: 12,
  };

  for (let i = 0; i < numbers.length; i++) {
    if (leftNumbers.includes(numbers[i])) {
      // 누를 번호가 왼쪽 키패드에 해당된다면 ( = 왼쪽 손가락으로 누른다. )
      answer += 'L';
      current['left'] = numbers[i]; // 왼쪽 손가락의 위치를 변경
    } else if (rightNumbers.includes(numbers[i])) {
      // 누를 번호가 오른쪽 키패드에 해당된다면 ( = 오른쪽 손가락으로 누른다. )
      answer += 'R';
      current['right'] = numbers[i]; // 오른쪽 손가락의 위치를 변경
    } else {
      // 가운데 키패드에 해당할 경우
      const locationObj = { ...current }; // 왼쪽과 오른쪽의 손가락의 위치 거리를 저장

      for (let hand in locationObj) {
        // 0번을 눌렀을 때의 예외 처리 = 0번은 11 위치값으로 처리한다.
        numbers[i] = numbers[i] === 0 ? 11 : numbers[i];
        // 왼쪽과 오른쪽 엄지손가락으로부터 거리값을 구해온다.
        let location = Math.abs(numbers[i] - locationObj[hand]);

        // 거리 차이가 3칸 이상일 때는 위 아래로 이동할 수 있다.
        if (location >= 3) {
          location = Math.trunc(location / 3) + (location % 3);
        }
        locationObj[hand] = location;
      }

      // 왼쪽 손가락의 위치와 오른쪽 손가락의 위치가 서로 동일할 경우
      // 주로 사용하는 손가락(hand 매개변수)을 이용해서 누른다.
      if (locationObj['left'] === locationObj['right']) {
        answer += hand === 'left' ? 'L' : 'R';
        current[hand] = numbers[i];
      } else {
        if (locationObj['left'] > locationObj['right']) {
          // 오른쪽 손가락이 더 가까운 경우
          answer += 'R';
          current['right'] = numbers[i];
        } else {
          // 왼쪽 손가락이 더 가까운 경우
          answer += 'L';
          current['left'] = numbers[i];
        }
      }
    }
  }
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')); // LRLLLRLLRRL
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')); // LRLLRRLLLRR
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')); // LLRLLRLLRL

function solution2(numbers, hand) {
  // 현재 두 엄지손가락이 어떤 위치에 있는지
  const current = {
    left: 10,
    right: 12,
  };

  return numbers.reduce((acc, cur) => {
    // useFinger : 어떤 손가락으로 눌렀는지에 대한 최종 리턴값 ("L", "R");
    // target : 왼손인지 오른손인지 ("left", "right")
    // number : 최종적으로 누른 번호 키패드 (숫자 : 1 ~ 11)
    let [useFinger, target, number] = ['', '', 0];

    if (leftNumbers.includes(cur)) {
      [useFinger, target, number] = ['L', 'left', cur];
    } else if (rightNumbers.includes(cur)) {
      [useFinger, target, number] = ['R', 'right', cur];
    } else {
      const locationObj = Object.entries(current).reduce((acc2, cur2) => {
        // const targetHand = cur2[0];
        cur = cur === 0 ? 11 : cur;
        let location = Math.abs(cur - cur2[1]);

        if (location > 2) {
          // location >= 3
          location = Math.trunc(location / 3) + (location % 3);
        }
        acc2[cur2[0]] = location;
        return acc2;
      }, {});

      if (locationObj['left'] === locationObj['right']) {
        [useFinger, target, number] = [hand === 'left' ? 'L' : 'R', hand, cur];
      } else if (locationObj['left'] > locationObj['right']) {
        [useFinger, target, number] = ['R', 'right', cur];
      } else {
        [useFinger, target, number] = ['L', 'left', cur];
      }
    }

    current[target] = number;
    return acc + useFinger;
  }, '');
}

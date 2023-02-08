/** https://school.programmers.co.kr/learn/courses/30/lessons/42839
 *
 * @param {*} numbers
 * @returns
 * 소수를 찾는 문제인데 크게 구현해줄 함수가 2개 있다.
 * -- number => 소수여부: boolean
 * -- string => [숫자들의 배열]: array
 *
 * 이 함수들을 따로 정의하고
 * 1번 함수 ( 2번 함수 (문제 input) ) 의 return 값 중 true인 것의 개수를 반환
 */
function solution(numbers) {
  return makeNum(numbers.split('').map((v) => 0 + v)).filter((n) => isSoSu(n)).length;
}

const isSoSu = (n) => {
  if (n === 0 || n === 1) return false;
  if (n === 2 || n === 3) return true;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const makeNum = (numList) => {
  const numSet = new Set();

  const makeSum = (sum, remains, cnt) => {
    if (cnt > 0)
      for (let i = 0; i < remains.length; i++) {
        const copy = remains.slice();
        makeSum(sum + copy.splice(i, 1) * Math.pow(10, cnt - 1), copy, cnt - 1);
      }
    else numSet.add(sum);
  };

  for (let i = 1; i <= numList.length; i++) {
    makeSum(0, numList, i);
  }

  return [...numSet];
};

// -----------------------------------------------------------------
function solution2(n) {
  var count = 0;
  var arr = [...Array(n).keys(), n].slice(2);
  if (n === 2) {
    return 1;
  }
  while (arr.length !== 0) {
    count++;
    if (arr[0] > Math.sqrt(n) + 1) {
      break;
    }
    arr = arr.filter((num) => num % arr[0] !== 0);
  }

  return count + arr.length - 1;
}

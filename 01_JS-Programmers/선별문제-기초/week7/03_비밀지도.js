/** https://school.programmers.co.kr/learn/courses/30/lessons/17681
 *
 * 네오가 프로도의 비상금을 손에 넣을 수 있도록, 비밀지도의 암호를 해독하는 작업을 도와줄 프로그램
 * @param {*} n 한 변의 길이
 * @param {*} arr1 1차원 정수 배열
 * @param {*} arr2 1차원 정수 배열
 * @returns
 */
function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer[i] = '';

    // 지도 1의 암호를 2진법으로 변환 후, n 길이 만큼 앞에서부터 "0"으로 채운다.
    const map1 = arr1[i].toString(2).padStart(n, '0');
    // 지도 2의 암호를 2진법으로 변환 후, n 길이 만큼 앞에서부터 "0"으로 채운다.
    const map2 = arr2[i].toString(2).padStart(n, '0');

    for (let j = 0; j < map1.length; j++) {
      answer[i] +=
        map1[j] === '1' || map2[j] === '1'
          ? '#' // 둘 중 하나라도 벽("1")이라면, 전체 지도에는 벽("#")을 더해주고
          : ' '; // 두개 모두 공백("0")이라면, 전체 지도에도 공백(" ")을 더해준다.
    }
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); // [ '#####', '# # #', '### #', '#  ##', '#####' ]
console.log(solution(6, [46, 33, 33, 22, 31, 50], [46, 33, 33, 22, 31, 50])); // [ '# ### ', '#    #', '#    #', ' # ## ', ' #####', '##  # ' ]

/**
 * map
 */
function solution2(n, arr1, arr2) {
  const answer = arr1.map((map1, i) => {
    // 지도 1의 암호를 2진법으로 환산
    map1 = map1.toString(2).padStart(n, '0');
    // 지도 2의 암호를 2진법으로 환산
    const map2 = arr2[i].toString(2).padStart(n, '0');

    return map1.split('').reduce((acc, cur, j) => {
      return acc + (cur === '1' || map2[j] === '1' ? '#' : ' ');
    }, '');
  });
  return answer;
}

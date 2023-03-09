/** https://school.programmers.co.kr/learn/courses/30/lessons/17681
 * @param {*} n
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
function solution(n, arr1, arr2) {
  return [...Array(n)].map(
    (_, i) =>
      [...(arr1[i] | arr2[i]).toString(2).padStart(n, ' ')]
        .map((v) => (+v ? '#' : ' ')) //0은 빈 문자열, 1은 #으로
        .join('') // 다시 합치기
  );
}

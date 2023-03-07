/** https://school.programmers.co.kr/learn/courses/30/lessons/42578
 * 해시 set에 모든 경우를 충분히 넣어주고 경우의 수를 계산
 * @param {*} clothes
 * @returns
 *
 * 얼굴 a, 상의 b, 하의 c, (겉옷 0) 만큼의 선택지가 있을 때,
 * (단 종류가 없는건 처음부터 뺀다)
 * 각 파트에 아무것도 착용하지 않는 경우까지 포함한다면
 * 얼굴 a+1, 상의 b+1, 하의 c+1, (겉옷 out)이고,
 * 모든 파트에 아무것도 착용하지 않는 경우는 없으므로
 * 다 곱한 후 마지막에 -1
 */
function solution(clothes) {
  const temp = new Object();

  clothes.map((data) => {
    if (temp[data[1]]) temp[data[1]] += 1;
    else temp[data[1]] = 1;
  });

  let result = 1;

  for (let key in temp) {
    result *= temp[key] + 1;
  }

  return result - 1;
}

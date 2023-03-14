/** https://school.programmers.co.kr/learn/courses/30/lessons/120869
 * PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다.
 * @param {*} spell 알파벳이 담긴 배열
 * @param {*} dic 외계어 사전
 * @returns spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2
 */
function solution(spell, dic) {
  const match = Array.from(spell);
  return dic.filter((t) => {
    return match.every((k) => t.includes(k));
  }).length > 0
    ? 1
    : 2;
}

// "p", "o", "s" 를 조합해 만들 수 있는 단어가 `dic`에 존재하지 않습니다. 따라서 2를 return
console.log(solution(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo'])); //  2
console.log(solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw'])); // 1
console.log(solution(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som'])); // 2

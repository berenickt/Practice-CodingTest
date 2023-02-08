/** https://school.programmers.co.kr/learn/courses/30/lessons/42579
 *
 * @param {*} genres
 * @param {*} plays
 * @returns
 * (songs, genPlays) 둘 다 “key = 장르”인 Object이다.
 * genres에 대해 for문을 돌며 songs, genPlays를 채워준다.
 * songs는 각 장르에 대해 배열을 가지고 있으며 배열의 0번 index, 1번 index만을 검증하며 채운다.
 * genPlays는 각 장르에 대해 플레이된 총합을 누적한다.
 * 마지막으로 genPlays의 value가 큰 순으로 장르(key)를 정렬하고,
 * songs에서 장르별로 최대 2개씩 가지고 answer에 합친다.
 */

function solution(genres, plays) {
  const songs = {};
  const genPlays = {};

  genres.forEach((genre, idx) => {
    if (!songs[genre]) songs[genre] = [idx];
    else if (plays[idx] > plays[songs[genre][0]]) songs[genre].unshift(idx);
    else if (!plays[songs[genre][1]] || plays[idx] > plays[songs[genre][1]]) {
      songs[genre][1] = idx;
    }

    genPlays[genre] ? (genPlays[genre] += plays[idx]) : (genPlays[genre] = plays[idx]);
  });

  return Object.keys(genPlays)
    .sort((a, b) => genPlays[b] - genPlays[a])
    .reduce((acc, cur) => acc.concat(songs[cur].slice(0, 2)), []);
}

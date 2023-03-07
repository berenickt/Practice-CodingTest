// 1. 같은 장르끼리 묶기
// 2. 묶인 노래들을 재생 순으로 정렬하기
// 3. 노래를 2개까지 자르는 작업하기

// 핵심 키워드는 "묶는 것", "정렬"
function solution(genres, plays) {
  const genreMap = new Map();

  genres
    // 1. 각 장르끼리 배열로 묶기 [장르명, 재생횟수]
    .map((genre, index) => [genre, plays[index]])
    // 2. 묶어준 장르로 데이터 만들기
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play) // 재생 순으로 내림차순
          .slice(0, 2),
      });
    });
  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);
}

/**
 * 지니레코드에서는 불세출의 가수 조영필의 라이브 동영상을 DVD로 만들어 판매하려 한다.
 * DVD에는 총 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지되어야 한다.
 * 순서가 바뀌는 것을 우리의 가수 조영필씨가 매우 싫어한다.
 *
 * 즉, 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서는
 * 1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야한다.
 * 또한 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안된다.
 *
 * 지니레코드 입장에서는 이 DVD가 팔릴 것인지 확신할 수 없기 때문에
 * 이 사업에 낭비되는 DVD를 가급적 줄이려고 한다.
 * 고민 끝에 지니레코드는 M개의 DVD에 모든 동영상을 녹화하기로 하였다.
 * 이때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다.
 * 그리고 M개의 DVD는 모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야 한다.
 *
 * cf. 부른 곡의 길이는 10,000분을 넘지 않는다고 가정
 * cf. m개의 DVD는 모두 같은 크기여야 함
 *
 * @param {*} dvdNum - DVD 개수
 * @param {*} songs - 조영필이 라이브에서 부른 순서대로 부른 곡의 길이, 분 단위(자연수) 주어짐
 * @returns DVD의 최소 크기(녹화가능한 길이)
 */
function solution(dvdNum, songs) {
  let answer;

  let left = Math.max(...songs);
  let right = songs.reduce((a, b) => a + b, 0); // 부른 곡의 총 길이(모든 요소를 더한 값)

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (count(songs, mid) <= dvdNum) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}

/**
 * 연속으로 저장하는데 몇 장이 필요한지 계산
 * @param {*} songs 조영필이 라이브에서 부른 순서대로 부른 곡의 길이
 * @param {*} capacity DVD에 담을 용량
 * @returns 필요한 DVD 수
 */
function count(songs, capacity) {
  let cnt = 1; // DVD 수
  let sum = 0;

  for (let song of songs) {
    if (sum + song > capacity) {
      cnt++;
      sum = song;
    } else sum += song;
  }
  return cnt;
}

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9])); // 17
// e.g. 3개의 DVD 용량이 17분짜리면 (1, 2, 3, 4, 5), (6, 7), (8, 9) 이렇게 3개의 DVD로 녹음할 수 있다.
// 17분 용량보다 작은 용량으로는 3개의 DVD에 모든 영상을 녹화할 수 없다.

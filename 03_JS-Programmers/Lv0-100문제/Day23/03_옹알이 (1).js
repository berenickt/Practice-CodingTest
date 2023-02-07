/** https://school.programmers.co.kr/learn/courses/30/lessons/120956
 * 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다.
 * 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해
 * 조합한(이어 붙인) 발음밖에 하지 못합니다.
 *
 * @param {*} babbling 문자열 배열
 * @returns 머쓱이의 조카가 발음할 수 있는 단어의 개수
 */
function solution(babbling) {
  const convertPWordsToNum = (word) => {
    const pWords = ['aya', 'ye', 'woo', 'ma'];
    return pWords.reduce((result, pWord, i) => result.replaceAll(pWord, i), word);
  };

  const canPronounce = (word) => {
    const result = convertPWordsToNum(word);
    return !/[^\d]/.test(result) && [...result].every((num, i) => i + 1 > result.length || num !== result[i + 1]);
  };

  return babbling.filter((b) => canPronounce(b)).length;
}

// ["aya", "yee", "u", "maa", "wyeoo"]에서 발음할 수 있는 것은 "aya"뿐입니다. 따라서 1을 return
console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo'])); // 1
console.log(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'])); // 3

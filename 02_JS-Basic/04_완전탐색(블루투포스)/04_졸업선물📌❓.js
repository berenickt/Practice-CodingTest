/**
 * 선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
 * 학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라고 했습니다.
 * 선생님이 가지고 있는 예산은 한정되어 있습니다.
 * 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.
 *
 * cf. 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. ********
 * cf. 배송비는 할인에 포함되지 않습니다
 *
 * cf. 상품가격과 배송비는 각각 100,000을 넘지 않습니다.
 * cf. 상품가격은 짝수로만 입력
 * @param {*} budget 예산
 * @param {*} product
 * @returns 주어진 예산으로 선물할 수 있는 최대 학생 수
 *
 * 한정된 예산으로 최대한 많은 수의 선물을 주는 것
 */
function solution(budget, product) {
  let answer = 0; // 주어진 예산으로 선물할 수 있는 최대 학생 수
  let studentNum = product.length;

  // **** 2차원 배열 오름차순 정렬
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  // console.log(product);

  for (let i = 0; i < studentNum; i++) {
    // **** 남은 예산 = 예산 - (가격/2 + 배송비)
    // 가격/2는 할인받은 것
    let remainBudget = budget - (product[i][0] / 2 + product[i][1]);
    let count = 1;

    for (let j = 0; j < studentNum; j++) {
      // **** 남은 예산보다 크면 상품 구매 불가능
      if (j !== i && product[j][0] + product[j][1] > remainBudget) break;

      // **** 남은 예산보다 작거나 같아야 상품 구매 가능
      if (j !== i && product[j][0] + product[j][1] <= remainBudget) {
        remainBudget -= product[j][0] + product[j][1];
        count++;
      }
    }
    answer = Math.max(answer, count); // 상품구매한 횟수
  }
  return answer;
}

let arr = [
  // 가격, 배송비
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));

// **** 공부
// for i : 인덱스로 순회
// for of : 원소로 순회

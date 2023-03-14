/**
 * 주어진 classmates는 "다람쥐초등학교" 학생들의 정보를 모아둔 배열입니다.
 * 그런데 자세히 보니 "영희" 학생의 정보가 잘못 입력되어 있습니다.
 * "영희"의 school 값을 "다람쥐초등학교"로 바꿔주세요.
 */
const classmates = [
  {
    name: '철수',
    age: 8,
    school: '다람쥐초등학교',
  },
  {
    name: '영희',
    age: 8,
    school: '토끼초등학교',
  },
  {
    name: '짱구',
    age: 8,
    school: '다람쥐초등학교',
  },
];

classmates[1].school = '다람쥐초등학교';

console.log(classmates);
// const classmates = [
// 	{
// 		name: "철수",
// 		age: 8,
// 		school: "다람쥐초등학교"
// 	},
// 	{
// 		name: "영희",
// 		age: 8,
// 		school: "다람쥐초등학교"
// 	},
// 	{
//		name: "짱구",
//		age: 8,
//		school: "다람쥐초등학교"
//	}
// ];

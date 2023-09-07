// Truthy & Falsy 참과 거짓

if (true) {
  console.log('참')
} // '참' 출력

if (false) {
  console.log('참')
} // '참' 미출력

// Javascript에서 boolean은 true or false의 값은 
// 두가지만 있는 것이 아니다.

if(123) {
  console.log('참')
} // '참' 출력됨

if(0) {
  console.log('참')
} // '참' 미출력

if('0') {
  console.log('참')
} // '참' 출력

//즉 Falsy에만 해당하는 데이터만 알게된다면, Boolean Data를 더욱 잘 활용할 수 있다.

//거짓(Falsy) 리스트
//1) false
//2) 0
//3) null
//4) undefined
//5) NaN - Not a Number
//6) '' - Empty 빈문자
//7) 0n <- 이건 java에서 사용하는 수
//그 외 모든 것은 Truthy로 생각하면 된다.


const fruits = ['Apple', 'Banana'];

if (fruits[0] === 'Apple') {
  console.log('true');
} else {
  console.log('false');
}

const fruit = ['Apple'];

if (fruit.length) {
  console.log('아이템이 들어있음')
}

//JavaScript 배열의 length 속성은 배열에 포함된 요소(아이템)의 개수를 나타냅니다.
//예를 들어, const fruit = ['Apple']; 코드에서 fruit 배열은 한 개의 요소인 'Apple'을 가지고 있으므로, 
//fruit.length는 1이 됩니다. 따라서 if (fruit.length) 조건은 참(Truthy)으로 평가되며, '아이템이 들어있음'이라는 
//문자열이 콘솔에 출력됩니다.
//반대로, 배열이 비어있는 경우 length는 0이 되고, if (0) 조건은 거짓(Falsy)으로 평가됩니다.
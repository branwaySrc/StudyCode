//함수만 있다면 Object, 즉 객체가 아니다.
//객체란 함수와 데이터를 하나로 만들어둔 것을 객체라고 한다.
//ChatGPT 예시

// 자동차 객체
var car = {
  brand: 'Toyota',
  color: 'Blue',
  speed: 0,
  accelerate: function() {
      this.speed += 10;
  },
  brake: function() {
      this.speed -= 10;
  }
};

// 자동차 객체의 메서드 호출
car.accelerate(); // 속도가 10 증가
console.log('Current Speed:', car.speed); // 현재 속도 출력



// 이건 객체가 아닌, 함수이다.
function Hello () {
  console.log('Hello')
}
Hello() // Hello()는 Call 함수로써, 하나의 함수의 마지막에 함수명에 괄호를 씌우면
// Hello라는 함수를 실행시키는 것과 동일하다. 즉 함수 내부 코드를 실행시킬때 사용

function Hello () {
  console.log('Hello')
}
Hello // 여기에서 () 괄호가 없다면, 그저 함수로 이루어진 데이터로만 인식된다. 즉, 하나의 데이터이다.

function getNumber () {
  return 123
}

console.log(getNumber) // 을 하게 된다면, getNumber안에 있는 데이터만 inspect 하게 될것
console.log(getNumber()) // ()괄호를 붙이게 된다면, getNumber이라는 함수를 실행해서 나온 값을 보여줌.

const getNumber = function () {
  return 123 //return이란, 반환하는 값을 의미한다. 즉 '보여'준다.는 의미로 최종 결과값으로 보면 될거같다.
} //하나의 상수를 만들어서 이름이 지어주고, 그곳에 함수를 넣어준다면

console.log(getNumber) // 의 경우, function () {return 123} 이라는 내용으로 데이터처럼 나타난다.
console.log(getNumber()) //의 경우, getNumber이라는 것을 실행한 것이므로,
//안에 있는 function (익명함수)이 실행된다. 그리고 거기에서 return이라는 값으로 인해, 
//getNumber()이라는 자리에는
//return 값인 123이 남게 되는 것이다.


const a = function () {
  console.log('a')
}

const b = function (c) {
  console.log('c') // function () { console.log('a') }
  c() // a
}
b(a)  

//b () 괄호 안에있는 a는 매게변수로, 인식이 되는데, 매게 변수란 밖에있는 변수를 가져오는 의미
//즉 함수끼리 연동 및 데이터끼리 소통할 수 있는 구조이다. 
//function(여기에 들어온다.) 그리고 들어온 녀석의 이름을 지어주고
// 그 녀석을 function (  ) { 여기에 재할당을 할 수 있다. }
//즉 c는 a라는 것과 동일하다.

//ChatGpt 예시
function add(a, b) {
  return a + b;
}

const result = add(2, 3); // 함수 호출 시 2와 3을 인수로 전달
console.log(result); // 출력: 5




// 호이스팅(Hoisting)
// 호이스팅이란, 유효한 범위 안에서 맨위로 끌어올려 부르는 현상을 의미함
// 즉 Call이 위에 있더라도, function이 call에 해당하는게 유효범위안에 존재한다면
// 그 것을 최 상단으로 끌어올리는 현상이다.


// 이것은 함수 선언 (Declaration)

function hello () {
  console.log('Hello~')
}
hello()

// 이것은 호이스팅으로 인해 'hello2'가 출력된다.

hello2()
function hello2 () {
  console.log('hello2')
}

// 이것은 함수 표현식
const hello = function() {
  console.log('Hi there')
}

// 이 둘의 차이는, 선언문의 경우, Hoisting이 작동되어 먼저 불려진 다른 콜이 있더라도
// 작동이 되는 반면, 표현식의 경우, 먼저 표현이 되어 있어야 작동이 된다.

hello3()

const hello3 = function() {
  console.log('Hi there')
}

//이렇게 된다면, hoisting이 되지 않기 때문에, hello3() 는 작동되지 않는다.


//Object란 한글로 '객체'라고 하며
// 객체(Object)는 프로그래밍에서 중요한 개념 중 하나로, 
// 데이터와 해당 데이터를 조작하는 함수 또는 메서드를 함께 묶어 놓은 것을 의미
// 함수는 객체가 아니지만, 객체는 함수로 이루어진 메서드와 데이터를 묶은 것이다.

// 아래는 객체끼리 어떻게 소통이 되고, 어느 범위까지 가능한지 알려주는 사례임
// from FastCampus Object 강의

const UserA = {
  name : 'MINKI',
  age: 85
}

const UserB = {
  name : 'NEO',
  age: 22,
  parent: userA
}

console.log(UserB.parent.name)// " MINKI ""
console.log(UserB['parent'].name) // "MINKI"
console.log(UserA['parent']['name']) // "MINKI"

// UserA['name'] = UserA.name
// B안에서 A에 대한 const가 존재한다면, B를 통해 A의 value를 확인 할 수 있다.
// 이제부터 key는 property와 동일한 의미다.
// 이제부터 value는 속성과 동일한 의미다.
// 즉 value는 항상 property 안에 있고, property는 항상 value [at least null]를 가져야 한다.
// undefined는 아예 내가 아무런 값을 의도적으로 넣지 않았기 떄문에 오류로 봐도 무방하다. 

const users = [UserA, UserB]

console.log(users[0])

// 이렇게 위에 있는 데이터를 아래 새로운 property로 만들어서 value를 꺼내올 수 있다.

//React에서 사용하는 useState 방식 정리

// 별코딩 https://www.youtube.com/watch?v=G3qglTF-fFI
// State 컴포넌트가 가질 수 있는 상태를 useState = 다른 상태로 만들어준다는 의미
// [ useState ] 의 초기값
// const [state, setState] = useState(초기값); 초기값엔 [string, boolean, number, array]
// 매번 설정 초기값이 변경될때마다 rendering이 실행된다.
// 즉, 다른 무거운 것들과 함께 있다면, 그것들도 계속 재렌더링이 될것.

//처음 상태를 count = useState(0) 로 지정된 것을 의미 useState( #저장공간 )
  // count를 부르기 위해서는 object로 불러줘야함 object = {}을 의미함.
  //첫 상태를 string 으로 지정했으면, 변경될 상태또한 동일한 string 값으로 지정해야한다(안그럼 tsx에서 에러뜸)
  //함수 안에 함수를 넣어서 이 함수에만 속하는 함수를 만든것
  //setCount( 변경될 값 ) 라는 곳에 새로운 변경값을 넣어주면 된다.
  //'변경될 값'으로는 다른 함수를 넣을 수 있다.

import { useState } from 'react'

const OnClickForm = () => {
  const [ count , setCount ] = useState(1);
  
  const handleClick = () => {
    let resetCount;

    if (count >= 6) {
      resetCount = 0;
    } else {
      resetCount = count + 1;  
    }
    setCount(resetCount)
  };
  
  return (

    <div>
      <h1>useState Count</h1>
      <p>useState을 활용한 버튼 카운트 올리기</p>
      <span> 현재 카운트 {count}번 </span>
      <button onClick={handleClick}> Update </button>
    </div>
    
  )
}

export default OnClickForm

// 순서 정리
// 1) 초기값 설정을 한다.
// 2) 초기값을 사용할 곳을 찾는다. object 
// 3) 그리고 setCount를 사용할 함수를 만든다. [예제] 19번~21번) const handleClick = () => { setCount() }
// 4) 그리고 그 변경된 값을 언제, 어떠한 eventFunction으로 보여줄지 선택한다. 지금의 경우 button에 있는 'onClick'을 활용함.
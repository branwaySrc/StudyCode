import { useState, ChangeEvent } from 'react'


const InputForm = () => {

  const [name, setName] = useState(['이름을 리스트'])
  const [input, setInput ] = useState ('');
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setName((prevState)=> {
      return([ input, ...prevState])
    });
  };

  return (
    <div>
      <h1>useState Update input</h1>
      <input type='text' value={input} onChange={handleInputChange}></input>
      
      <button onClick={handleUpload}>submit</button>
      { name.map ( (name, index) => {
        return <p key={index}>{name}</p>
      })}
    </div>
  )
}

export default InputForm 

//만든 순서
//1. InputForm을 만들기 위해서 일단 이름을 리스팅 하는 것 부터 만들어야 한다.
//2. useState [name, setName] 그리고 useState의 초기값은 여러개의 이름이 들어오기에 [array]로 감쌌다.
//3. 그리고 여기 name을 나열하는 방식으로 map함수를 사용하였다.
//{name.map((name,index)=> {return <p key={index}>{name}</p>})}
//map 함수에 대해서 좀 더 알아보자.
//map 함수는 초기값 안에 있는 useState(['array','array2','array3']) 속에 있는 개별 개수마다, 
//내가 return 값으로 지정한 형태로 array1 return, and array2 return ... 만큼 만들어서 내보낸다.

//4. 그리고 나서 input 요소를 만들고, 그 input과 button을 생성한다.
//5. 이제 input의 초기값으로 아무것도 없는 값을 지정하였다. useState('')
//6. 그리고 그 첫 상태값을 input value={input} 값으로 넣어줬다.
//7. 이제 input 값이 변경될 setInput을 설정해야하는데, input 속성인 onChange 요소에 setInput을 가동할 함수를 넣어준다. {handleInputChange}

//여기서 배워야 할 것은 prevState이라는 것과, ...prevState의 사용방법, 그리고 input 요소를 배워야한다.
//콜백 (callback) 함수도 알아야함.
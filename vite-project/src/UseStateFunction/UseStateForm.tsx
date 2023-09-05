import { useState } from 'react';

const UseStateForm = () => {
  
  const [ state,setState ] = useState('first state')

  const handleButton = () => {
    setState('changed!')
  };
  
  return (
    <div>
      <h1>useState basic form</h1>
      <p>{state}</p>
      <button onClick={handleButton}>click me to change</button>
    </div>
  )
}

export default UseStateForm
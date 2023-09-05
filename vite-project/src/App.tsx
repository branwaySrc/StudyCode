import './index.css'
import { 
  OnClickForm,
  InputForm,
  UseStateForm

} from './UseStateFunction/path'

import UseEffectFrom from './UseEffectFunction/UseEffectFrom'
import { useState } from 'react'


function App() {
  const [ showTimer, setShowTimer ] = useState(false);

  return (
    <>
      <UseStateForm></UseStateForm>
      <OnClickForm></OnClickForm>
      <InputForm></InputForm>
      {showTimer&&<UseEffectFrom></UseEffectFrom>}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </>
  )
}

export default App

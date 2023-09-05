// 별코딩 https://www.youtube.com/watch?v=kyodvzc5GHU

import { useEffect } from 'react'

const UseEffectFrom = () => {

  useEffect(() => {
    const timer = setInterval(()=> {
      console.log( '타이머 돌아가는 중 ....' );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [])

  return (
    <div>
      <span>
        타이머를 시작합니다.
      </span>
    </div>
  )
}

export default UseEffectFrom
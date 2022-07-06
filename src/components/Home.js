import React, {useEffect , useState} from 'react'
import '../assets/css/_hook.scss'
export default function Home() {
  let [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(() => count +1)
  }
  useEffect (() => {
    count == 5 ? alert(1) : console.log(1);
  },[count])
  return (
    <>
      <div className='hook'>
        <div className='useState'>
          <h3>useState example</h3>
          <h4>{count}</h4>
          <button onClick={handleClick}>Click me !</button>
        </div>
        <div className='useEffect'>

        </div>
      </div>
    </>
  )
}

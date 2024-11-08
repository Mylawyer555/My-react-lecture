import React from 'react'
import{useState} from 'react'

const Usestate = () => {
    const [count, setCount] = useState(0);
  return (
      <div className='container'>
          <p>This is statement man</p>
          <p>{ count}</p>
          <button onClick={() => setCount(count + 1)} id='btn1'>Increment</button>
          
          <button onClick={() => setCount(count - 1)} id='btn2'>Decrease</button>
        </div>
  )
}

export default Usestate
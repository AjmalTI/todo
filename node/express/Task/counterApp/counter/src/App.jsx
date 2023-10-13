import React,{useState,useEffect} from 'react'

function app() {

    const [count,setCount] = useState(()=>{
      const storedCount = localStorage.getItem("counter")
      return storedCount ? parseInt(storedCount) : 0;
    })

    useEffect(()=>{
      localStorage.setItem("counter",count.toString())
    },[count])

const increment=()=>{
    setCount(count + 1)
}
const decrement=()=>{
    setCount(count - 1)
}
const reset=()=>{
    setCount(0)
    localStorage.removeItem("counter")
}

return (
    <div>
        <h1></h1>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        
    </div>
  )
}

export default app
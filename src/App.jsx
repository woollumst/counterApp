import { useState, useEffect } from 'react'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count !== 0 && `Counter App: ${count}` || "Counter App";
  }, [count])
  return (
    <>
      <div className="app-container" style={{textAlign: "center", marginTop: "50px"}}>
        <h1>Counter App</h1>
        <h2 className="counter">{count}</h2>
        <button className="increase" onClick={() => setCount(count + 1)}>Increase</button>
        <button className="decrease" onClick={() => setCount(count - 1)}>Decrease</button>
        <button className="reset" onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import "./style.css"

export default function App() {
  const [count, setCount] = useState(0) 
return (
      <div className="counter">
          <button className="counter--minus"onClick={() => setCount(count - 1)}>–</button>
          <div className="counter--count">
              <h1>{count}</h1>
          </div>
          <button className="counter--plus" onClick={() => setCount(count + 1)} >+</button>
      </div>
  )
}


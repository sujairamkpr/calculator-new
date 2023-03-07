import React,{useState} from "react"

import "./styles.css"


function App() {
  const[count,setCount]=useState(0)
  const[num1,setNum1]=useState()
const[num2,setNum2]=useState()

  const handleAdd=()=>{
setCount(num1+num2)

  }
  const handleSub=()=>{
    
   
setCount(num1-num2)

  }
  const handleMul=()=>{
  
   setCount(num1*num2)
  }
  const handleDiv=()=>{
  setCount(num1/num2)
  }
  return (
    <div  className="cc-grid">
      <div className='result'>
      <div>{count}</div>
      </div>
<button  className="span2">Ac</button>
<button className="span2">Del</button>
<button onClick={()=>{
  handleDiv()
}}>/</button>

<button 
>7</button>
<button >8</button>
<button >9</button>

<button onClick={()=>{
  handleMul()
}}>*</button>
<button >4</button>
<button >5</button>
<button>6</button>
<button onClick={()=>{
handleSub()
  
}} >-</button>
<button>1</button>
<button>2</button>
<button>3</button>
<button onClick={()=>{
  handleAdd()
}} >+</button>
<button>0</button>

<button>.</button>
<button className="span2">=</button>

</div>
  );
}

export default App;

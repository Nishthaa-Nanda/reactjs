
import React from 'react'
import { useState } from 'react';

export default function Counter() {
  const [number,setNumber]=useState(0);
  function handleClick(){
    setNumber(number+1);  
    console.log(number);
  }
  return (
    <div>
      <h1>TOTAL COUNT:{number}</h1>
      <button onClick={handleClick}>Update count</button>
    </div>
  )
}

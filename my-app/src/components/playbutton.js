
import React from 'react'

export default function Playbutton({message,children,onClick}) {
    function handleClick(e){
     e.stoPropagation();
     onClick();
    }
  return (
    <button onClick={handleClick}>{children}</button>
  )
}
  
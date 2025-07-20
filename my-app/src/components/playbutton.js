
import React, { useState } from 'react'

export default function Playbutton({message,children,onPlay,onPause}) {
   const[playing,setPlaying]=useState(false);
    function handleClick(e){
    e.stopPropagation();
    if(playing) onPause()
    else onPlay();
    setPlaying(!playing);
    }
  return (
    <button onClick={handleClick}>{playing?'play':'pause'}</button>
  )
}
  
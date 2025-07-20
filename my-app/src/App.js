
import { version } from 'react';
import './App.css';
import Video  from './videos';
import playbutton from './components/playbutton';
import Playbutton from './components/playbutton';


function App() { 
  let obj={
    verified:true,
    channel:'codewithmik',
    title:'tutorial1',
    views:'90K',
    time:'3 years'
  }
  return (
    <>
    <div className="App">
     <Video  verified={true} channel='coder help'title='tutorial' views='88K' time ='2 years'></Video>
     <Video{...obj}/>
     </div>
     <Playbutton message="play-msg" onClick={()=>console.log('playy')}>Play</Playbutton>
     <Playbutton message="pause-msg" onClick={()=>console.log('Pause')}>Pause</Playbutton>
    </>
    
  );
}

export default App;

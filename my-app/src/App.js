
import { version } from 'react';
import './App.css';
import Video  from './videos';
import playbutton from './components/playbutton';
import Playbutton from './components/playbutton';
import videos from './data/data';


function App() { 
  
  return (
    <>
    <div className="App">
    {
     videos.map(video=><Video  
     verified={video.verified} 
     channel={video.channel}
     title={video.title} 
     views={video.views} 
     time ={video.time}>
     </Video>)
      }
     
     
     </div>
     <Playbutton message="play-msg" onPlay={()=>console.log('playy')} onPause={()=>console.log('pause')}>Play</Playbutton>
     
    </>
    
  );
}

export default App;

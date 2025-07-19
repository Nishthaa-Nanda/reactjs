
import { version } from 'react';
import './App.css';
import Video  from './videos';


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
    </>
  );
}

export default App;


import './App.css';
import Video  from './videos';


function App() { 
  return (
    <>
    <div className="App">
     <Video  verified={true} channel='coder help'title='tutorial' views='88K' time ='2 years'></Video>
     <Video></Video>
     </div>
    </>
  );
}

export default App;

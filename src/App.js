import React from 'react';
import YTPlayer from './components/YTPlayer';
import './App.css';

function App() {
  return (
    <div>
    <div className='cover'>
      Guess
    </div>
    <div className="App">
      <YTPlayer  videoId= 'NFSyl3pwa-A' />
      
    </div>
    </div>
  )
}

export default App;



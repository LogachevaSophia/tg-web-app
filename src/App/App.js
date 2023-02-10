
import { useEffect } from 'react';
import './App.css';
const tg  = window.Telegram.WebApp;


function App() {

  useEffect(()=>{
    tg.ready();
  })
  const OnClose = () =>{

  }
  return (
    <div className="App">
      work
      <button onClick={OnClose}>Закрыть</button>
    </div>
  );
}

export default App;

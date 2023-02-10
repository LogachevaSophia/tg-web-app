
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
      <img src='https://ucarecdn.com/83e1d423-ddf3-433c-9c71-3a1e6f255984/noroot.jpg'></img>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import Main from "../../pages/Main/Main";
import Sphere from "../../pages/Sphere/Sphere";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
const tg = window.Telegram.WebApp;

function App() {
  // useEffect(() => {
  //   tg.ready();
  // });
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/sphere" element={<Sphere />} />
    </Routes>
  );
}

export default App;

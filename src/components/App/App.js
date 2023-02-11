
import Main from "../../pages/Main/Main";
import Sphere from "../../pages/Sphere/Sphere";
import {Route, Routes } from "react-router-dom";
import "./App.css";
import BasketPage from "../../pages/BasketPage/BasketPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/sphere" element={<Sphere />} />
      <Route path="/basket" element={<BasketPage/>} />
    </Routes>
  );
}

export default App;


import Main from "../../pages/Main/Main";
import Sphere from "../../pages/Sphere/Sphere";
import {Route, Routes } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/sphere" element={<Sphere />} />
    </Routes>
  );
}

export default App;

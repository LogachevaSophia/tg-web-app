
import Main from "../../pages/Main/Main";
import Sphere from "../../pages/Sphere/Sphere";
import Category from "../../pages/CategoryPage/Category"
import {Route, Routes } from "react-router-dom";
import "./App.css";
import BasketPage from "../../pages/BasketPage/BasketPage";
import AllNetwork from "../../pages/AllNetwork/AllNetwork";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/sphere" element={<Sphere />} />
      <Route path="/category" element={<Category />} />
      <Route path="/basket" element={<BasketPage/>} />
      <Route path="/allnetworks" element={<AllNetwork/>} />
    </Routes>
  );
}

export default App;

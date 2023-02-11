import "./Main.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate= useNavigate();
  return (
    <div className="container">
      <div className="sphere-category">
        <button onClick={()=> navigate('/sphere')}>Сферы Деятельности</button>
        <button>Категории</button>
      </div>
      <div className="all-nets">
        <button>Все сети</button>
      </div>
      <div className="basket" onClick={()=> navigate('/basket')}>
        <button>Корзина</button>
      </div>
      <div className="help">
        <button>связаться с нами</button>
      </div>
    </div>
  );
};
export default Main;

import { useNavigate } from "react-router-dom";
import Basket from "../../components/Basket/Basket";
import { useBasketItems } from "../../components/Provider/BasketProvider/BasketHooks";
import "./BasketPage.css";

const BasketPage = () => {
  const { basketItems, price } = useBasketItems();

  const navigate = useNavigate();
  return (
    <div className="container">
      <button className="back" onClick={() => navigate(-1)}>
        Назад
      </button>
      <Basket data={basketItems} price={price}></Basket>
      <br></br>
      <div className="price"><b>Сумма покупки: <br></br>{price}</b></div>
      
    </div>
  );
};
export default BasketPage;

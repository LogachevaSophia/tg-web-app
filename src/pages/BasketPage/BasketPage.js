import { useNavigate } from "react-router-dom";
import Basket from "../../components/Basket/Basket";
import { useBasketItems } from "../../components/Provider/BasketProvider/BasketHooks";

const BasketPage = () => {
  const {basketItems} = useBasketItems();
    const navigate = useNavigate();
    // <Basket title={elem.title} data={elem.data} key={elem.id} />
    const data =[];
  return (
    <div className="container">
      <button className="back" onClick={() => navigate(-1)}>
        Назад
      </button>
      <Basket data={basketItems}></Basket>
    </div>
  );
};
export default BasketPage;

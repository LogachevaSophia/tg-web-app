import "./Main.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Server from "../../service/Server";
import {
  useSphereItems,
  allItems,
} from "../../components/Provider/SphereProvider/SphereHooks";

const Main = () => {
  useEffect(() => {
    if (allItems == "") {
      getDataProduct();
    }
  }, []);
  const server = new Server();

  const { setAllItems, setsphereItems, setCategoryItems, allItems, setAllNetworks } = useSphereItems();

  const getDataProduct = async () => {
    const res = await server.getAllItems();
    const dop = res.data.map((elem) => ({
      ...elem,
      clicked: false,
    }));
    setAllItems(dop);

    const res2 = await server.getSphere();
    setsphereItems(res2.data);

    const res3 = await server.getCategory();
    setCategoryItems(res3.data);

    const res4 = await server.getAllNetworks();
    setAllNetworks(res4.data);

    /*[
        {
          id:
          company:

        }]*/

    // setSphere(data.filter((elem)=>{return elem.tag='sphere'}));
    // setCategory(data.filter((elem)=> {return elem.tag='category'}));
  };

  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="sphere-category">
        <button onClick={() => navigate("/sphere")}>Сферы деятельности</button>
        <button onClick={() => navigate("/category")}>Категории</button>
      </div>
      <div className="all-nets">
      <button onClick={() => navigate("/allnetworks")}>Все сети</button>
      </div>
      <div className="basket" onClick={() => navigate("/basket")}>
        <button>Корзина</button>
      </div>
      <div className="help">
        <button><a href='https://t.me/bazapodderzka'>Связаться с нами</a></button>
      </div>
    </div>
  );
};
export default Main;

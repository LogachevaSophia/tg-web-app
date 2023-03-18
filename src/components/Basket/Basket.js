import List from "../List/List";
import Server from "../../service/Server";

const Basket = ({ data }) => {
  const server = new Server();

  const postbuy = async () =>{
    console.log("Покупаем");
    const res = await server.basketToServer(data);

  }  

  return (
    <div className="block">
      <div className="title">
        Корзина
        <p></p>
        <button className="buysphere" onClick={postbuy}>Купить</button>
      </div>
      <List data={data} basket={true} />
    </div>
  );
};
export default Basket;

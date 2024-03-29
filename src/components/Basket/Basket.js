import List from "../List/List";
import Server from "../../service/Server";
import { useTelegram } from "../hooks/Telegramhook";
import axios from "axios";
import { useSphereItems } from "../Provider/SphereProvider/SphereHooks";


const Basket = ({ data, price }) => {
  const server = new Server();
  const {tg, queryId, user} = useTelegram();
  const { allItems} = useSphereItems();
  const postbuy = async () =>{
    console.log("Покупаем");
    const datapost =  allItems.filter((elem) => {
      return elem.clicked ===true;
    });
    

    // tg.sendData(JSON.stringify(datapost));
    console.log(JSON.stringify(datapost).length);
    axios.post(`https://vps70590.xxvps.net:9050/web-data`, {price: price, queryId:queryId, user: user.username,data: datapost });
    //axios.post(`https://vps70590.xxvps.net:9050/web-data`, null, {params:{price: price, queryId:queryId, user: 'yaemdoshik',data: datapost }})
    // fetch('https://vps70590.xxvps.net:9050/web-data', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data)
    //     })
    //const res = await server.basketToServer(data);
    

  }  

  return (
    <div className="block">
      <div className="title">
        Корзина
        <p></p>
        <button className="buysphere" onClick={postbuy}>Оплатить</button>
      </div>
      <List data={data} basket={true} />
    </div>
  );
};
export default Basket;

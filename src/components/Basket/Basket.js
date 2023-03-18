import List from "../List/List";
import Server from "../../service/Server";
import { useTelegram } from "../hooks/Telegramhook";
import axios from "axios";

const Basket = ({ data }) => {
  const server = new Server();
  const {tg, queryId} = useTelegram();
  const postbuy = async () =>{
    console.log("Покупаем");
    
    console.log(data);
    tg.sendData(JSON.stringify(data));
    axios.post(`https://vps70590.xxvps.net:9050/web-data`, null, {params:{data: 'sophia', queryId:5}})
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
        <button className="buysphere" onClick={postbuy}>Купить</button>
      </div>
      <List data={data} basket={true} />
    </div>
  );
};
export default Basket;

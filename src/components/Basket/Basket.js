import List from "../List/List";

const Basket = ({data}) =>{
    return (
        <div className="block">
          <div className="title">
            Корзина
            <p></p>
            <button className="buysphere">Купить</button>
            
          </div>
          <List data={data} basket={true} />
          
        </div>
      );
}
export default Basket;
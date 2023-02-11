import { createContext, useContext, useState } from "react";

const BasketContext = createContext();
export const useBasketItems = () => useContext(BasketContext);

export default function BasketProvider({ children }) {
  const [basketItems, setBasketItems] = useState([]);

  const addItem = (item) => {
    const data = [...basketItems, item];
    setBasketItems(data);
  };

  const removeItem = (item) =>{
    setBasketItems(basketItems.filter(elem => elem.id !== item.id));
  }

  return (
    <BasketContext.Provider value={{ basketItems, addItem,removeItem }}>
      {children}
    </BasketContext.Provider>
  );
}

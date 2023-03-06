import { createContext, useContext, useState } from "react";
import { useSphereItems } from "../SphereProvider/SphereHooks";

const BasketContext = createContext();
export const useBasketItems = () => useContext(BasketContext);

export default function BasketProvider({ children }) {
  const [basketItems, setBasketItems] = useState([]);
  const [price, setPrice] = useState(0);
  const { sphereItems, allItems, setAllItems, categoryItems, allNetworks } =
    useSphereItems();

  const calcPrice = (basketItems) => {
    let dop = 0;

    let count = 0;

    for (let i = 0; i < basketItems.length; i++) {
      if (basketItems[i].title.indexOf("Купить всю") != -1) {
        count += 1;

        let len = basketItems[i].title.length;
        let c = "";
        let ind;
        if (basketItems[i].title.indexOf("Купить всю сферу ") != -1) {
          c = basketItems[i].title.substr(
            "Купить всю сферу ".length + 1,
            len - "Купить всю сферу ".length - 2
          );
          ind = sphereItems.findIndex((p) => p.title.indexOf(c) != -1);
          dop += (sphereItems[ind].data.length - 1) * 100;
        } else {
          c = basketItems[i].title.substr(
            "Купить всю категорию ".length + 1,
            len - "Купить всю категорию ".length - 2
          );
          ind = categoryItems.findIndex((p) => p.title.indexOf(c) != -1);
          dop += (categoryItems[ind].data.length - 1) * 100;
        }

        // let ind = sphereItems.indexOf();
      }
      if (basketItems[i].title.indexOf("Купить все") != -1) {
        count += 1;
        console.log("allNetworks.length =", allNetworks.length);
        dop += (allNetworks.length - 1) * 75;
      }
    }

    if (basketItems.length - count >= 50) {
      dop += (basketItems.length - count) * 100;
    } else {
      dop += (basketItems.length - count) * 150;
    }

    setPrice(dop);
  };

  const addItem = (item, s = "a") => {
    /*добавляем в массив элементы, item передается в виде массива объектов*/
    if (s == "a") {
      const data = [...basketItems, ...item];
      setBasketItems(data);
      /*пересчет цены */
      calcPrice(data);

      /*в глобальном стейте allitems надо изменить clicked = true */

      for (let i = 0; i < item.length; i++) {
        /*в общем списке нахожу индекс элемента, который надо изменить*/
        let ind = allItems.findIndex((x) => x.id === item[i].id);

        let dop = [];
        if (ind != 0) {
          dop = allItems.slice(0, ind);
        }

        dop = [
          ...dop,
          { ...allItems[ind], clicked: !allItems[ind].clicked },
          ...allItems.slice(ind + 1, allItems.length),
        ];
        setAllItems(dop);
      }
    } else {
      const data = [...item];
      setBasketItems(data);
      let dop1 = allItems;
      let dop = [];
      for (let i = 0; i < dop1.length; i++) {
        if (i != 0) {
          dop = dop1.slice(0, i);
        }

        dop = [
          ...dop,
          { ...dop1[i], clicked: s },
          ...dop1.slice(i + 1, allItems.length),
        ];
        dop1 = dop;
      }
      setAllItems(dop1);
      calcPrice(data);
    }
  };
  const changeAll = (s = "a") => {
    if (s == true || s == false) {
      let dop1 = allItems;
      let dop = [];
      for (let i = 0; i < dop1.length; i++) {
        if (i != 0) {
          dop = dop1.slice(0, i);
        }

        dop = [
          ...dop,
          { ...dop1[i], clicked: s },
          ...dop1.slice(i, allItems.length),
        ];
        dop1 = dop;
      }
      setAllItems(dop1);
    }
  };

  const changeBlock = (item, s = "a") => {
    /*[{id, clicked},{}] */
    /*в глобальном стейте allitems надо изменить clicked = true */
    if (s == "a") {
      let dop1 = allItems;
      let dop = [];
      for (let i = 0; i < item.length; i++) {
        /*в общем списке нахожу индекс элемента, который надо изменить*/
        let ind = dop1.findIndex((x) => x.id === item[i].id);

        if (ind != 0) {
          dop = dop1.slice(0, ind);
        }

        dop = [
          ...dop,
          { ...dop1[ind], clicked: !dop1[ind].clicked },
          ...dop1.slice(ind + 1, allItems.length),
        ];
        dop1 = dop;
      }
      setAllItems(dop1);
    } else {
      let dop1 = allItems;
      let dop = [];
      for (let i = 0; i < item.length; i++) {
        /*в общем списке нахожу индекс элемента, который надо изменить*/
        let ind = dop1.findIndex((x) => x.id === item[i].id);

        if (ind != 0) {
          dop = dop1.slice(0, ind);
        }

        dop = [
          ...dop,
          { ...dop1[ind], clicked: s },
          ...dop1.slice(ind + 1, allItems.length),
        ];
        dop1 = dop;
      }
      setAllItems(dop1);
    }
  };

  const removeItem = (item) => {
    if (item.title.indexOf("Купить всю сферу") != -1) {
      /*мы удлаяем сферу*/
      let len = item.title.length;
      let c = item.title.substr(
        "Купить всю сферу ".length + 1,
        len - "Купить всю сферу ".length - 2
      ); /*получили навание сферы*/
      let objSphere = sphereItems.filter((elem) => elem.title === c)[0];
      changeBlock(objSphere.data);
    } else {
      if (item.title.indexOf("Купить всю категорию") != -1) {
        /*мы удлаяем категорию*/
        let len = item.title.length;
        let c = item.title.substr(
          "Купить всю категорию ".length + 1,
          len - "Купить всю категорию ".length - 2
        ); /*получили навание сферы*/
        let objSphere = categoryItems.filter((elem) => elem.title === c)[0];
        changeBlock(objSphere.data);
      } else {
        if (item.title.indexOf("Купить все сети") != -1) {
          console.log('Удаляем все сети')
          /*удаляем все сети*/
          let dop1 = allItems;
          let dop = [];
          for (let i = 0; i < allItems.length; i++) {
    
            if (i != 0) {
              dop = dop1.slice(0, i);
            }
    
            dop = [
              ...dop,
              { ...dop1[i], clicked: false },
              ...dop1.slice(i + 1, allItems.length),
            ];
            dop1 = dop;
          }
          setAllItems(dop1);
        } else {
          /*из общего списка надо пометить, что clicked теперь false */
          let ind = allItems.findIndex((x) => x.id === item.id);
          console.log("ind = ", ind);
          if (ind == 0) {
            setAllItems([
              { ...allItems[ind], clicked: false },
              ...allItems.slice(ind + 1, allItems.length),
            ]);
          } else {
            setAllItems([
              ...allItems.slice(0, ind),
              { ...allItems[ind], clicked: false },
              ...allItems.slice(ind + 1, allItems.length),
            ]);
          }
        }
      }
    }

    setBasketItems(basketItems.filter((elem) => elem.id !== item.id));
    calcPrice(basketItems.filter((elem) => elem.id !== item.id));
  };

  return (
    <BasketContext.Provider
      value={{
        basketItems,
        addItem,
        removeItem,
        price,
        changeBlock,
        changeAll,
        setBasketItems,
        calcPrice,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}

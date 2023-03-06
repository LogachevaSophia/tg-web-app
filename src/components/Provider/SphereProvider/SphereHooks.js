import { createContext, useContext, useState } from "react";
const SphereContext = createContext();
export const useSphereItems = () => useContext(SphereContext);

export default function SphereProvider({ children }) {
  const [sphereItems, setsphereItems] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  const [allItems, setAllItems] = useState("");
  const [allNetworks, setAllNetworks] = useState("");

  const changeSphere = (title) => {
    let len = title.length;
    let c = title.substr(
      "Купить всю сферу ".length + 1,
      len - "Купить всю сферу ".length - 2
    );

    let ind = sphereItems.findIndex((p) => p.title.indexOf(c) != -1);

    let dop = [];
    if (ind != 0) {
      if (ind == 1) {
        dop = [sphereItems[0]];
      } else {
        dop = sphereItems.slice(0, ind);
      }
    }

    let dop2 = [];

    for (let i = 0; i < sphereItems[ind].data.length; i++) {
      let obj = {
        ...sphereItems[ind].data[i],
        clicked: !sphereItems[ind].data[i].clicked,
      };
      dop2.push(obj);
    }

    dop = [
      ...dop,
      { id: sphereItems[ind].id, title: sphereItems[ind].title, data: dop2 },
      ...sphereItems.slice(ind + 1, sphereItems.length),
    ];

    setsphereItems(dop);
  };

  const changeItem = (item) => {
    let dop = [];
    let ind = -1;
    for (let i = 0; i < sphereItems.length; i++) {
      /*{id: 1, title: алкоголь, data: []} */
      ind = sphereItems[i].data.findIndex((p) => p.id == item.id);

      if (ind != -1) {
        if (i != 0) {
          dop = sphereItems.slice(0, i);
        }

        let data = [];
        if (ind == 1) data = sphereItems[i].data.slice(0, 1);
        else {
          if (ind != 0) data = sphereItems[i].data.slice(0, ind);
        }

        data = [
          ...data,
          {
            ...sphereItems[i].data[ind],
            clicked: !sphereItems[i].data[ind].clicked,
          },
          ...sphereItems[i].data.slice(ind + 1, sphereItems[i].data.length),
        ];

        dop = [
          ...dop,
          { ...sphereItems[i], data: data },
          ...sphereItems.slice(i + 1, sphereItems.length),
        ];

        setsphereItems(dop);
        break;
      }
    }
  };


  return (
    <SphereContext.Provider
      value={{
        sphereItems,
        changeItem,
        setsphereItems,
        categoryItems,
        allItems,
        setAllItems,
        setCategoryItems,
        changeSphere,
        allNetworks, 
        setAllNetworks
      }}
    >
      {children}
    </SphereContext.Provider>
  );
}

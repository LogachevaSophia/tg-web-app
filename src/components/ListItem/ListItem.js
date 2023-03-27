import { useState } from "react";
import { useBasketItems } from "../Provider/BasketProvider/BasketHooks";
import { useSphereItems } from "../Provider/SphereProvider/SphereHooks";
import "./ListItem.css";

const ListItem = ({ id, title, squarefrom, squareto, basket }, ...props) => {
  const { addItem, removeItem,changeAll } = useBasketItems();
  const { allItems } = useSphereItems();
  // const [clickedstate, setClicked] = useState(false);
  const clicked = allItems.find(x=> x.id===id).clicked;
  const { changeItem, changeSphere } = useSphereItems();
  return (
    <tr key={id}>
      <th>{title}</th>
      <th>{squarefrom}</th>
      <th>{squareto}</th>
      <th>
        {basket ? (
          <button className='removeFromBasket'
            style={{ backgroundColor: "red" }}
            onClick={() => {
              changeItem({
                id: id,
                title: title,
                squarefrom: squarefrom,
                squareto: squareto,
                clicked: true,
              });
              console.log(title);
              if (title.indexOf("Купить всю сферу") != -1) {
                changeSphere(title);
              }
              if (title.indexOf("Купить все") != -1) {
                console.log('изменяю всю на false');
                changeAll(false);
              }
              removeItem({
                id: id,
                title: title,
                squarefrom: squarefrom,
                squareto: squareto,
              });
            }}
          >
            
          </button>
        ) : (
          <button className="addToBasket"
            disabled={clicked}
            onClick={() => {
              // changeItem({
              //   id: id,
              //   title: title,
              //   squarefrom: squarefrom,
              //   squareto: squareto,
              //   clicked: false,
              // });

              addItem([
                {
                  id: id,
                  title: title,
                  squarefrom: squarefrom,
                  squareto: squareto,
                  clicked: true,
                },
              ]);
            }}
          >

          </button>
        )}
      </th>
    </tr>
  );
};

export default ListItem;

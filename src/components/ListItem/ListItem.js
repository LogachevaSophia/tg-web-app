import { useState } from "react";
import { useBasketItems } from "../Provider/BasketProvider/BasketHooks";

const ListItem = ({ id, title, squarefrom, squareto, basket }) => {
  const { addItem, basketItems, removeItem } = useBasketItems();
  const [clicked, setClicked] = useState(false);
  const style = {disabled:clicked};

  return (
    <tr key={id}>
      <th>{title}</th>
      <th>{squarefrom}</th>
      <th>{squareto}</th>
      <th>
        {basket ? (
          <button   style={{backgroundColor:'red'}}
            onClick={() => {
              removeItem({
                id: id,
                title: title,
                squarefrom: squarefrom,
                squareto: squareto,
              });
             
              
              
            }}
          >
            Удалить
          </button>
        ) : (
          <button disabled={clicked}
            onClick={() => {
              addItem({
                id: id,
                title: title,
                squarefrom: squarefrom,
                squareto: squareto,
              });
              setClicked(true);
            }}
          >
            Купить
          </button>
        )}
      </th>
    </tr>
  );
};

export default ListItem;

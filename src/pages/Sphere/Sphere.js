
import "./Sphere.css";
import { useNavigate } from "react-router-dom";
import Block from "../../components/Block/Block";
import { useState } from "react";

const Sphere = (props) => {
  const [dataProduct, setDataProduct] = useState([
    {
        id: 1,
      title: "Продукты",
      data: [
        { id: 1, title: "ВкусВилл", squarefrom: 100, squareto: 150 },
        { id: 2, title: "Дикси", squarefrom: 100, squareto: 150 },
        { id: 3, title: "Пятерочка", squarefrom: 100, squareto: 200 },
        { id: 4, title: "ВкусВилл", squarefrom: 100, squareto: 150 },
        { id: 5, title: "Дикси", squarefrom: 100, squareto: 150 },
        { id: 6, title: "Пятерочка", squarefrom: 100, squareto: 200 },
      ],
    },
    {
        id: 2,
        title: "Пекарни",
        data: [
          { id: 1, title: "Вольчек", squarefrom: 100, squareto: 150 },
          { id: 2, title: "Цех 85", squarefrom: 100, squareto: 150 },
          { id: 3, title: "Вольчек", squarefrom: 100, squareto: 150 },
          { id: 4, title: "Цех 85", squarefrom: 100, squareto: 150 },
          { id: 5, title: "Вольчек", squarefrom: 100, squareto: 150 },
          { id: 6, title: "Цех 85", squarefrom: 100, squareto: 150 },
        ],
      },
  ]);
  const navigate = useNavigate();
  return (
    <div className="container">
        <button  className="back" onClick={()=> navigate(-1)}>Назад</button>
        {dataProduct.map((elem) => {return(
            <Block title={elem.title} data= {elem.data} key={elem.id}/>
        )})}
    </div>
  );
};
export default Sphere;

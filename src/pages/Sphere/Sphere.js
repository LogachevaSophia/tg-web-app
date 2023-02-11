import List from "../../components/List/List";
import "./Sphere.css";
import { useNavigate } from "react-router-dom";

const Sphere = (props) => {
  const dataProduct = [
    {
      title: "Продукты",
      data: [
        { id: 1, title: "ВкусВилл", squarefrom: 100, squareto: 150 },
        { id: 2, title: "Дикси", squarefrom: 100, squareto: 150 },
        { id: 3, title: "Пятерочка", squarefrom: 100, squareto: 200 },
      ],
    },
    {
        title: "Пекарни",
        data: [
          { id: 1, title: "Вольчек", squarefrom: 100, squareto: 150 },
          { id: 2, title: "Цех 85", squarefrom: 100, squareto: 150 },
        ],
      },
  ];
  const navigate = useNavigate();
  return (
    <div className="container">
        <button  className="back" onClick={()=> navigate(-1)}>Назад</button>
        {dataProduct.map(elem => {return(
            <List title={elem.title} data={elem.data}></List>
        )})}
      {/* <List title={titleProduct} data={dataProduct} /> */}
      {/* <List title={title} data={dataProduct}/> */}
    </div>
  );
};
export default Sphere;

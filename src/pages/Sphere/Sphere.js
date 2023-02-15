
import "./Sphere.css";
import { useNavigate } from "react-router-dom";
import Block from "../../components/Block/Block";
import { useEffect, useState } from "react";
import  Server from '../../service/Server';

const Sphere = (props) => {
  const server = new Server();
  const [dataProduct, setDataProduct] = useState([]);
  const getDataProduct = async () =>{
    const res = server.getSphere().then(onDataLoaded);
    return res;
  }
  useEffect(()=>{
    getDataProduct();
},[getDataProduct])

  

  const onDataLoaded = (res) =>{
    console.log("Данные загрузились");
    console.log(res);
    
    setDataProduct(res.data);
  }
  // const dataProduct =[
  //   {
  //       id: 1,
  //     title: "Продукты",
  //     data: [
  //       { id: 1, title: "ВкусВилл", squarefrom: 100, squareto: 150 },
  //       { id: 2, title: "Дикси", squarefrom: 100, squareto: 150 },
  //       { id: 3, title: "Пятерочка", squarefrom: 100, squareto: 200 },
  //       { id: 4, title: "ВкусВилл", squarefrom: 100, squareto: 150 },
  //       { id: 5, title: "Дикси", squarefrom: 100, squareto: 150 },
  //       { id: 6, title: "Пятерочка", squarefrom: 100, squareto: 200 },
  //     ],
  //   },
  //   {
  //       id: 2,
  //       title: "Пекарни",
  //       data: [
  //         { id: 7, title: "Вольчек", squarefrom: 100, squareto: 150 },
  //         { id: 8, title: "Цех 85", squarefrom: 100, squareto: 150 },
  //         { id: 9, title: "Вольчек", squarefrom: 100, squareto: 150 },
  //         { id: 10, title: "Цех 85", squarefrom: 100, squareto: 150 },
  //         { id: 11, title: "Вольчек", squarefrom: 100, squareto: 150 },
  //         { id: 12, title: "Цех 85", squarefrom: 100, squareto: 150 },
  //       ],
  //     },
  // ];
  const navigate = useNavigate();
  return (
    <div className="container">
        <button  className="back" onClick={()=> navigate(-1)}>Назад</button>
        {console.log(dataProduct)}
        {dataProduct.map((elem) => {return(
            <Block title={elem.title} data= {elem.data} key={elem.id}/>
        )})}
    </div>
  );
};
export default Sphere;

import "./AllNetwork.css";
import { useNavigate } from "react-router-dom";
import Block from "../../components/Block/Block";
import { useEffect } from "react";
import Server from "../../service/Server";
import { useSphereItems } from "../../components/Provider/SphereProvider/SphereHooks";
import ListForAll from "../../components/ListForAll/ListForAll";

const AllNetwork = (props) => {
    const { allItems} = useSphereItems();
  const {categoryItems, allNetworks } = useSphereItems();

//   const getDataProduct = async () => {
//     const res = await server.getCategory();
//     const item = res.data;
//     const dop = item.map((elem) => ({
//       ...elem,
//       data: elem.data.map((item) => ({ ...item, clicked: false, tag:'category' })),
//     }));
//     const data = [...sphereItems, ...dop];
//     setsphereItems(data);
    
//   };
  useEffect(() => {
    // if (sphereItems == "") {
    //   getDataProduct();
    // }
  }, []);

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
      <div class='back-fixed'>
      <button className="back" onClick={() => navigate(-1)}>
        Назад
      </button>
      <button className="back" onClick={() => navigate("/basket")}>
        Корзина
      </button>
      </div>
     <ListForAll
            title={"Все сети"}
            data={allItems}
            key={0}
            id={0}
          />

    </div>
  );
};
export default AllNetwork;

import ListItem from "../ListItem/ListItem";
import "./List.css";
import { useSphereItems } from "../../components/Provider/SphereProvider/SphereHooks";

const List = ({ data, basket, ...props }) => {

    return (
      <div className="list">
        <div className="table">
          <table>
            <tr>
              <th>Компания</th>
              <th>Площадь от</th>
              <th>Площадь до</th>
            </tr>

            {data.map((elem, index) => {
              return (
                <ListItem
                  key={index}
                  id={elem.id}
                  title={elem.title}
                  squarefrom={elem.squarefrom}
                  squareto={elem.squareto}
                  basket={basket}
                  clicked={elem.clicked}
                />
              );
            })}
          </table>
        </div>
      </div>
    );
  }

export default List;

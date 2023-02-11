
import ListItem from "../ListItem/ListItem";
import "./List.css";

const List = ({ data, ...props }) => {




  return (
    <div className="list">
      <div className="table">
        <table>
          <tr>
            <th>Компания</th>
            <th>Площадь от</th>
            <th>Площадь до</th>
          </tr>
          {data.map((elem,index) => {
            return(
              <ListItem key={index} title={elem.title} squarefrom={elem.squarefrom} squareto={elem.squareto}/>
            )
          })}
        </table>
      
      </div>
    </div>
  );
};

export default List;

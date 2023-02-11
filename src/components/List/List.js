import "./List.css";

const List = ({ title, data, ...props }) => {
  return (
    <div className="list">
      <div className="title">
        {title}
        <p></p>
        <button className="buysphere">Купить сферу деятельности</button>
      </div>
      <p></p>
      <div className="table">
        <table>
          <tr>
            <th>Компания</th>
            <th>Площадь от</th>
            <th>Площадь до</th>
          </tr>
          {data.map((elem) => {
            return (
              <tr key={elem.id}>
                <th>{elem.title}</th>
                <th>{elem.squarefrom}</th>
                <th>{elem.squareto}</th>
                <th>
                  <button>Купить</button>
                </th>
              </tr>
            );
          })}
        </table>
        <button className="all">
            Развернуть
        </button>
      </div>
    </div>
  );
};

export default List;

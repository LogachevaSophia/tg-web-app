const ListItem = ({index, title, squarefrom,squareto}) =>{
    return (
        <tr key={index}>
          <th>{title}</th>
          <th>{squarefrom}</th>
          <th>{squareto}</th>
          <th>
            <button>Купить</button>
          </th>
        </tr>
      );

}

export default ListItem;
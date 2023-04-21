import List from "../List/List";
import { Component } from "react";
import "./ListForAll.css";
import { useBasketItems } from "../Provider/BasketProvider/BasketHooks";
import { useState } from "react";
import { useSphereItems } from "../Provider/SphereProvider/SphereHooks";

const ListForAll = ({ title, data, id }, ...props) => {
  const [companyFilter, setcompanyFilter] = useState(false);
  const [squareFrom, setsquareFrom] = useState("");
  const [squareTo, setsquareTo] = useState("");
  const [all, setAll] = useState(true);

  const { changeBlock, changeAll, calcPrice } = useBasketItems();
  const { allItems } = useSphereItems();

  const alphabetSort = (items) => {
    let a = items.sort((prev, next) => {
      var textA = prev.title.toUpperCase();
      var textB = next.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    let b = a.filter((elem) => elem.title.indexOf("Купить всю сферу") === -1);
    let c = b.filter((elem) => 
      elem.title.indexOf("Купить всю категорию") === -1
    );
    let d = c.filter((elem) => 
      elem.title.indexOf("Купить все") === -1
    );
    return d;
  };
  /*
  исхожный кодconst alphabetSort = (items) => {
    return items.sort((prev, next) => {
      var textA = prev.title.toUpperCase();
      var textB = next.title.toUpperCase();
      let v =  textA < textB ? -1 : textA > textB ? 1 : 0;
      let b = v.filter((elem) => elem.title.indexOf('Купить всю сферу')===-1); 
      let c = b.filter((elem) => elem.title.indexOf('Купить всю категорию')===-1);
      let d = b.filter((elem) => elem.title.indexOf('Купить все')===-1);
    return c;
    });
  };*/
  /* 
 с общего блока
 const alphabetSort = (items) => {
    let a = items.sort((prev, next) => {
      var textA = prev.title.toUpperCase();
      var textB = next.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    let b = a.filter((elem) => elem.title.indexOf('Купить всю сферу')===-1); 
    let c = b.filter((elem) => elem.title.indexOf('Купить всю категорию')===-1);
    return c;
  };*/

  const squareFromSort = (items, value) => {
    let b = items.filter(
      (elem) => elem.title.indexOf("Купить всю сферу") === -1
    );
    let c = b.filter(
      (elem) => elem.title.indexOf("Купить всю категорию") === -1
    );
    let d = c.filter((elem) => elem.title.indexOf("Купить все") === -1);
    return d.filter((elem) => elem.squarefrom >= value);
  };
  const squareToSort = (items, value) => {
    let b = items.filter(
      (elem) => elem.title.indexOf("Купить всю сферу") === -1
    );
    let c = b.filter(
      (elem) => elem.title.indexOf("Купить всю категорию") === -1
    );
    let d = c.filter((elem) => elem.title.indexOf("Купить все") === -1);
    return d.filter((elem) => elem.squareto <= value);
  };

  const filterPost = (items, filter) => {
    if (filter[0]) {
      if (isNumeric(filter[1]) & (filter[1].length !== 0)) {
        if (isNumeric(filter[2]) & (filter[2].length !== 0)) {
          if (!filter[3]) {
            return squareToSort(
              squareFromSort(alphabetSort(items), filter[1]),
              filter[2]
            ).slice(0, 3);
          }
          return squareToSort(
            squareFromSort(alphabetSort(items), filter[1]),
            filter[2]
          );
        }
        if (!filter[3]) {
          return squareFromSort(alphabetSort(items), filter[1]).slice(0, 3);
        }
        if (isNumeric(filter[2]) & (filter[2].length !== 0)) {
          if (!filter[3]) {
            return squareToSort(alphabetSort(items), filter[2]).slice(0, 3);
          }
          return squareToSort(alphabetSort(items), filter[2]);
        }
        if (!filter[3]) {
          return squareFromSort(alphabetSort(items), filter[1]).slice(0, 3);
        }
        return squareFromSort(alphabetSort(items), filter[1]);
      }
      if (isNumeric(filter[2]) & (filter[2].length !== 0)) {
        if (!filter[3]) {
          return squareToSort(alphabetSort(items), filter[2]).slice(0, 3);
        }

        return squareToSort(alphabetSort(items), filter[2]);
      }
      if (!filter[3]) {
        return alphabetSort(items).slice(0, 3);
      }
      return alphabetSort(items);
    }
    if (isNumeric(filter[1]) & (filter[1].length !== 0)) {
      if (isNumeric(filter[2]) & (filter[2].length !== 0)) {
        if (!filter[3]) {
          return squareToSort(
            squareFromSort(items, filter[1]),
            filter[2]
          ).slice(0, 3);
        }
        return squareToSort(squareFromSort(items, filter[1]), filter[2]);
      }
      if (!filter[3]) {
        return squareFromSort(items, filter[1]).slice(0, 3);
      }

      return squareFromSort(items, filter[1]);
    }
    if (isNumeric(filter[2]) & (filter[2].length !== 0)) {
      if (!filter[3]) {
        return squareToSort(squareFromSort(items, filter[1]), filter[2]).slice(
          0,
          3
        );
      }
      return squareToSort(squareFromSort(items, filter[1]), filter[2]);
    }
    if (!filter[3]) {
      let b = items.filter(
        (elem) => elem.title.indexOf("Купить всю сферу") === -1
      );
      let c = b.filter(
        (elem) => elem.title.indexOf("Купить всю категорию") === -1
      );
      let d = c.filter((elem) => elem.title.indexOf("Купить все") === -1);
      return d.slice(0, 3);
    }
    let b = items.filter(
      (elem) => elem.title.indexOf("Купить всю сферу") === -1
    );
    let c = b.filter(
      (elem) => elem.title.indexOf("Купить всю категорию") === -1
    );
    let d = c.filter((elem) => elem.title.indexOf("Купить все") === -1);
    return d;
  };

  const isNumeric = (value) => {
    return /^\d+$/.test(value);
  };

  const { addItem, removeItem, setBasketItems, basketItems } = useBasketItems();
  const visiblaData = filterPost(data, [
    companyFilter,
    squareFrom,
    squareTo,
    all,
  ]);

  if (data.length > 1) {
    return (
      <div className="block">
        <div className="title">
          {title}
          <p></p>
          <button
            className="buysphere"
            onClick={() => {
              console.log(data);
              let ind = data.findIndex(
                (p) => p.title.indexOf("Купить все") != -1
              );
              console.log("Пытаюсь добавить в корзину");
              console.log(data[ind]);
              addItem([data[ind]], true);
              //setBasketItems([data[ind]]);

              //changeAll(true);
              // changeBlock(data, true)
              // changeSphere('Купить всю сферу "'+title+'"');
            }}
          >
            Купить всё
          </button>
          <div className="filters">
            <div className="titleFilter">
              <label>Сортировка по алфавиту</label>
              <p></p>
              <input
                type="checkbox"
                id="scales"
                name="scales"
                onChange={(e) => {
                  setcompanyFilter(!companyFilter);
                }}
              ></input>
            </div>
            <div className="squreFromFilter">
              <input
                type="text"
                placeholder="Площадь от"
                id="scales"
                name="scales"
                onChange={(e) => {
                  setsquareFrom(e.target.value);
                }}
              ></input>
            </div>
            <div className="squreToFilter">
              <input
                type="text"
                placeholder="Площадь до"
                id="scales"
                name="scales"
                onChange={(e) => {
                  setsquareTo(e.target.value);
                  // this.setState({ setsquareTo: e.target.value });
                }}
              ></input>
            </div>
          </div>
        </div>
        <List data={visiblaData} basket={false} />
        <div className="all">
          {filterPost(data, [companyFilter, squareFrom, squareTo, true])
            .length > 3 ? (
            <button
              onClick={() => {
                setAll(!all);
              }}
            >
              {all ? "Свернуть" : "Раскрыть"}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
};

export default ListForAll;

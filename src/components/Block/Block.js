import List from "../List/List";
import { Component } from "react";
import "./Block.css";
import { useBasketItems } from "../Provider/BasketProvider/BasketHooks";
import { useState } from "react";
import { useSphereItems } from "../../components/Provider/SphereProvider/SphereHooks";

const Block = ({ title, data, id }, ...props) => {
  const [companyFilter, setcompanyFilter] = useState(false);
  const [squareFrom, setsquareFrom] = useState("");
  const [squareTo, setsquareTo] = useState("");
  const [all, setAll] = useState(false);
  

  const { changeBlock} = useBasketItems();
  const { allItems} = useSphereItems();
  

  const alphabetSort = (items) => {
    return items.sort((prev, next) => {
      var textA = prev.title.toUpperCase();
      var textB = next.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  };

  const squareFromSort = (items, value) => {
    return items.filter((elem) => {
      return elem.squarefrom >= value;
    });
  };
  const squareToSort = (items, value) => {
    return items.filter((elem) => elem.squareto <= value);
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
      return items.slice(0, 3);
    }
    return items;
  };

  const isNumeric = (value) => {
    return /^\d+$/.test(value);
  };

  const { addItem, removeItem } = useBasketItems();
  const visiblaData = filterPost(data, [
    companyFilter,
    squareFrom,
    squareTo,
    all,
  ]);
 if (data.length>1){
  return (
    <div className="block">
      <div className="title">
        {title}
        <p></p>
        <button
         disabled={allItems.find(x=> x.id===(data.find(x=> x.title.indexOf("???????????? ??????")!=-1).id)).clicked}
          className="buysphere"
          onClick={() => {
            let ind = data.findIndex((p) => p.title.indexOf("???????????? ??????") !=-1)
            console.log("?????????????? ???????????????? ?? ??????????????")
           
            addItem([data[ind]]);
            changeBlock(data, true)
            // changeSphere('???????????? ?????? ?????????? "'+title+'"');
            
          }}
        >
          ???????????? ??????
        </button>
        <div className="filters">
          <div className="titleFilter">
            <label>???????????????????? ???? ????????????????</label>
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
              placeholder="?????????????? ????"
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
              placeholder="?????????????? ????"
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
        {filterPost(data, [companyFilter, squareFrom, squareTo, true]).length >
        3 ? (
          <button
            onClick={() => {
              setAll(!all);
            }}
          >
            {all ? "????????????????" : "????????????????"}
          </button>
        ) : (
          ""
        )}
        {/* {all ? (
            <button
              onClick={() => {
                this.setState({ all: !all });
              }}
            >
              ????????????????
            </button>
          ) : (
            <button
              onClick={() => {
                this.setState({ all: !all });
              }}
            >
              ????????????????
            </button>
          )} */}
      </div>
    </div>
  );}
};

export default Block;

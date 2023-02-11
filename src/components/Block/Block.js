import List from "../List/List";
import { Component } from "react";
import "./Block.css";

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyFilter: false,
      squareFrom: "",
      squareTo: "",
      all: false,
    };
  }

  alphabetSort = (items) => {
    return items.sort((prev, next) => {
      var textA = prev.title.toUpperCase();
      var textB = next.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  };

  squareFromSort = (items, value) => {
    return items.filter((elem) => {
      return elem.squarefrom >= value;
    });
  };
  squareToSort = (items, value) => {
    return items.filter((elem) => elem.squareto <= value);
  };

  filterPost = (items, filter) => {
    if (filter[0]) {
      if (this.isNumeric(filter[1]) & (filter[1].length !== 0)) {
        if (this.isNumeric(filter[2]) & (filter[2].length !== 0)) {
          if (!filter[3]) {
            return this.squareToSort(
              this.squareFromSort(this.alphabetSort(items), filter[1]),
              filter[2]
            ).slice(0, 3);
          }
          return this.squareToSort(
            this.squareFromSort(this.alphabetSort(items), filter[1]),
            filter[2]
          );
        }
        if (!filter[3]) {
          return this.squareFromSort(this.alphabetSort(items), filter[1]).slice(
            0,
            3
          );
        }
        if (this.isNumeric(filter[2]) & (filter[2].length !== 0)) {
          if (!filter[3]) {
            return this.squareToSort(this.alphabetSort(items), filter[2]).slice(0,3)
          }
          return this.squareToSort(this.alphabetSort(items), filter[2])
        }
        if (!filter[3]){
          return this.squareFromSort(this.alphabetSort(items), filter[1]).slice(0,3);
        }
        return this.squareFromSort(this.alphabetSort(items), filter[1]);
      }
      if (this.isNumeric(filter[2]) & (filter[2].length !== 0)) {
        if (!filter[3]) {
          return this.squareToSort(this.alphabetSort(items), filter[2]).slice(0,3);
        }

        return this.squareToSort(this.alphabetSort(items), filter[2]);
      }
      if (!filter[3]) {
        return this.alphabetSort(items).slice(0, 3);
      }
      return this.alphabetSort(items);
    }
    if (this.isNumeric(filter[1]) & (filter[1].length !== 0)) {
      if (this.isNumeric(filter[2]) & (filter[2].length !== 0)) {
        if (!filter[3]) {
          return this.squareToSort(
            this.squareFromSort(items, filter[1]),
            filter[2]
          ).slice(0, 3);
        }
        return this.squareToSort(
          this.squareFromSort(items, filter[1]),
          filter[2]
        );
      }
      if (!filter[3]) {
        return this.squareFromSort(items, filter[1]).slice(0, 3);
      }

      return this.squareFromSort(items, filter[1]);
    }
    if (this.isNumeric(filter[2]) & (filter[2].length !== 0)) {
      console.log('HHEEELLOOO')
      if (!filter[3]) {
        return this.squareToSort(
          this.squareFromSort(items, filter[1]),
          filter[2]
        ).slice(0, 3);
      }
      return this.squareToSort(
        this.squareFromSort(items, filter[1]),
        filter[2]
      );
    }
    if (!filter[3]) {
      return items.slice(0, 3);
    }
    return items;
  };

  isNumeric = (value) => {
    return /^\d+$/.test(value);
  };

  render() {
    const { title, data } = this.props;
    const { companyFilter, squareFrom, squareTo, all } = this.state;
    const visiblaData = this.filterPost(data, [
      companyFilter,
      squareFrom,
      squareTo,
      all,
    ]);
    return (
      <div className="block">
        <div className="title">
          {title}
          <p></p>
          <button className="buysphere">Купить сферу деятельности</button>
          <div className="filters">
            <div className="titleFilter">
              <label>Сортировка по алфавиту</label>
              <p></p>
              <input
                type="checkbox"
                id="scales"
                name="scales"
                onChange={(e) => {
                  this.setState({ companyFilter: !companyFilter });
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
                  this.setState({ squareFrom: e.target.value });
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
                  this.setState({ squareTo: e.target.value });
                }}
              ></input>
            </div>
          </div>
        </div>
        <List data={visiblaData} basket={false} />
        <div className="all">
          {all ? (
            <button
              onClick={() => {
                console.log("click");
                this.setState({ all: !all });
              }}
            >
              Свернуть
            </button>
          ) : (
            <button
              onClick={() => {
                console.log("click");
                this.setState({ all: !all });
              }}
            >
              Раскрыть
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Block;

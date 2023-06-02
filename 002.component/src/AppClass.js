import { Component } from "react";
import CompClass from "./CompClass";

class AppClass extends Component {
  dataArr = [
    ["a", "Alphabet"],
    ["apple", "Fruit"],
    ["albatross", "Bird"],
    ["allium", "Flower"],
    ["ant", "Insect"],
  ];
  dataObj = [
    { item: "a", group: "Alphabet" },
    { item: "apple", group: "Fruit" },
    { item: "albatross", group: "Bird" },
    { item: "allium", group: "Flower" },
    { item: "ant", group: "Insect" },
  ];

  render() {
    return (
      <div>
        <ul>
          {this.dataArr.map((v, i) => (
            <li key={v[0]}>
              <b>{v[0]}</b> - {v[1]}
            </li>
          ))}
        </ul>
        <ul>
          {this.dataObj.map((v, i) => (
            <li key={v.item}>
              <b>{v.item}</b> - {v.group}
            </li>
          ))}
        </ul>
        <ul>
          {this.dataObj.map((v, i) => (
            <CompClass key={v.item} value={v} index={i} />
          ))}
        </ul>
      </div>
    );
  }
}

export default AppClass;

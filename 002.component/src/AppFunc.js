import CompFunc from "./CompFunc";

const AppFunc = () => {
  const dataArr = [
    ["a", "Alphabet"],
    ["apple", "Fruit"],
    ["albatross", "Bird"],
    ["allium", "Flower"],
    ["ant", "Insect"],
  ];
  const dataObj = [
    { item: "a", group: "Alphabet" },
    { item: "apple", group: "Fruit" },
    { item: "albatross", group: "Bird" },
    { item: "allium", group: "Flower" },
    { item: "ant", group: "Insect" },
  ];

  return (
    <div>
      <ul>
        {dataArr.map((v, i) => (
          <li key={v[0]}>
            <b>{v[0]}</b> - {v[1]}
          </li>
        ))}
      </ul>
      <ul>
        {dataObj.map((v, i) => (
          <li key={v.item}>
            <b>{v.item}</b> - {v.group}
          </li>
        ))}
      </ul>
      <ul>
        {dataObj.map((v, i) => (
          <CompFunc key={v.item} value={v} index={i} />
        ))}
      </ul>
    </div>
  );
};

export default AppFunc;

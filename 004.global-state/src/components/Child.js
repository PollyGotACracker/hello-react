import { useCallback } from "react";
import { useDataContext } from "../contexts/DataContext";

const Child = ({ groupIndex, itemIndex, item }) => {
  const { action } = useDataContext();

  const onClickItem = useCallback(() => {
    // console.log(groupIndex, itemIndex);
    action.changeColor(item);
    console.log(item);
  }, [item]);

  return (
    <div
      onClick={onClickItem}
      style={{
        cursor: "pointer",
        margin: "5px",
        width: "50px",
        height: "50px",
        backgroundColor: item,
      }}
    ></div>
  );
};

export default Child;

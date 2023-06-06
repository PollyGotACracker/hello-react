import { useMemo } from "react";
import { useDataContext } from "../contexts/DataContext";
import SubChild from "./SubChild";

const Parent = () => {
  const { state, action } = useDataContext();

  const Groups = useMemo(() => {
    return Array(state.data.length)
      .fill()
      .map((_, i) => (
        <SubChild key={state.data[i]} groupIndex={i} group={state.data[i]} />
      ));
  }, [state.data]);

  return (
    <>
      <div>{Groups}</div>
      <input
        type="color"
        onChange={(e) => action.changeColor(e.target.value)}
        value={state.color}
      />
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: state.color,
        }}
      ></div>
    </>
  );
};

export default Parent;

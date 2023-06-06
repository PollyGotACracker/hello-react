import { useMemo } from "react";
import Child from "./Child";

const SubChild = ({ groupIndex, group }) => {
  const Items = useMemo(() => {
    return Array(group.length)
      .fill()
      .map((_, i) => (
        <Child
          key={group[i]}
          groupIndex={groupIndex}
          itemIndex={i}
          item={group[i]}
        />
      ));
  }, [group, groupIndex]);

  return <div style={{ display: "flex" }}>{Items}</div>;
};

export default SubChild;

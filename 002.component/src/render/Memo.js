import { useState, useCallback } from "react";
import MemoComp from "./MemoComp";

const Memo = () => {
  const [value, setValue] = useState("");
  const [array, setArray] = useState([]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    setArray([...array, value]);
    setValue("");
  });
  const onChangeInput = useCallback((e) => setValue(e.target.value));

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input value={value} onChange={onChangeInput} />
        <button>submit</button>
      </form>
      <div>
        {array.map((item, index) => {
          return (
            <MemoComp key={`${index} ${item}`} item={item} index={index} />
          );
        })}
      </div>
    </>
  );
};

export default Memo;

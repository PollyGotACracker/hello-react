import { useState, useCallback, useRef } from "react";
import MemoComp from "./MemoComp";

const Memo = () => {
  const [value, setValue] = useState("");
  const [array, setArray] = useState([]);
  const inputRef = useRef(null);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      setArray([...array, value]);
      setValue("");
      inputRef.current.focus();
    },
    [array, value]
  );

  const onChangeInput = useCallback((e) => setValue(e.target.value), [value]);

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChangeInput} />
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

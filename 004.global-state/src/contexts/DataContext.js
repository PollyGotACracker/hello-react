import {
  useReducer,
  useMemo,
  createContext,
  useContext,
  useCallback,
} from "react";

const DataContext = createContext();

// useContext(DataContext) 를 custom hook 으로 만들어 사용하는 방법
export const useDataContext = () => {
  return useContext(DataContext);
};

const TYPE = {
  SET_COLOR: "SET_COLOR",
  SET_HEX: "SET_HEX",
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPE.SET_COLOR:
      return { ...state, color: action.value };

    case TYPE.SET_HEX: {
      return { ...state, hex: state.value === 0 ? 1 : 0 };
    }

    default:
      return state;
  }
};

const initState = {
  color: "#ebedf0",
  data: [
    ["#3a4866", "#4e5a75", "#616d85", "#757f94", "#8991a3"],
    ["#9da4b3", "#b0b6c2", "#c4c8d1", "#d8dae0", "#ebedf0"],
  ],
};

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const changeColor = useCallback(
    (value) => dispatch({ type: TYPE.SET_COLOR, value }),
    []
  );

  // Context.Provider 의 value 는 반드시 useMemo 로 성능 최적화 할 것
  // dispatch 함수는 변하지 않으므로 deps 에 추가할 필요 없다.
  const value = useMemo(
    () => ({
      // state 는 reducer 의 state 값(initState) 와 같다.
      state: { color: state.color, data: state.data },
      action: { changeColor },
    }),
    [state.color, changeColor]
  );
  // context 값을 Context.Provider 의 props(value) 로 전달
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

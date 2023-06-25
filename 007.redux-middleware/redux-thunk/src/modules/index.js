// reducer 함수들을 하나로 통합
import { combineReducers } from "redux";
import counter from "./counter";
import sample from "./sample";
import loading from "./loading";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export default rootReducer;

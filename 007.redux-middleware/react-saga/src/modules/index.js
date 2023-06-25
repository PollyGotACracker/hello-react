// reducer 함수들을 하나로 통합
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./counter";
import sample, { sampleSaga } from "./sample";
import loading from "./loading";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export function* rootSaga() {
  // all: 여러 saga 통합
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;

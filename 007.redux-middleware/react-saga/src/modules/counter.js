import { createAction, handleActions } from "redux-actions";
import {
  delay,
  put,
  // takeEvery,
  takeLatest,
  select,
  throttle,
} from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// () => undefined: mouse click event 가 payload 로 전달되는 것 방지
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
  // yield delay(1000); // delay: delay(ms)
  yield put(increase()); // put: dispatch action
  // select: saga 내부에서 현재 state 조회
  const number = yield select((state) => state.counter);
  console.log("current:", number);
}

function* decreaseSaga() {
  yield delay(1000); // delay: delay(ms)
  yield put(decrease()); // put: dispatch action
}

export function* counterSaga() {
  // takeEvery: 전달된 모든 action 에 대해 지정된 작업 처리
  // 같은 action 이 중첩되어 dispatch 되면 모두 처리
  // 여러 번 클릭하면 1초 뒤 + 1 을 클릭 횟수만큼 실행
  // yield takeEvery(INCREASE_ASYNC, increaseSaga);

  // throttle(<ms>, <action.type>, <function>): saga 의 실행 주기 제한. 지정한 시간에 단 한번 호출
  yield throttle(1000, INCREASE_ASYNC, increaseSaga);
  // takeLatest: 기존 작업을 취소하고 가장 마지막 실행 작업 처리
  // 같은 action 이 중첩되어 dispatch 되면 가장 마지막 작업만 처리
  // 여러 번 클릭하면 1초 뒤 - 1 을 한 번 실행
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initial = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initial
);

export default counter;

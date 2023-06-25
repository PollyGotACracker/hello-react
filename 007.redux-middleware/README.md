# Redux Middleware

- action 을 dispatch 하면 reducer 이전에 지정된 작업들을 먼저 실행
- middleware 내에서 store.dispatch 시 가장 처음 middleware 부터 다시 처리

```js
// next: 다음 middleware 또는 reducer 에게 action 전달
// next 를 사용하지 않으면 action 은 reducer 에 전달되지 않는다.
const middleware = (store) => (next) => (action) => {
  console.group(action && action.type);
  console.log("before", store.getState());
  console.log("action", action);
  next(action);
  console.log("after", store.getState());
  console.groupEnd();
};

export default middleware;
```

## 적용

```js
// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import rootReducer, { rootSaga } from "./modules";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk, sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

## 종류

### redux-thunk

- 비동기 작업 처리 시 가장 기본적으로 사용
- 소규모의 프로젝트에 적합
- action 생성 함수에서 action 객체 대신 함수를 dispatch 할 수 있음

#### thunk 함수

- 특정 작업을 지연하기 위하여 함수로 감싼 것
- 로직을 분리하여 별도의 파일에 작성할 경우 src/lib 에 위치

```js
const myThunk = (id) => async (dispatch, getState) => {
  // api data 요청 및 dispatch 코드 작성
  dispatch({ type: GET_DATA });
  try {
    const response = await api.getData(id);
    dispatch({ type: GET_DATA_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({
      type: GET_DATA_FAILURE,
      payload: e,
      error: true,
    });
  }
  throw e;
};
```

### redux-saga

- ES6 generator 를 사용하여 비동기 작업을 관리
- 복잡한 프로젝트에 적합
- 기존 요청 취소, 특정 액션 모니터링, 웹소켓 사용, API 요청 실패 시 재요청 등

```js
// ES6 Generator

function* generator() {
  console.log("generator executed!");
  let a = yield;
  let b = yield;
  console.log("a + b");
  yield a + b;
  console.log("a - b");
  yield a - b;
  console.log("a * b");
  yield a * b;
}
const calc = generator();

calc.next();
// generator executed!
// {value: undefined, done: false}
calc.next(2);
// {value: undefined, done: false}
calc.next(3);
// a + b
// {value: 7, done: false}
calc.next();
// a - b
// {value: -1, done: false}
calc.next();
// a * b
// {value: 6, done: false}
calc.next();
// {value: undefined, done: true}
```

```js
// action monitoring

const YES = "YES";
const NO = "NO";

function* myWatcher() {
  console.log("myWatcher executed!");
  let prevAction = null;
  while (true) {
    const action = yield;
    console.log("before:", prevAction);
    prevAction = action;
    if (action.type === YES) {
      console.log("YES!");
    }
    if (action.type === NO) {
      console.log("NO...");
    }
  }
}

const watch = myWatcher();
watch.next();
// myWatcher executed!
// {value: undefined, done: false}
watch.next({ type: "SOMETHING" });
// before: null
// {value: undefined, done: false}
watch.next({ type: NO });
// before: {type: 'SOMETHING'}
// NO...
// {value: undefined, done: false}
watch.next({ type: YES });
// before: {type: 'NO'}
// YES!
// {value: undefined, done: false}
watch.next({ type: NO });
// before: {type: 'YES'}
// NO...
// {value: undefined, done: false}
```

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
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
```

## 종류

### redux-thunk

- 비동기 작업 처리 시 가장 기본적으로 사용
- 소규모의 프로젝트에 적용
- action 생성 함수에서 action 객체 대신 함수를 반환

### thunk 함수

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

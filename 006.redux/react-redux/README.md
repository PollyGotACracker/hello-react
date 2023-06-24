# React Redux

1. src/components/ 의 presentational 컴포넌트들에서 UI 및 로직 작성
2. src/modules/ 에 action type 상수, action 생성 함수, state 초기값 및 reducer 함수 정의  
   이때 action 생성 함수는 export, reducer 함수는 default 로 export 할 것
3. 같은 폴더에 index.js 를 생성한 뒤, `combineReducers()`(react-redux) 를 사용해 모든 reducer 함수 통합(rootReducer)
4. root 의 index.js 에서 `createStore()`(redux) 에 rootReducer 를 전달하고 store 생성
5. 같은 파일에서 `Provider`(react-redux) 컴포넌트로 App 컴포넌트를 감싸고 store 전달
6. src/containers/ 에 store 와 연결할 Container 컴포넌트 생성 후 store 와 연결
7. App.js 에서 Container 컴포넌트 import 하여 적용

## API

### `useSelector()`, `useDispatch()`

- useSelector: Redux 의 state 조회
- useDispatch: 컴포넌트 내에서 store 의 dispatch 사용 가능

```jsx
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from "../components/myItem";
import { insert, remove } from "../modules/myModule";

const myContainer = () => {
  // const propA = useSelector((state) => state.propA);
  const { valueA, valueB } = useSelector(({ propA }) => ({
    valueA: propA.valueA,
    valueB: propA.valueB,
  }));

  const dispatch = useDispatch();
  const onInsert = useCallback((value) => dispatch(insert(value)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  return (
    <Item
      valueA={valueA}
      valueB={valueB}
      onInsert={onInsert}
      onRemove={onRemove}
    />
  );
};

export default myContainer;
```

### `useStore()`

- 컴포넌트 내부에서 store 객체를 직접 사용할 수 있다.
- reducer 교체 등 일반적이지 않은 상황에서 사용된다.

```jsx
import { useStore } from "react-redux";

const myComp = () => {
  const store = useStore();
  store.dispatch({ type: "MY_ACTION" });
  store.getState();
};

export default myComp;
```

### `connect()`

- 컨테이너 컴포넌트와 redux 를 연동하는 함수(hooks 로 대체 가능)
- parameter 에 각각 state 와 action 생성 함수(return 값)를 컴포넌트 props 로 넘겨주는 함수를 전달한다.
- 두 번째 parameter 는 action 생성 함수로 이루어진 객체를 넣을 수 있다.
- connect 가 return 한 함수의 parameter(마지막 소괄호) 에 컴포넌트를 전달하면, redux 와 연결된 컴포넌트를 return 한다.

```jsx
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

const myContainer = ({ valueA, valueB, insert, remove }) => {
  return (
    <Item valueA={valueA} valueB={valueB} onInsert={insert} onRemove={remove} />
  );
};

export default connect(
  (state) => ({ value: state.propA.value }),
  // (dispatch) =>
  // 방법 1:
  // ({
  // insert: () => dispatch(insert()),
  // remove: () => dispatch(remove()),
  // })
  // 방법 2: bindActionCreators({ insert, remove }, dispatch)
  {
    insert,
    remove,
  }
)(myContainer);
```

## Redux Middlewares

### redux-thunk

- action 객체 뿐만 아니라 함수를 dispatch 가능. 비동기 작업 처리

### redux-saga

- action 을 모니터링하여 특정 action 발생 시 특정 작업을 실행.
- Generator 를 사용하여 side Effect 처리(요청 취소, 요청 실패 시 재요청 등)

## Libraries

### redux-actions

- action 생성 함수를 간단하게 작성 가능한 라이브러리
- `createAction()`: action 생성 함수 선언
- `handleActions()` : reducer 에서 action type 분기 시 switch 문 대신 사용

```js
import { createAction, handleActions } from "redux-actions";

const ACTION_TYPE1 = "DOMAIN/ACTION_TYPE";
export const actionFunc = createAction(ACTION_TYPE, (value) => value);
const initalState = { value: 0 };
const reducer = handleActions(
  {
    // 모든 추가 데이터는 action.payload 로 접근할 수 있다.
    [ACTION_TYPE]: (state, { payload: value }) => ({ ...state, value }),
  },
  initalState
);

export default reducer;
```

### immer

- 데이터 객체의 깊이가 깊어져 불변성 유지가 어려울 경우 사용하는 라이브러리
- `produce(state, draft => {})`: 첫 번째 인수는 불변성을 유지할 값(생략 가능), 두 번째 인수는 값의 상태를 업데이트 하는 함수

```js
produce(state, (draft) => {
  draft.value = value;
});
```

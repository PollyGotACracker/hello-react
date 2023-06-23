# Redux

- [ko.redux.js.org](https://ko.redux.js.org/)
- 단 하나의 상태(예측 가능성)
- 원본을 복제하고 이를 수정 후 새로운 원본으로 대체함으로써 각각의 상태 변화가 서로에게 영향을 주지 않는다.
- 중앙집중적 데이터 관리(store): 복잡한 로직의 단순화
- Module Reloading: 코드만 변경되고 데이터는 유지(hot reloading)

## Redux 의 3원칙

- Single source of truth : application 내 store 는 단 하나만 존재한다.
- State is read-only : state 는 reducer 를 통해서 변경해야 한다.
- Changes are made with pure functions: Reducer 는 기존 state 를 직접 변경하지 않고, state object 로 복제하여 return 해야 한다.

## Redux DevTools

- [chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- Time Traveling: 특정 시점으로 되돌아 갈 수 있다.
  - export 및 import 기능으로 모든 변경 기록을 파일로 저장하고 복원 가능

```js
const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

## 용어

- action: dispatch 함수에 전달되는 객체 `{ type, payload }`
- render: getState 를 통해 state 값에 접근, UI를 rendering 하는 사용자 정의 함수
- store: state, actions, reducer 정보를 저장하는 container
  - state: 전역 데이터. 직접 수정하지 않고 reducer 함수를 통해서 변경할 것
  - `dispatch(<action>)`:
    1. reducer 함수를 호출해서 state 값 업데이트 (현재 state 값과 action 의 값인 객체 전달)
    2. 이후 subscribe 를 통해 render 함수 호출
  - `subscribe()`:  
    render 함수를 subscribe 에 등록(구독)하면 state 값이 바뀔 때마다 render 함수가 호출되면서 UI 갱신
  - `reducer = (state, action) => {}`:  
    dispatch 를 통해 action 이 전달되면, 기존 state 값과 dispatch action 값을 참조하여 새로운 state 값을 생성하는 사용자 정의 함수
  - `getState()`: 현재 state 값에 접근

## Redux Middleware

- redux-thunk: action 객체 뿐만 아니라 함수를 dispatch 가능. 비동기 작업 처리
- redux-saga: action 을 모니터링하여 특정 action 발생 시 특정 작업을 실행.  
  Generator 를 사용하여 side Effect 처리(요청 취소, 요청 실패 시 재요청 등)

## Redux vs useReducer + Context API

- Context API 는 소규모, Redux 는 대규모의 프로젝트에 사용하라.
- Redux 는 변경된 값을 구독하는 요소만을 선택적으로 리렌더링한다.  
  Context API 는 useMemo 또는 useCallback 을 추가로 사용해야 한다.
- Redux 는 상태의 특정 시점을 추적하여 디버깅 할 수 있다.

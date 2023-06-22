# Redux

- [ko.redux.js.org](https://ko.redux.js.org/)
- 단 하나의 상태(예측 가능성)
- 원본을 복제하고 이를 수정 후 새로운 원본으로 대체함으로써 각각의 상태 변화가 서로에게 영향을 주지 않는다.
- 중앙집중적 데이터 관리(store): 복잡한 로직의 단순화
- Module Reloading: 코드만 변경되고 데이터는 유지(hot reloading)

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

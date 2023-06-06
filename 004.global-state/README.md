# Global State

- useReducer Hook 과 Context API 를 이용한 전역 상태 관리

## useReducer

- state 가 많아지는 경우 묶어서 한번에 관리할 수 있다.
- 컴포넌트 바깥으로 로직(reducer)을 분리 가능하다.
- Redux 는 state 가 동기적으로 변하지만 useReducer 는 비동기적이므로 주의한다.

### 개념

#### state

- 값의 현재 상태. state 의 변경은 반드시 reducer 함수 내에서 이루어져야 한다.

#### action

- dispatch 로 전달할 업데이트 관련 정보
- 객체, 문자열, 숫자 등 어떤 데이터이든 사용할 수 있다.
- 주로 action.type 을 dispatch 에 문자열로 전달한다.  
  `dispatch({ type: "A" })`  
  이때 action.type 값은 상수로 따로 정의하는 것이 좋다.
- input 상태를 관리할 때, Event.target 을 dispatch 로 전달하여 input 태그의 name 속성값과 value 값을 각각 action.name 과 action.value 형태로 reducer 함수에서 사용할 수 있다.

#### dispatch

- action 을 발생시키는 함수
- dispatch 의 인수로 action 을 전달하여 reducer 함수를 호출한다.

#### reducer

- dispatch 로 전달받은 action 에 따라 state 를 어떻게 처리할 것인지를 작성하는 함수
- 주로 action.type 의 값에 따라 조건이 분기되는 switch문을 사용한다.

```js
import { useReducer } from "react";

export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREASE:
      return { value: state.value + 1 };
    case DECREASE:
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  // useReducer 에 reducer 함수와 state 의 초기값을 전달
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>COUNTER VALUE: {state.value}</p>
      <button onClick={() => dispatch({ type: INCREASE })}>+ 1</button>
      <button onClick={() => dispatch({ type: DECREASE })}>- 1</button>
    </div>
  );
};

export default Counter;
```

## Context API

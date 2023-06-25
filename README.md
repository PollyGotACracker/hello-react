# :ear_of_rice: Hello React

## 목표

- 상태 관리
- route 관리
- 상수 데이터, mock 데이터
- JS immutability

## 학습한 강의 및 교재

- 조현영, 웹 게임을 만들며 배우는 React
- Egoing Lee, 생활코딩 - Redux
- 김민준(VELOPERT), 리액트를 다루는 기술 개정판

## React Developer Tools

- [chrome extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## 기억할 것

### 함수형 setState

- `setState((prevState) => { return ... })`

### lazy init (늦은 초기화)

- state 값에 함수를 넣음으로써 함수의 return 값을 state 초깃값으로 사용할 수 있다.  
  단, 함수는 최초 한번만 실행되며, 함수를 계속적으로 호출하지 않도록 소괄호를 작성하지 않는다.  
  `const [result, setResult] = useState(getArray)`
- 그러나 값을 다시 할당할 때는 함수를 호출하여 그 return 값을 받는다.  
  `setResult(getArray())`

### props

- 자식 컴포넌트에서 props 값을 변경해야 할 경우 직접 변경하지 않고 state 를 사용한다.

## JSX 와 조건부 렌더링

- 삼항연산자와 함께 false, undefined, null 사용
- 조건문 뒤에 && 연산자 사용
  _함수를 사용해 코드를 JSX 바깥으로 빼낼 수 있다. `<div>{ renderText() }</div>`_

### useState 와 useRef

- useState 는 값이 바뀔 경우 reRendering 이 수행되지만 useRef 는 그렇지 않다.

### Memoization

- 이전에 수행한 연산의 결과값을 저장하여 동일한 입력이 들어올 때 그 값을 재활용하여 중복 연산을 피하는 기법.
- useCallback 과 useMemo 는 모두 deps 로 지정한 값이 변할 때 재실행된다. deps 에는 최신 값을 유지해야 하는 요소를 넣는다.

#### `useMemo`: memoization 된 return 값을 기억

- 함수 재실행 방지:  
  함수에 적용하여 컴포넌트가 reRendering(재실행) 될 때 연산량이 많은 함수가 불필요하게 재실행되는 것을 방지
- DOM reRendering 방지:  
  Array.map 을 사용하여 여러 node 를 return 할 때 deps 에 배열 요소를 넣어 모든 node 가 불필요하게 한번에 reRendering 되는 현상 방지

```jsx
<div>{data.map((v, i) => useMemo(() => <Comp key={i} value={v} />, [v]))}</div>
```

#### `useCallback`: memoization 된 callback 함수를 기억

- 자식 컴포넌트에 props 로 함수 전달:  
  부모 컴포넌트에서 reRendering 이 발생할 때 동일한 함수의 재할당을 막음으로써 불필요한 props 값 변경으로 자식 컴포넌트까지 reRendering 되는 현상을 방지한다.
- 외부 API 호출 시 인수 전달:  
  API 에 넘겨주는 값이 변경될 때만 호출 함수가 재할당되도록 deps 를 작성하고, useEffect 의 deps 에는 해당 함수를 작성한다.

### reRendering 원인 분석

```js
import { useEffect, useRef } from "react";

const Comp = ({ value1, value2, value3 }) => {
  const ref = useRef([]);
  useEffect(() => {
    // 결과가 false 인 요소가 reRendering 원인
    console.log(
      value1 === ref.current[0],
      value2 === ref.current[1],
      value3 === ref.current[2]
    );
    ref.current = [value1, value2, value3];
  }, [value1, value2, value3]);
};
```

- `React.memo` 를 컴포넌트에 적용

### HTML attributes

- class => `className`, for => `htmlFor`

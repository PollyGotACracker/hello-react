# :ear_of_rice: Hello React

## 목표

- 상태 관리
- redux 공부

## 기억할 것

### 함수형 setState

- `setState((prevState) => { return ... })`

### lazy init (늦은 초기화)

- state 값에 함수를 넣음으로써 함수의 return 값을 state 초깃값으로 사용할 수 있다. 단, 함수는 최초 한번만 실행되며, 함수를 계속적으로 호출하지 않도록 소괄호를 작성하지 않는다.
  `const [result, setResult] = useState(getArray)`
- 그러나 값을 다시 할당할 때는 함수를 호출하여 그 return 값을 받는다.
  `setResult(getArray())`

### props

- 자식 컴포넌트에서 props 값을 변경해야 할 경우 직접 변경하지 않고 state 를 사용한다.

## JSX 와 조건부 랜더링

- 삼항연산자와 함께 false, undefined, null 사용
- 조건문 뒤에 && 연산자 사용
  _함수를 사용해 코드를 JSX 바깥으로 빼낼 수 있다. `<div>{ renderText() }</div>`_

### useState 와 useRef

- useState 는 값이 바뀔 경우 reRendering 이 수행되지만 useRef 는 그렇지 않다.

### Memoization

- 이전에 수행한 연산의 결과값을 저장하여 동일한 입력이 들어올 때 그 값을 재활용하여 중복 연산을 피하는 기법.
- useCallback 과 useMemo 는 모두 deps 로 지정한 값이 변할 때 실행된다.
- `useMemo`: memoization 된 return 값을 반환
- `useCallback`: memoization 된 callback 함수를 반환  
  자식 컴포넌트에 props 로 함수 전달: 부모 컴포넌트에서 reRendering 이 발생할 때 동일한 함수의 재할당을 막음으로써 불필요한 props 값 변경으로 자식 컴포넌트까지 reRendering 되는 현상을 방지한다.
  외부 API 호출 시 인수 전달: API 에 넘겨주는 값이 변경될 때만 호출 함수가 재할당되도록 deps 를 작성하고, useEffect 의 deps 에는 해당 함수를 작성한다.

### HTML attributes

- class => `className`, for => `htmlFor`

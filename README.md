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

### HTML attributes

- class => `className`, for => `htmlFor`

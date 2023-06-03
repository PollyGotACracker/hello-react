# LifeCycle

## Class Component

1. constructor -> render -> ref -> componentDidMount
2. -> (setState/props 변경 -> shouldComponentUpdate(true) -> reRender -> componentDidUpdate)
3. -> 부모 Comp 에서 자식 Comp 를 없앨 때 -> componentWillUnmount -> 소멸

- componentDidMount 나 componentUpdate 에서 조건문을 통해 모든 state 를 분기 처리
- 각 시점별 메서드에서 모든 state 를 처리

## Functional Component

- useEffect: 화면 rendering 직후 실행
- useLayoutEffect: 화면의 layout 변경이 감지된 후, rendering 전에 실행
- 이러한 hooks 는 state 별로 나누어 중복 작성 가능

# Custom Hooks

- 특정 hook 을 자주 사용할 경우 기능별 custom hook 을 만들어 처리

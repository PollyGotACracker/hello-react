# LifeCycle

- 클래스와 함수 컴포넌트의 생명주기 관련 메서드들

## Class Component

1. constructor -> render -> ref -> componentDidMount
2. -> (setState/props 변경 -> shouldComponentUpdate(true) -> reRender -> componentDidUpdate)
3. -> 부모 Comp 에서 자식 Comp 를 없앨 때 -> componentWillUnmount -> 소멸

- componentDidMount 나 componentUpdate 에서 조건문을 통해 모든 state 를 분기 처리
- 각 시점별 메서드에서 모든 state 를 처리

## Functional Component

- useEffect, useLayoutEffect hooks 는 state 별로 나누어 중복 작성 가능

### `useEffect`

- 화면 rendering 직후 실행
- cf) update 시에만 실행되도록 하는 방법

```js
const [data, setData] = useState([]);
const mounted = useRef(false);
useEffect(() => {
  if (!mounted.current) {
    // 최초 mount 시에는 아무것도 하지 않음
    mounted.current = true;
  } else {
    // update 시 ajax 작업 수행
  }
}, [data]);
```

### `useLayoutEffect`

- 화면의 layout 변경이 감지된 후, rendering 전에 실행
- state 의 업데이트 로 인해 깜박임이 발생할 때 사용

### `useTransition`

- 업데이트할 값이 매우 많아 성능 문제가 발생하는 경우, 즉시 업데이트 할 값과 지연 업데이트 할 값을 구분하여 우선순위를 정함
- `startTransition` 의 내부에서 지연 업데이트할 값을 변경

```jsx
import { useState, useTransition, Suspense } from "react";
import Spinner from "./Spinner";
import Contents from "./Contents";

const Comp = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  // 첫 번째 값은 지연 여부를 나타내는 Boolean
  const [isPending, startTransition] = useTransition();

  const func = (e) => {
    // 즉시 변경되어야 하는 state 를 작성
    setValue(e.target.value);
    // delay 가 있어도 되는 state 만을 작성
    startTransition(() => {
      setResult([...result, e.target.value]);
    });
  };

  return <div>{isPending ? <Spinner /> : <Contents data={result} />}</div>;
};
```

### `useDeferredValue`

- 업데이트할 값이 매우 많아 성능 문제가 발생하는 경우, 지연 업데이트할 값을 지정
- return 값을 캐싱하는 `useMemo` 와 함께 사용하면 좋음

```js
import { useState, useDeferredValue, useMemo, Suspense } from "react";

const Comp = () => {
  const [result, setresult] = useState([]);
  const deferred = useDeferredValue(result);

  const contents = useMemo(() => <SearchResult data={result} />, [deferred]);

  return <Suspense fallback="Loading...">{contents}</Suspense>;
};
```

# Custom Hooks

- 특정 hook 을 자주 사용할 경우 기능별 custom hook 을 만들어 처리

# Component

## CommonJS to ES6

### CommonJS

- 모듈 파일에서 각 객체를 내보내기  
  `exports.FuncA = FuncA;`,
- 하나의 모듈을 단일 객체로 내보내기
  `module.exports = { FuncA: FuncA };`
- 모듈 불러오기  
  `const FuncA = require("./Functions");`, `const MyFuncs = require("./Functions");`

### ES6

- 모듈 파일에서 각 객체를 내보내고 불러오기  
  `export const FuncA() => {};`, `export { FuncA };`  
   => `import { FuncA } from "./Functions";`
- 하나의 모듈을 단일 객체로 통합하여 내보내고 불러오기
  `export default Funcs;` =>  
  `import Funcs from "./Functions";`
  `import * as MyFuncs from "./Functions";`

## input value

- input 의 `value` 와 `onChange` 는 함께 쓰인다. onChange 를 쓰지 않으려면 value 대신 `defaultValue` 를 작성한다.

## component reRendering

- 원인: props 변경, state 변경, 부모 컴포넌트 reRendering
- Array.map() 을 사용하여 node 를 생성할 때, index 를 key 값으로 사용할 경우 reRendering 시 성능 최적화에 문제가 된다.

### state 값 변경

- 원본 배열을 변경하는 메서드 대신 spread 연산자를 사용한다.  
   prevArr === newArr 가 false 여야, 즉 참조하는 주소값이 변경되어야만 값이 변경되었음을 감지하고 reRendering 된다.

### rendering 최적화

`shouldComponentUpdate()`, `React.PureComponent`, `React.memo()`
_React.memo 는 Higher-Order Components 이므로 컴포넌트를 인자로 받고 return하며, 클래스형과 함수형 컴포넌트에서 모두 사용할 수 있다._

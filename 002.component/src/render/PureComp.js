import { PureComponent } from "react";

// PureComponent: shouldComponentUpdate 이 구현된 component
// 단, 참조형 데이터일 경우 인식하지 못하는 한계가 있다.
class PureComp extends PureComponent {
  state = {
    counter: 0,
    string: "hello",
    number: 1,
    boolean: true,
    object: { a: "b", c: "d" },
    array: [],
    // 아래와 같은 복잡한 자료구조는 지양할 것
    notRecommend: [{ inside: [5] }],
  };

  onClick1 = () => {
    // not reRendering
    // push 메서드를 사용해 원본 array 를 변경하는 옳지 않은 방법
    const array = this.state.array;
    array.push(1);
    this.setState({ array: array });
  };

  onClick2 = () => {
    // reRendering
    // object 나 array 와 같은 참조형 타입은 값이 달라진 것으로 인식한다.
    this.setState({ array: [] });
  };

  onClick3 = () => {
    // reRendering
    // spread 연산자로 올바르게 변경하는 방법
    this.setState({ array: [...this.state.array, 1] });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <button onClick={this.onClick1}>Push Method</button>
        <button onClick={this.onClick2}>New Array</button>
        <button onClick={this.onClick3}>Spread Syntax</button>
      </div>
    );
  }
}

export default PureComp;

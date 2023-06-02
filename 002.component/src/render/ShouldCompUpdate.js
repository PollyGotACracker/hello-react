import { Component } from "react";

class ShouldCompUpdate extends Component {
  state = { counter: 0 };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  }

  onClick = () => {
    // 변경한 값이 없음에도 reRendering 발생
    // shouldComponentUpdate 를 사용해 reRendering 을 방지
    this.setState({});
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default ShouldCompUpdate;

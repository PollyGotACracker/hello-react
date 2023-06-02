import { Component } from "react";

class Comp extends Component {
  // 화살표 함수를 쓰지 않을 경우 constructor 와 bind 로 this 정의
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    {
      /* 함수 내에서 this.props 나 this.state 를 구조분해 할당 */
    }
    const { value, index } = this.props;
    return (
      <li key={value.item}>
        <b>{value.item}</b> - {value.group}
        <div>contents</div>
        <div>contents</div>
        <div>contents</div>
        <div>contents</div>
      </li>
    );
  }
}

export default Comp;

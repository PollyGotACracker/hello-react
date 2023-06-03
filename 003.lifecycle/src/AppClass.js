import { Component } from "react";

class AppClass extends Component {
  state = {};
  interval;

  // 컴포넌트가 첫 렌더링된 후
  // 주로 비동기 요청
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("Hello!");
    }, 1000);
  }

  // 컴포넌트 reRendering 여부 체크
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  // 리렌더링 후
  // 주로 완료되지 않은 비동기 요청 정리. 메모리 누수 막음
  componentDidUpdate() {
    clearInterval(this.interval);
  }

  // 컴포넌트가 제거되기 직전
  componentWillUnmount() {}

  render() {
    return <div>Hello</div>;
  }
}

export default AppClass;

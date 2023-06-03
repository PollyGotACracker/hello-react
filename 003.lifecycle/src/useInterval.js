import { useRef, useEffect } from "react";

// const [isRunning, setIsRunning] = useState(true);
// useInterval(() => {
//    console.log("Hello");
// }, isRunning ? 1000 : null);

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    /**
     * X
     * setInterval 에 직접 callback 을 전달할 경우:
     * callback 내 변수 값의 변경을 고려하여 deps 에 callback 을 작성한다.
     * callback 이 변경되면 clearInterval 후 새로 setInterval 을 실행하게 된다.
     * clear-set 사이에서 생기는 시간 딜레이는 callback 이 변경될 때마다 누적된다.
     *
     * O
     * tick 함수로 ref 에 담은 callback 을 실행하는 경우:
     * setInterval 에 callback 대신 tick 을 전달하고, deps 에는 callback 을 작성하지 않는다.
     * callback 인수가 바뀌어도 setInterval 을 새로 실행하지 않으면서 최신 callback 을 참조 가능하다.
     */
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      let id = setInterval(tick, delay);
      // delay 가 변경됐을 때(null) return문이 실행되며 interval 중지
      return () => clearInterval(id);
    }
  }, [delay]);

  return savedCallback.current;
};

export default useInterval;

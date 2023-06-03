// import { useEffect, useState, useRef } from "react";
import { useState } from "react";
import useInterval from "./useInterval.js";

const AppFunc = () => {
  // const interval = useRef();
  const [number, setNumber] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const onClickBtn = () => {
    const value = isRunning ? false : true;
    setIsRunning(value);
  };

  const increaseNum = () => {
    // console.log 는 위치와 상관없이 현재의 number 값이 표시
    // setState 는 비동기로 실행됨, batch update
    console.log(number);
    setNumber(number + 1);
  };

  // custom hook
  useInterval(increaseNum, isRunning ? 1000 : null);

  // useEffect(
  //   () => {
  //     // componentDidMount 및 componentDidUpdate 역할
  //     interval.current = setInterval(increaseNum, 1000);
  //     console.log("mount", number);

  //     // componentWillUnmount 역할(+ update 될 때도 실행)
  //     return () => {
  //       console.log("unmount", number);
  //       clearInterval(interval.current);
  //     };
  //   },
  //   // dependencies 배열이 비어있으면 최초 한번만 실행
  //   // dependencies 배열 내 변수의 값이 변할 때마다 update
  //   [number]
  // );

  return <button onClick={onClickBtn}>Click</button>;
};

export default AppFunc;

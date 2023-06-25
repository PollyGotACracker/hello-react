// https://react-redux.js.org/next/api/hooks#recipe-useactions
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

// actions: action 생성 함수로 이루어진 배열
// deps: 요소가 변경되면 action dispatch 함수를 새로 만드는 배열
export default function useActions(actions, deps) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map((a) => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : deps
  );
}

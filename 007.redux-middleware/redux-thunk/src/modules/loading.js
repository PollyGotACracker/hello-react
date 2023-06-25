import { createAction, handleActions } from "redux-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

// createAction(type, payload)
// {type: "loading/START_LOADING", payload: "sample/GET_POST"}
// {type: "loading/FINISH_LOADING", payload: "sample/GET_POST"}

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType
);

export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType
);

// sample/GET_POST, sample/GET_USERS 속성의 bool 값을 갖는다.
const initial = {};

// module reducer 에서 loading 분리
const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initial
);

export default loading;

import { handleActions } from "redux-actions";
import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";

// thunk 함수의 반복되는 로직을 분리하여 createRequestThunk 작성
// createRequestThunk 는 함수를 인자로 받고 반환하는 고차함수이다.
// api.getPost 함수는 createRequestThunk 의 콜백함수이다.
// getPost(id) 로 호출되면 콜백함수 api.getPost 가 id 를 받는다.
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

const initial = {
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initial
);

export default sample;

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
// getPost 는 createRequestThunk 가 return 하는 익명함수를 가진다.
// 따라서 getPost(id) 로 고차함수가 호출되면 return 되는 익명함수가 id 를 받는다.
// 이때 익명함수는 callback 함수에 id 를 전달하도록 작성되었다(request(params);).
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

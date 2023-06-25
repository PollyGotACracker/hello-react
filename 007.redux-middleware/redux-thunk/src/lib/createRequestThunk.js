import { startLoading, finishLoading } from "../modules/loading";

// sample.js
// export const getPost = createRequestThunk(GET_POST, api.getPost);
// export const getUsers = createRequestThunk(GET_USERS, api.getUsers);
export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  // return 되는 함수는 closure 이다.
  return (params) => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      // api.js
      // getPost(1);
      // getUsers();
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      dispatch(startLoading(type));
      // 컴포넌트 단에서 에러 조회
      throw e;
    }
  };
}

// refactoring 전
// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST });
//   try {
//     const response = await api.getPost(id);
//     dispatch({ type: GET_POST_SUCCESS, payload: response.data });
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     });
//     throw e;
//   }
// };
// export const getUsers = () => async (dispatch) => {
//   dispatch({ type: GET_USERS });
//   try {
//     const response = await api.getUsers();
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       payload: e,
//       error: true,
//     });
//     throw e;
//   }
// };

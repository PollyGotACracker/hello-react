import { useEffect } from "react";
import { connect } from "react-redux";
import { getPost, getUsers } from "../modules/sample";
import Sample from "../components/Sample";

const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    const fn = async () => {
      try {
        // get... 변수를 통해 createRequestThunk 호출
        // api.get... 함수에 인수 전달
        await getPost(1);
        await getUsers();
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getPost, getUsers]);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading["sample/GET_POST"],
    loadingUsers: loading["sample/GET_USERS"],
  }),
  { getPost, getUsers }
)(SampleContainer);

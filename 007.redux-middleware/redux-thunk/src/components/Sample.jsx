const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  return (
    <div>
      <section>
        <h1>Posts</h1>
        {loadingPost && "loading..."}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h1>User List</h1>
        {loadingUsers && "loading..."}
        {!loadingUsers && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;

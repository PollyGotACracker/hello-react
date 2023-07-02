import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h1>Home</h1>
      <Link to="/signin">signin</Link>
      <Link to="/user">user</Link>
      <p>
        The "/signin" and "/user" pages are redirected depending on the value of
        the local storage.
      </p>
      <p>
        <a href="https://github.com/pre-onboarding-11th-2/pre-onboarding-11th-1-2">
          Reference: pre-onboarding-11th-1-2
        </a>
      </p>
    </main>
  );
};

export default Home;

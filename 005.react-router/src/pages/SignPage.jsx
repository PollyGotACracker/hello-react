import { useState } from "react";
import { setLocalStorage } from "../utils/storageValue";
import { useRouter } from "../hooks/useRouter";

const SignPage = () => {
  const [username, setUsername] = useState("");
  const { replaceTo } = useRouter();

  return (
    <main>
      <h1>SignIn Page</h1>
      <input
        value={username}
        placeholder="your nickname"
        onChange={({ target }) => setUsername(target.value)}
      />
      <button
        onClick={() => {
          setLocalStorage(username);
          replaceTo(`/user`);
        }}
      >
        SUBMIT
      </button>
    </main>
  );
};

export default SignPage;

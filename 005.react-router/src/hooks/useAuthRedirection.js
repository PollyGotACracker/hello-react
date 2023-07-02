import { useEffect, useState } from "react";
import { useRouter } from "./useRouter";
import { getLocalStorage } from "../utils/storageValue";

const useRedirection = ({ path, redirectIfAuth }) => {
  // useState 에 미리 값을 넣어두어야 화면 flickering 방지 가능
  const [isAuth, setIsAuth] = useState(!!getLocalStorage());
  const { replaceTo } = useRouter();

  useEffect(() => {
    if (getLocalStorage()) {
      setIsAuth(true);
      redirectIfAuth && replaceTo(path);
    } else {
      setIsAuth(false);
      !redirectIfAuth && replaceTo(path);
    }
  }, [redirectIfAuth, replaceTo, path]);

  return isAuth;
};

export default useRedirection;

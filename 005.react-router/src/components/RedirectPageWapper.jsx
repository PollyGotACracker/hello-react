import useAuthRedirection from "../hooks/useAuthRedirection";

const RedirectPageWapper = ({ requireAuth, redirectTo, children }) => {
  const isAuth = useAuthRedirection({
    path: redirectTo,
    redirectIfAuth: !requireAuth,
  });

  // fragment 를 return 하면 화면 flickering 방지 가능
  if (requireAuth) return isAuth ? <>{children}</> : <></>;
  if (!requireAuth) return isAuth ? <></> : <>{children}</>;
};

export default RedirectPageWapper;

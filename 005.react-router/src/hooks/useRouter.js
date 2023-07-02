import { useLocation, useNavigate } from "react-router-dom";

export const useRouter = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return {
    currentPath: pathname,
    routeTo: (path) => navigate(path),
    replaceTo: (path) => navigate(path, { replace: true }),
  };
};

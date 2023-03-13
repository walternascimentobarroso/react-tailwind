import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import useAuth from "./hooks/useAuth";

const Private = ({ Item }: any) => {
  const { signed } = useAuth();
  return signed ? <Item /> : <LoginPage />;
};

const routes: any[] = [
  {
    path: "*",
    element: <LoginPage />,
  },
  {
    path: "/home",
    exact: true,
    element: <Private Item={HomePage} />,
  },
  {
    path: "/login",
    exact: true,
    element: <LoginPage />,
  },
  {
    path: "/register",
    exact: true,
    element: <RegisterPage />,
  },
];

export default routes;

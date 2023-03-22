import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RecoverPasswordPage from "./pages/RecoverPasswordPage";
import HomePage from "./pages/HomePage";
import ComponentPage from "./pages/ComponentPage";
import UserPage from "./pages/UserPage";
import FaqPage from "./pages/FaqPage";
import useAuth from "./hooks/useAuth";
import Error404Page from "./pages/Error404Page";

const Private = ({ Item }: any) => {
  const { signed } = useAuth();
  return signed ? <Item /> : <LoginPage />;
};

const routes: any[] = [
  {
    path: "*",
    element: <Error404Page />,
  },
  {
    path: "/home",
    exact: true,
    element: <Private Item={HomePage} />,
  },
  {
    path: "/user",
    exact: true,
    element: <Private Item={UserPage} />,
  },
  {
    path: "/faq",
    exact: true,
    element: <Private Item={FaqPage} />,
  },
  {
    path: "/components",
    exact: true,
    element: <Private Item={ComponentPage} />,
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
  {
    path: "/recover",
    exact: true,
    element: <RecoverPasswordPage />,
  },
];

export default routes;

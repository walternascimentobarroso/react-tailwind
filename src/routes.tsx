import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const routes: any[] = [
  {
    path: "/login",
    exact: true,
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
];

export default routes;

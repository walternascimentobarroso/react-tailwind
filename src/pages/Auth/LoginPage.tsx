import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ALink from "../../components/ALink";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TemplateAuth from "../../components/TemplateAuth";

import useAuth from "../../hooks/useAuth";
import PasswordInput from "../../components/PasswordInput";

export default () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Fill all fields");
      return;
    }

    const res: any = signIn(email, password);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <TemplateAuth
      image="https://source.unsplash.com/Mv9hjnEUHR4/600x800"
      title="Log In!"
    >
      <form className="px-8 pt-6">
        <Input
          label={"Email"}
          type={"email"}
          value={email}
          placeholder={"Email"}
          onChange={(e: any) => [setEmail(e.target.value), setError("")]}
        />

        <PasswordInput
          label={"Password"}
          type={"password"}
          value={password}
          placeholder={"Password"}
          onChange={(e: any) => [setPassword(e.target.value), setError("")]}
        />

        <div>{error}</div>
        <Button customClass="w-full mb-6" onClick={handleLogin}>
          Login
        </Button>
        <div className="flex justify-between">
          <ALink route="/recover">Forgot Password?</ALink>

          <ALink route="/register">Don't have an account? Sign up</ALink>
        </div>
      </form>
    </TemplateAuth>
  );
};

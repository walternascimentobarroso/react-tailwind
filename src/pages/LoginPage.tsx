import { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

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
    <div>
      <div>SISTEMA DE LOGIN</div>
      <div>
        <Input
          type="email"
          placeholder="Type your E-mail"
          value={email}
          onChange={(e: any) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Type your password"
          value={password}
          onChange={(e: any) => [setPassword(e.target.value), setError("")]}
        />
        <div>{error}</div>
        <Button text="Sign In" onClick={handleLogin} />
        <div>
          Don't have account?
          <strong>
            <Link to="/signUp">Sign Up</Link>
          </strong>
        </div>
      </div>
    </div>
  );
};

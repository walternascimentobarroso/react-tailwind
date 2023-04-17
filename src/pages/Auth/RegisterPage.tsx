import { useState } from "react";
import ALink from "../../components/ALink";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TemplateAuth from "../../components/TemplateAuth";

export default () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TemplateAuth
      image="https://source.unsplash.com/Mv9hjnEUHR4/600x800"
      title="Create an Account!"
    >
      <form className="px-8 pt-6">
        <Input
          label={"Name"}
          value={name}
          placeholder={"Name"}
          onChange={(e: any) => setName(e.target.value)}
        />

        <Input
          label={"Last Name"}
          value={lastName}
          placeholder={"Last Name"}
          onChange={(e: any) => setLastName(e.target.value)}
        />

        <Input
          label={"Email"}
          type={"email"}
          value={email}
          placeholder={"Email"}
          onChange={(e: any) => setEmail(e.target.value)}
        />

        <Input
          label={"Password"}
          type={"password"}
          value={password}
          placeholder={"Password"}
          onChange={(e: any) => setPassword(e.target.value)}
        />

        <Input
          label={"Confirm Password"}
          type={"password"}
          value={password}
          placeholder={"Password"}
          onChange={(e: any) => setPassword(e.target.value)}
        />

        <Button customClass="w-full mb-6">Register Account</Button>

        <div className="flex justify-between">
          <ALink route="/recover">Forgot Password?</ALink>
          <ALink route="/login">Already have an account? Login!</ALink>
        </div>
      </form>
    </TemplateAuth>
  );
};

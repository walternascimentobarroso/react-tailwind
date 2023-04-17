import { useState } from "react";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Template from "../../components/Template";
import Breadcrumb from "../../components/Breadcrumb";
import ProfilePicture from "../../components/ProfilePicture";
import Card from "../../components/Card";

export default () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Template>
      <Breadcrumb
        links={[
          {
            label: "Home",
            href: "/home",
          },
          {
            label: "Profile",
            href: "",
          },
        ]}
      />

      <Title>Profile</Title>

      <Card>
        <form>
          <div className="flex justify-center">
            <ProfilePicture alt="Profile picture" />
          </div>

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

          <Button customClass="w-full" onClick={() => {}}>
            Save
          </Button>
        </form>
      </Card>
    </Template>
  );
};

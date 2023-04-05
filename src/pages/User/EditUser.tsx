import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useModal } from "../../hooks/useModal";
import ProfilePicture from "../../components/ProfilePicture";

export default ({ id }: any) => {
  const { openModal, closeModal, ModalWrapper } = useModal();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <button className="custom--btn-warning mr-4" onClick={() => openModal()}>
        Edit
      </button>
      <ModalWrapper title="Edit User">
        <form className="p-1 bg-white dark:bg-gray-800">
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

          <Input
            label={"Password"}
            type={"password"}
            value={password}
            placeholder={"Password"}
            onChange={(e: any) => setPassword(e.target.value)}
          />

          <Button customClass="w-full" onClick={() => closeModal()}>
            Save
          </Button>

          <Button
            customClass="mt-4 custom--btn-danger w-full"
            onClick={() => closeModal()}
          >
            Close
          </Button>
        </form>
      </ModalWrapper>
    </>
  );
};

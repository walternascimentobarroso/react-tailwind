import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useModal } from "../../hooks/useModal";
import ProfilePicture from "../../components/ProfilePicture";

export default ({ id, editRow, defaultValue }: any) => {
  const { openModal, closeModal, ModalWrapper } = useModal();

  const [formState, setFormState] = useState(
    defaultValue || {
      name: "",
      lastName: "",
      email: "",
      password: "",
    }
  );

  const handleChange = (e: any) =>
    setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = (e: any) => {
    // if (!validateForm()) return;

    console.log(formState);
  };

  return (
    <>
      <button
        className="custom--btn-warning mr-4"
        onClick={() => {
          editRow(id);
          openModal();
        }}
      >
        Edit
      </button>
      <ModalWrapper title="Edit User">
        <form className="p-1 bg-white dark:bg-gray-800">
          <div className="flex justify-center">
            <ProfilePicture alt="Profile picture" />
          </div>

          <Input
            label={"Name"}
            placeholder={"Name"}
            name={"name"}
            value={formState.name}
            onChange={handleChange}
          />

          <Input
            label={"Last Name"}
            placeholder={"Last Name"}
            name={"lastName"}
            value={formState.lastName}
            onChange={handleChange}
          />

          <Input
            label={"Email"}
            type={"email"}
            placeholder={"Email"}
            name={"email"}
            value={formState.email}
            onChange={handleChange}
          />

          <Input
            label={"Password"}
            type={"password"}
            placeholder={"Password"}
            name={"password"}
            value={formState.password}
            onChange={handleChange}
          />

          <Button customClass="w-full" onClick={handleSubmit}>
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

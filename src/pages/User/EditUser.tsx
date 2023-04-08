import { useEffect, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useModal } from "../../hooks/useModal";
import ProfilePicture from "../../components/ProfilePicture";
import Alert from "../../components/Alert";

export default ({ id, editRow, defaultValue }: any) => {
  const { openModal, closeModal, ModalWrapper } = useModal();

  const [formState, setFormState] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState("");

  useEffect(() => setFormState(defaultValue), [defaultValue]);

  const handleChange = (e: any) => {
    if (!formState) return;
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    setErrors("");
    let errorFields: any = [];
    for (const [key, value] of Object.entries(formState)) {
      if (!value) {
        errorFields.push(key);
      }
    }
    if (errorFields.length) {
      setErrors(errorFields.join(", "));
      return false;
    }
    return true;
  };

  const handleSubmit = (e: any) => {
    if (!validateForm()) return;

    console.log("defaultValue", defaultValue);
    console.log("form", formState);
  };

  return (
    <>
      <Button
        customClass="custom--btn-warning mr-4"
        onClick={() => {
          editRow(id);
          openModal();
        }}
      >
        Edit
      </Button>
      <ModalWrapper title="Edit User">
        {errors && (
          <Alert
            type={"Error"}
            message={`Please include: ${errors}`}
            onClick={() => setErrors("")}
          />
        )}
        <form className="p-1 bg-white dark:bg-gray-800">
          <div className="flex justify-center">
            <ProfilePicture alt="Profile picture" />
          </div>

          <Input
            label={"Name"}
            placeholder={"Name"}
            name={"name"}
            value={formState.name || ""}
            onChange={handleChange}
          />

          <Input
            label={"Last Name"}
            placeholder={"Last Name"}
            name={"lastName"}
            value={formState.lastName || ""}
            onChange={handleChange}
          />

          <Input
            label={"Email"}
            type={"email"}
            placeholder={"Email"}
            name={"email"}
            value={formState.email || ""}
            onChange={handleChange}
          />

          <Input
            label={"Password"}
            type={"password"}
            placeholder={"Password"}
            name={"password"}
            value={formState.password || ""}
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

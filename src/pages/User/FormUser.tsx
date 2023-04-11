import { useEffect, useState } from "react";
import Alert from "../../components/Alert";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ProfilePicture from "../../components/ProfilePicture";
import CustomSelect from "../../components/CustomSelect";

export default ({ onActionSubmit, defaultValue, closeModal }: any) => {
  const [formState, setFormState] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    status: "",
  });

  useEffect(
    () =>
      setFormState(
        defaultValue || {
          name: "",
          lastName: "",
          email: "",
          password: "",
          role: "",
          status: "",
        }
      ),
    [defaultValue]
  );

  const options = [
    { value: "option1", label: "Opção 1" },
    { value: "option2", label: "Opção 2" },
    { value: "option3", label: "Opção 3" },
  ];

  const handleSelect = (value: string) => {
    console.log("Opção selecionada:", value);
    // Faça algo com o valor selecionado, como atualizar o estado do componente pai
  };

  const [errors, setErrors] = useState("");

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

  const handleChange = (e: any) =>
    setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = (e: any) => {
    if (!validateForm()) return;
    onActionSubmit(formState);
    closeModal();
  };

  return (
    <>
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
          value={formState?.name || ""}
          onChange={handleChange}
        />

        <Input
          label={"Last Name"}
          placeholder={"Last Name"}
          name={"lastName"}
          value={formState?.lastName || ""}
          onChange={handleChange}
        />

        <Input
          label={"Email"}
          type={"email"}
          placeholder={"Email"}
          name={"email"}
          value={formState?.email || ""}
          onChange={handleChange}
        />

        <Input
          label={"Password"}
          type={"password"}
          placeholder={"Password"}
          name={"password"}
          value={formState?.password || ""}
          onChange={handleChange}
        />

        <Input
          label={"Role"}
          placeholder={"Role"}
          name={"role"}
          value={formState?.role || ""}
          onChange={handleChange}
        />

        <CustomSelect
          label={"Category"}
          name={"category"}
          options={options}
          onSelect={handleSelect}
        />

        <Input
          label={"Status"}
          placeholder={"status"}
          name={"status"}
          value={formState?.status || ""}
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
    </>
  );
};

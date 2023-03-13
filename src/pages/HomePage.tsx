import Template from "../components/Template";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

import useAuth from "../hooks/useAuth";
import Breadcrumb from "../components/Breadcrumb";

export default () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <Template>
      <Breadcrumb
        links={[
          {
            label: "Home",
            href: "",
          },
          {
            label: "Templates",
            href: "",
          },
          {
            label: "Theme",
            href: "",
          },
        ]}
      />
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Blank page</h3>
            <span className="text-base font-normal text-gray-500">
              This is a blank page
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">blank page</h3>
          <Button text="Exit" onClick={() => [signOut(), navigate("/")]} />
        </div>
      </div>
    </Template>
  );
};
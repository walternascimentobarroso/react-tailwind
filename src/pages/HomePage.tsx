import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import useAuth from "../hooks/useAuth";

export default () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat">
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 text-2xl">Home</h1>
            <span className="text-gray-300">Home</span>
            <Button text="Exit" onClick={() => [signOut(), navigate("/")]} />
          </div>
        </div>
      </div>
    </div>
  );
};

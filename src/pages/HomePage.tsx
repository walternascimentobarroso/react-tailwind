import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import AsideMenu from "../components/AsideMenu";
import Footer from "../components/Footer";

export default () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="flex overflow-hidden bg-white pt-16">
        <AsideMenu />
        <div
          className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          className="w-full bg-gray-50 relative overflow-y-auto lg:ml-64
          flex flex-col h-[calc(100vh-74px)]"
        >
          <main className="flex-grow">
            <div className="pt-6 px-4">
              <Button text="Exit" onClick={() => [signOut(), navigate("/")]} />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

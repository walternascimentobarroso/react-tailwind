import Header from "../Header";
import AsideMenu from "../AsideMenu";
import Footer from "../Footer";

const Template = ({ children }: any) => {
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
              <div className="w-full grid grid-cols-1">{children}</div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Template;

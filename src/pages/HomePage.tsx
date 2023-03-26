import Template from "../components/Template";
import Breadcrumb from "../components/Breadcrumb";

export default () => {
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
      <div className="bg-white text-gray-700 dark:bg-gray-800 dark:border-gray-700 shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-gray-900 dark:text-gray-200 text-xl font-bold mb-2">
              Blank page
            </h3>
            <span className="text-base font-normal text-gray-500">
              This is a blank page
            </span>
          </div>
        </div>
      </div>
    </Template>
  );
};

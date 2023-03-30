import { useModal } from "../../hooks/useModal";

export default () => {
  const { openModal, closeModal, ModalWrapper } = useModal();

  return (
    <>
      <button className="custom--btn-primary" onClick={() => openModal()}>
        New
      </button>
      <ModalWrapper title="New User">
        <form>
          <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="md:ml-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-xs italic text-red-500">
                Please choose a password.
              </p>
            </div>
            <div className="md:ml-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="c_password"
              >
                Confirm Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="c_password"
                type="password"
                placeholder="******************"
              />
            </div>
          </div>
          <div className="mb-6 text-center">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => closeModal()}
            >
              Save
            </button>
          </div>
        </form>
      </ModalWrapper>
    </>
  );
};

import TableUser from "./TableUser";
import NewUserForm from "./NewUserForm";
import Template from "../../components/Template";
import Breadcrumb from "../../components/Breadcrumb";
import Title from "../../components/Title";
import { useState } from "react";

export default () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Apple MacBook Pro 16'",
      photo:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      email: "est.asd@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Apple MacBook Pro 17'",
      photo:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      email: "est.asd@gmail.com",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Apple MacBook Pro 18'",
      photo:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      email: "est.asd@gmail.com",
      role: "Guest",
      status: "Active",
    },
  ]);

  const [rowToEdit, setRowToEdit] = useState({});

  const handleEditRow = (idx: any) => {
    let row: any = data.find((row: any) => row.id === idx);
    setRowToEdit(row);
  };

  const handleDeleteRow = (targetIndex: any) =>
    setData(data.filter((row: any) => row.id !== targetIndex));

  const handleSubmit = (newRow: any) => {
    "name" in rowToEdit
      ? setData(
          data.map((row) => {
            if (row.id !== newRow.id) return row;

            return newRow;
          })
        )
      : setData([...data, newRow]);
  };

  return (
    <Template>
      <Breadcrumb
        links={[
          {
            label: "Home",
            href: "/home",
          },
          {
            label: "User",
            href: "",
          },
        ]}
      />

      <Title>Users</Title>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <div className="flex justify-between bg-white p-4 border-b dark:bg-gray-800 dark:border-gray-700 rounded-t-lg">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>

            <NewUserForm
              onActionSubmit={handleSubmit}
              cleanEditData={() => setRowToEdit({})}
            />
          </div>
          <TableUser
            data={data}
            deleteRow={handleDeleteRow}
            onActionSubmit={handleSubmit}
            editRow={handleEditRow}
            defaultRowValue={rowToEdit}
          />
        </div>
      </div>
    </Template>
  );
};

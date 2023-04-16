import { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Template from "../../components/Template";
import Breadcrumb from "../../components/Breadcrumb";

import { useModal } from "../../hooks/useModal";
import SearchButton from "../../components/SearchButton";
import Toast from "../../components/Toast";

export default () => {
  const { openModal, closeModal, ModalWrapper } = useModal();
  const [list, setList]: any = useState([]);
  const showToast = (type: string, title: string, description: string) => {
    const toastProperties = {
      id: list.length + 1,
      title,
      description,
      type,
    };
    setList([...list, toastProperties]);
  };
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

  const handleDeleteRow = (targetIndex: any) => {
    setData(data.filter((row: any) => row.id !== targetIndex));
    showToast("success", "Removed", "Removed with success");
  };

  const handleSubmit = (newRow: any) => {
    !Object.keys(rowToEdit).length
      ? setData([...data, newRow])
      : setData(
          data.map((row) => {
            if (row.id !== newRow.id) return row;

            return newRow;
          })
        );
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
      <Toast toasties={list} position="top-right" setList={setList} />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <div className="flex justify-between bg-white p-4 border-b dark:bg-gray-800 dark:border-gray-700 rounded-t-lg">
            <SearchButton placeholder="Search for items" />

            <Button
              onClick={() => {
                setRowToEdit({});
                openModal();
              }}
            >
              New
            </Button>
          </div>
          <Table
            data={data}
            deleteRow={handleDeleteRow}
            editRow={handleEditRow}
            openFormModal={openModal}
          />
        </div>
      </div>

      <>
        <ModalWrapper title="User">
          <Form
            onActionSubmit={handleSubmit}
            defaultValue={rowToEdit}
            closeModal={closeModal}
          />
        </ModalWrapper>
      </>
    </Template>
  );
};

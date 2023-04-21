import { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import Card from "../../components/Card";
import Title from "../../components/Title";
import Toast from "../../components/Toast";
import Button from "../../components/Button";
import Template from "../../components/Template";
import Breadcrumb from "../../components/Breadcrumb";
import SearchButton from "../../components/SearchButton";

import { useModal } from "../../hooks/useModal";
import Spinner from "../../components/Spinner";

export default () => {
  const { openModal, closeModal, ModalWrapper } = useModal();
  const [list, setList]: any = useState([]);
  const [loading, setLoading]: any = useState(false);
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
    setLoading(true);
    setTimeout(() => {
      setData(data.filter((row: any) => row.id !== targetIndex));
      showToast("success", "Removed", "Removed with success");
      setLoading(false);
    }, 1000);
  };

  const handleSubmit = (newRow: any) => {
    setLoading(true);
    setTimeout(() => {
      !Object.keys(rowToEdit).length
        ? newRegister(newRow)
        : editRegister(newRow);
      setLoading(false);
    }, 1000);
  };

  const editRegister = (newRow: any) => {
    setData(
      data.map((row) => {
        if (row.id !== newRow.id) return row;

        return newRow;
      })
    );
    showToast("success", "Edited", "Edit with success");
  };

  const newRegister = (newRow: any) => {
    setData([...data, newRow]);
    showToast("success", "Registered", "Register with success");
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
      {loading && <Spinner />}
      <Toast toasties={list} position="top-right" setList={setList} />

      <Card className="p-0">
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
      </Card>

      <ModalWrapper title="User">
        <Form
          onActionSubmit={handleSubmit}
          defaultValue={rowToEdit}
          closeModal={closeModal}
        />
      </ModalWrapper>
    </Template>
  );
};

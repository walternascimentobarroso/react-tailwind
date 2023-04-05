import DeleteUser from "./DeleteUser";

export default () => {
  const tHeads = [
    {
      description: "User",
    },
    {
      description: "Role",
    },
    {
      description: "Status",
    },
    {
      description: "Actions",
    },
  ];

  const data = [
    {
      id: 1,
      name: "Apple MacBook Pro 17'",
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
      name: "Apple MacBook Pro 17'",
      photo:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      email: "est.asd@gmail.com",
      role: "Guest",
      status: "Active",
    },
  ];
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        List of Users
      </caption>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-600 dark:text-gray-400">
        <tr>
          {tHeads.map((head: any, index: any) => (
            <th scope="col" className="px-6 py-3" key={index}>
              {head.description}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((record: any, index: any) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            key={index}
          >
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <div className="flex items-center gap-x-2">
                <img
                  className="object-cover w-8 h-8 rounded-full"
                  src={record.photo}
                  alt="Profile"
                />
                <div>
                  <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                    {record.name}
                  </h2>
                  <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                    {record.email}
                  </p>
                </div>
              </div>
            </th>
            <td className="px-6 py-4">{record.role} </td>
            <td className="px-6 py-4">{record.status}</td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="p-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>

              <DeleteUser id={record.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

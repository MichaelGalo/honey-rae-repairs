export const getAllEmployees = async () => {
  return fetch("http://localhost:8088/employees?_expand=user").then((res) =>
    res.json()
  );
};

export const getStaffUsers = async () => {
  const response = await fetch("http://localhost:8088/users/?isStaff=true");
  const data = await response.json();
  return data;
};

export const getEmployeeByUserId = async (userId) => {
  return fetch(
    `http://localhost:8088/employees?userId=${userId}&_expand=user`
  ).then((res) => res.json());
};

export const updateEmployee = async (employee) => {
  return fetch(`http://localhost:8088/employees/${employee.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  }).then((res) => res.json());
};

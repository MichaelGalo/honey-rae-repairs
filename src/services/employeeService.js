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

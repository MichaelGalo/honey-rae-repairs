export const getNonStaffUsers = async () => {
  const response = await fetch("http://localhost:8088/users/?isStaff=false");
  const data = await response.json();
  return data;
};

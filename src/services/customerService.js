export const getCustomerByUserId = async (userId) => {
  const response = await fetch(
    `http://localhost:8088/customers?userId=${userId}&_expand=user`
  );
  const data = await response.json();
  return data;
};

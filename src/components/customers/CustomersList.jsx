import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../services/userService";
import { Users } from "../users/Users";
import "./Customers.css";

export const CustomersList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customersArray) => {
      setCustomers(customersArray);
    });
  }, []);

  return (
    <div className="customers">
      {customers.map((customerObj) => {
        return <Users key={customerObj.id} user={customerObj} />;
      })}
    </div>
  );
};

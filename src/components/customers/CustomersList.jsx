import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../services/userService";
import { Users } from "../users/Users";
import "./Customers.css";
import { Link } from "react-router-dom";

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
        return (
          <Link to={`/customers/${customerObj.id}`}>
            <Users key={customerObj.id} user={customerObj} />
          </Link>
        );
      })}
    </div>
  );
};

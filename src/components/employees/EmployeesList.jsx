import { useEffect, useState } from "react";
import "./Employees.css";
import { getStaffUsers } from "../../services/employeeService";
import { Employees } from "./Employees";

export const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeesArray) => {
      setEmployees(employeesArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((customerObj) => {
        return <Employees key={customerObj.id} user={customerObj} />;
      })}
    </div>
  );
};

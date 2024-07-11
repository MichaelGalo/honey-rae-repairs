import { useEffect, useState } from "react";
import "./Employees.css";
import { getStaffUsers } from "../../services/employeeService";
import { Employees } from "./Employees";
import { Link } from "react-router-dom";

export const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeesArray) => {
      setEmployees(employeesArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => {
        // Wrap Employees component with Link
        return (
          <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
            <Employees user={employeeObj} />
          </Link>
        );
      })}
    </div>
  );
};

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getAllEmployees,
  getEmployeeByUserId,
  getStaffUsers,
} from "../../services/employeeService";
import "./Employees.css";

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});

  const { employeeId } = useParams(); // {employeeId: 1}

  useEffect(() => {
    getEmployeeByUserId(employeeId).then((employeeDetails) => {
      const employee = employeeDetails[0];
      setEmployee(employee);
    });
  }, [employeeId]);

  return (
    <section className="employee">
      <header className="employee-header">
        <div>
          <span className="employee-info">Rate : </span>${employee.rate}
        </div>
        <div>
          <span className="employee-info">Email : </span>
          {employee.user?.email}
        </div>
        <div>
          <span className="employee-info">Specialty : </span>
          {employee.specialty}
        </div>
      </header>
    </section>
  );
};

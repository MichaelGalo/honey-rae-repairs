import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeService";
import { Button } from "react-bootstrap";
import {
  assignTicket,
  deleteTicket,
  updateTicket,
} from "../../services/ticketService";

export const Ticket = ({ ticket, currentUser, getAndSetTickets }) => {
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});

  useEffect(() => {
    getAllEmployees().then((employeesArray) => {
      setEmployees(employeesArray);
    });
  }, []);

  useEffect(() => {
    const foundEmployee = employees.find(
      (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
    );
    setAssignedEmployee(foundEmployee);
  }, [employees, ticket]);

  const handleClaim = () => {
    const currentEmployee = employees.find(
      (employee) => employee.userId === currentUser.id
    );

    const newEmployeeTicket = {
      serviceTicketId: ticket.id,
      employeeId: currentEmployee.id,
    };

    assignTicket(newEmployeeTicket).then(() => {
      getAndSetTickets();
    });
  };

  const handleClose = () => {
    // we want to add a dateCompleted to the ticket
    const closedTicket = {
      ...ticket,
      dateCompleted: new Date(),
    };

    updateTicket(closedTicket).then(() => {
      getAndSetTickets();
    });
  };

  const handleDelete = () => {
    deleteTicket(ticket.id).then(() => {
      getAndSetTickets();
    });
  };

  return (
    <section className="ticket">
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">Emergency?</div>
          <div>{ticket.emergency ? "Yes" : "No"}</div>
        </div>
        <div>
          <div className="ticket-info">Assignee:</div>
          <div>
            {assignedEmployee ? assignedEmployee.user?.fullName : "None"}
          </div>
        </div>
        <div className="btn-container">
          {/* if the logged in user is an employee and there's no employee ticket associated with the service ticket, then a button to claim the ticket should display*/}
          {currentUser.isStaff && !assignedEmployee ? (
            <Button className="btn btn-secondary" onClick={handleClaim}>
              Claim
            </Button>
          ) : (
            ""
          )}
          {/* If the logged in user is the assigned employee for the ticket and there is no dateCompleted, then a button to close the ticket should display */}
          {assignedEmployee?.userId === currentUser.id &&
          !ticket.dateCompleted ? (
            <Button className="btn btn-warning" onClick={handleClose}>
              Close
            </Button>
          ) : (
            ""
          )}
          {!currentUser.isStaff ? (
            <Button className="btn btn-warning" onClick={handleDelete}>
              Delete
            </Button>
          ) : (
            ""
          )}
        </div>
      </footer>
    </section>
  );
};

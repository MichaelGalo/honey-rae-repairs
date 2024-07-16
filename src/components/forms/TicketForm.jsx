import { useEffect, useState } from "react";
import "./Form.css";
import { createCustomerTicket } from "../../services/ticketService";
import { useNavigate } from "react-router-dom";

export const TicketForm = ({ currentUser }) => {
  const [ticket, setTicket] = useState({
    description: "",
    emergency: false,
  });

  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();

    if (ticket.description) {
      const newTicket = {
        userId: currentUser.id,
        description: ticket.description,
        emergency: ticket.emergency,
        dateCompleted: "",
      };

      createCustomerTicket(newTicket).then(() => {
        setTicket({
          description: "",
          emergency: false,
        });
      });

      navigate("/tickets");
    } else {
      alert("Please enter a description");
    }
  };

  return (
    <form>
      <h2>New Service Ticket</h2>
      <fieldset>
        <div className="form-group"></div>
        <label>Description</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter brief description of the problem"
          onChange={(event) => {
            const ticketCopy = { ...ticket };
            ticketCopy.description = event.target.value;
            setTicket(ticketCopy);
          }}
        />
        <label className="form-group">Emergency</label>
        <input
          type="checkbox"
          onChange={(event) => {
            const ticketCopy = { ...ticket };
            ticketCopy.emergency = event.target.checked;
            setTicket(ticketCopy);
          }}
        />
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button
            type="submit"
            className="form-btn btn-info"
            onClick={handleSave}
          >
            Submit Ticket
          </button>
        </div>
      </fieldset>
    </form>
  );
};

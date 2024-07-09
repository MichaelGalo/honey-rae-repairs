import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService.js";
import "./Tickets.css";
import { Ticket } from "./Ticket.jsx";

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
      console.log("tickets set");
    });
  }, []); // ONLY runs on initial render of component

  useEffect(() => {
    // filter tickets
    const foundTickets = allTickets.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTickets(foundTickets);
  }, [searchTerm, allTickets]);

  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
      );
      setFilteredTickets(emergencyTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [showEmergencyOnly, allTickets]);

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <div className="filter-bar">
        <button
          className="filter-btn btn-primary"
          onClick={() => {
            setShowEmergencyOnly(true);
          }}
        >
          Emergency
        </button>

        <button
          className="filter-btn btn-info"
          onClick={() => {
            setShowEmergencyOnly(false);
          }}
        >
          Show All
        </button>
        <input
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          type="text"
          placeholder="search tickets"
          className="ticket-search"
        />
      </div>

      <article className="tickets">
        {filteredTickets.map((ticketObject) => {
          return <Ticket ticket={ticketObject} key={ticketObject.id} />;
        })}
      </article>
    </div>
  );
};

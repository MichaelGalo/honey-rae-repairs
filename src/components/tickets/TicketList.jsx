import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService.js";
import "./Tickets.css";
import { Ticket } from "./Ticket.jsx";
import { FilterBar } from "./FilterBar.jsx";

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
      <FilterBar
        setShowEmergencyOnly={setShowEmergencyOnly}
        setSearchTerm={setSearchTerm}
      />
      <article className="tickets">
        {filteredTickets.map((ticketObject) => {
          return <Ticket ticket={ticketObject} key={ticketObject.id} />;
        })}
      </article>
    </div>
  );
};

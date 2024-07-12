export const getAllTickets = async () => {
  return fetch(
    "http://localhost:8088/serviceTickets?_embed=employeeTickets"
  ).then((res) => res.json());
};

// POST request to create a new employee ticket

export const assignTicket = async (employeeTicket) => {
  await fetch("http://localhost:8088/employeeTickets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employeeTicket),
  }).then((response) => response.json());
};

// PUT request to update a ticket to closed

export const updateTicket = async (ticket) => {
  return await fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  });
};

import { useEffect, useState } from "react";

export const FilterBar = ({
  setShowEmergencyOnly,
  setSearchTerm,
  currentUser,
  setShowOpenOnly,
}) => {
  return (
    <div className="filter-bar">
      {currentUser.isStaff ? (
        <>
          <button
            className="filter-btn btn-primary"
            onClick={() => setShowEmergencyOnly(true)}
          >
            Emergency
          </button>

          <button
            className="filter-btn btn-info"
            onClick={() => setShowEmergencyOnly(false)}
          >
            Show All
          </button>
          <input
            onChange={(event) => setSearchTerm(event.target.value)}
            type="text"
            placeholder="search tickets"
            className="ticket-search"
          />
        </>
      ) : (
        <>
          <button className="filter-btn btn-primary">Create Ticket</button>
          <button
            className="filter-btn btn-info"
            onClick={() => {
              setShowOpenOnly(true);
            }}
          >
            Open Tickets
          </button>
          <button
            className="filter-btn btn-secondary"
            onClick={() => {
              setShowOpenOnly(false);
            }}
          >
            All My Tickets
          </button>
        </>
      )}
    </div>
  );
};

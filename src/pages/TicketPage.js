import React from "react";
import { useParams } from "react-router-dom";

const TicketPage = () => {
  const { id } = useParams();

  return (
    <div className="ticket-detail">
      <h2>Ticket #{id}</h2>
      <p>
        This is a placeholder for the full ticket details. You can include
        the issue reported, date opened, and any responses here.
      </p>
    </div>
  );
};

export default TicketPage;

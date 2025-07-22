import React from "react";

const Dashboard = () => {
  const tickets = [
    {
      id: 1,
      title: "Unable to access account",
      description: "I keep getting a 403 error when I try to log in.",
    },
    {
      id: 2,
      title: "Payment not reflecting",
      description: "I made a transfer yesterday but my balance hasn't changed.",
    },
  ];

  return (
    <div className="dashboard">
      <h2>Welcome to Your Dashboard</h2>
      <div className="ticket-list">
        {tickets.map((ticket) => (
          <div className="ticket-card" key={ticket.id}>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <small>Ticket ID: {ticket.id}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

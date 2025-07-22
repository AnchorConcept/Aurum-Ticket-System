import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "tickets"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setTickets(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsub();
  }, []);

  return (
    <div>
      <h3>Support Tickets</h3>
      {tickets.map((ticket) => (
        <div key={ticket.id}>
          <Link to={`/tickets/${ticket.id}`}>
            <h4>{ticket.subject}</h4>
            <p>Status: {ticket.status}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
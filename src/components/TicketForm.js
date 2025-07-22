import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";

const TicketForm = () => {
  const { currentUser } = useAuth();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    try {
      await addDoc(collection(db, "tickets"), {
        subject,
        message,
        userId: currentUser.uid,
        email: currentUser.email,
        status: "open",
        createdAt: serverTimestamp(),
      });

      setSubject("");
      setMessage("");
      alert("Ticket submitted!");
    } catch (error) {
      alert("Error creating ticket: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Support Ticket</h3>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit">Submit Ticket</button>
    </form>
  );
};

export default TicketForm;
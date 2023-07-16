import React, { useEffect, useState } from "react";

export default function Question() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  const [question, setQuestion] = useState("");
  const [match, setMatch] = useState("Emails do not match");

  useEffect(() => {
    const compareEmails = async () => {
      if (email === confirm) setMatch("Emails match");
      else setMatch("Emails do not match");
    };
    compareEmails();
  });

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
        }}
      >
        <input
          placeholder="Enter First Name"
          value={firstName}
          required={true}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          placeholder="Enter Last Name"
          value={lastName}
          required={true}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          placeholder="Enter Email"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Confirm Email"
          value={confirm}
          required={true}
          onChange={(e) => setConfirm(e.target.value)}
        />
        {match}
        <input
          placeholder="What is your question?"
          value={question}
          required={true}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

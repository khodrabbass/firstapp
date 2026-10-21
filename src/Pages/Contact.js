
import { useState } from 'react';

export default function Contact() {

  // Store form values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  // Store all feedback entries
  const [feedbackList, setFeedbackList] = useState([]);

  function addFeedback(event) {
    event.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      feedback.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a feedback object
    const elt = {
      id: Date.now(),
      name: name,
      email: email,
      feedback: feedback
    };

    // Add the new feedback to the array
    setFeedbackList([...feedbackList, elt]);

    // Clear the form
    setName("");
    setEmail("");
    setFeedback("");
  }

  return (
    <>
      <section className="page-title">
        <h1>Contact Us</h1>
        <p>We value your feedback. Tell us what you think!</p>
      </section>

      <main className="contact-container">

        <section className="contact-form">
          <h2>Send Your Feedback</h2>

          <form onSubmit={addFeedback}>

            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              placeholder="Write your feedback here..."
              rows="5"
              value={feedback}
              onChange={(event) => setFeedback(event.target.value)}
              required
            />

            <button type="submit" className="submit-btn">
              Submit Feedback
            </button>

          </form>
        </section>

        <section className="feedback-section">
          <h2>Customer Feedback</h2>

          <ul>
            {feedbackList.length === 0 ? (
              <li>No feedback yet. Be the first to share!</li>
            ) : (
              feedbackList.map((elt) => (
                <li key={elt.id}>
                  <h3>{elt.name}</h3>
                  <p>{elt.email}</p>
                  <p>{elt.feedback}</p>
                </li>
              ))
            )}
          </ul>

        </section>

      </main>
    </>
  );
}

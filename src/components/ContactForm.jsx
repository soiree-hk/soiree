import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <div className="form-success">Thanks for contacting us!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
      </div>
      <button type="submit" className="btn">Submit</button>
    </form>
  );
}

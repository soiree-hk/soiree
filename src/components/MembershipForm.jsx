import { useState } from 'react';

export default function MembershipForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <div className="form-success">Thanks for submitting!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input id="fullName" name="fullName" type="text" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="institution">Institution / Organization</label>
        <input id="institution" name="institution" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="research">Research Interests</label>
        <textarea id="research" name="research" />
      </div>
      <button type="submit" className="btn">Submit</button>
    </form>
  );
}

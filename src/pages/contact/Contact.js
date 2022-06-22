import React, { useState } from 'react'
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({name: "", email: "", message: "",});

  
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  function anyChange(change) {
		if (change.target.name === "email") {
			const isValid = validateEmail(change.target.value);
      console.log(isValid);

			if (!isValid) {
				setErrorMessage("Your email is Wrong.");
			} else {
				if (!change.target.value.length) {
					setErrorMessage(`${change.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [change.target.name]: change.target.value });
		}
	}


  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }




  return (
    <section>
      <h1>Contact me</h1>
    <form id="contact-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email address:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" rows="5" />
      </div>
    
      {errorMessage && (
  <div>
    <p className="error-text">{errorMessage}</p>
  </div>
)}

      <button type="submit">Submit</button>
    </form>
    </section>
  );
}

export default Contact
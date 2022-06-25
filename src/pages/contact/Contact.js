import React, { useState } from 'react'
import './contact.css'

import { validateEmail } from "../../assets/utils/helpers";

function Contact() {
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({name: '', email: '', message: ''});

  
  
  const { name, email, message } = formState;

  function anyChange(change) {
    setFormState({...formState, name: change.target.value })

		if (change.target.name === "email") {
			const isValid = validateEmail(change.target.value);
      console.log(isValid);

			if (!isValid) {
				setErrorMessage("Your email is Wrong.");
      // } else {
      //   setErrorMessage('');
      // }

			} else {
				if (!change.target.value.length) {
					setErrorMessage(`${change.target.name} is required.`);
				} else {
					setErrorMessage('');
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [change.target.name]: change.target.value });
		}
	}

  console.log(formState);


  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }




  return (
    <section className="contact-display">
      <h1>Contact me</h1>
    <form id="contact-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" defaultValue={name} onChange={anyChange} name="name" />
      </div>
      <div>
        <label htmlFor="email">Email address:</label>
        <input type="email" name="email" onChange={anyChange} />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message"  defaultValue={message} onChange={anyChange} rows="5" />
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
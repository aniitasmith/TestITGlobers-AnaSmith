import React from 'react';
import "../NewsletterForm/NewsletterForm.css";
import { useForm, ValidationError } from '@formspree/react';
import { AiOutlineArrowRight } from 'react-icons/ai';


function ContactForm() {
  const [state, handleSubmit] = useForm("mqkjlvjr");
  if (state.succeeded) {
      return <p className='subtitle-newsletter'> Gracias por suscribirte!! </p>;
  }
  return (
      <form className="subscription-form" onSubmit={handleSubmit}>
        <input 
          className="form-email"
          id="email" 
          type='email'
          name="email"
          placeholder='Ingresa tu email'/>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <button className="input-icon" type="submit" disabled={state.submitting}>
            <AiOutlineArrowRight ></AiOutlineArrowRight> 
          </button>
    </form>
  );
}

export default ContactForm;
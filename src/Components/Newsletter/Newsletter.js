import React from 'react';
import NewsletterForm from  "../NewsletterForm/NewsletterForm"
import './Newsletter.css';


function Newsletter () {
  return (
    <div className='container-newsletter'>
      <div className='newsletter-text'>
        <p className="subtitle-newsletter"> Newsletter </p>
        <p className="title-newsletter"> SUSCRIBETE </p>
        <p> y enterare de todas las novedades </p>
      </div>
      <div className='newsletter-email'>
        <NewsletterForm></NewsletterForm>
      </div>
    </div>
  );
}

export default Newsletter;
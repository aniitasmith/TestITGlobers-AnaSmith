import './Newsletter.css';
import NewsletterForm from  "../NewsletterForm/NewsletterForm"


const Newsletter = () => {
  return (
    <div className='newsletter-container'>
      <div className='text'>
        <p className="subtitle"> Newsletter </p>
        <p className="title"> SUSCRIBETE </p>
        <p> y enterare de todas las novedades </p>
      </div>
      <NewsletterForm></NewsletterForm>
    </div>
  );
}

export default Newsletter;
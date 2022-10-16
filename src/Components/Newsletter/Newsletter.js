import './Newsletter.css';
import NewsletterForm from  "../NewsletterForm/NewsletterForm";

const Newsletter = () => {
  return (
    <section className='newsletter-container'>
      <section className='text'>
        <p className="subtitle">Newsletter</p>
        <h1 className="title">SUSCRIBETE</h1>
        <p>y enterare de todas las novedades</p>
      </section>
      <NewsletterForm></NewsletterForm>
    </section>
  );
}

export default Newsletter;

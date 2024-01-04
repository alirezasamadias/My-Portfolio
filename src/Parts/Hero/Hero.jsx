// Css
import './Hero.css';

function Hero(props) {
  const {title,children} = props;

  return (
    <div className='hero'>
      <section className='container'>
        <h1 className='title-lg'>{title}</h1>
        {children}
      </section>
    </div>
  );
}

export default Hero;
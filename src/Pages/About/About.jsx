// Images
import Profile from '../../assets/Images/Profile.jpg';
// Components
import Loader from '../../Components/Loader/Loader';
import Hero from '../../Parts/Hero/Hero';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle';
import useCurrentPage from '../../Hooks/useCurrentPage';
// Css
import './about.css';

function About() {
    // title
    useTabTitle('About');
    // current page
    useCurrentPage();

    return (
    <>
        <Loader/>
        <main className='main about'>
            <Hero title='about me'/>

            <article>
                <figure className="container">
                    <img src={Profile} alt={Profile} className='profile'/>
                    <figcaption className='caption'>
                        <h2 className='title-md'>Hello, I am Alireza, I am 22 years old and it has been a year since I got acquainted with the world of programming.</h2>
                        <p>I started training from the Laitec training group affiliated with Sharif University of Technology and after that I tried to learn more with online courses.<br/>I am well-versed in Html5 and Css3, and I also know JavaScript at an intermediate level, I am familiar with Sass, Bootstrap and Jquery. I worked with git and github and the portfolio is fully responsive, there is also a small project related to rest api skills in the portfolio.<br/>I recently learned the React and Vue course and put some work samples in my resume.</p>
                    </figcaption>
                </figure>
            </article>
        </main>
    </>
    );
}

export default About;
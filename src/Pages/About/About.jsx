// Images
import Profile from '../../assets/Images/Profile.jpg';
// Documents
import cv from '../../Assets/Documents/Alireza-Samadi.pdf';
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
                <figure className='container'>
                    <img src={Profile} alt={Profile} className='profile'/>
                    <figcaption className='caption'>
                        <h2 className='title-md'>Hello, I am Alireza, 22 years old, and it has been more than a year since I got to know the world of programming.</h2>
                        <p>I am well versed in Html5 and Css3 and I also know JavaScript at an intermediate level. I am familiar with Sass, Bootstrap and jQuery. I worked with Git and GitHub and the portfolio is fully responsive. There is also a project related to Rest API inside the samples.<br/>Excellent problem-solving ability and keen eye for detail. Interested in staying up to date with the latest web technologies and innovation and efficiency. Looking to contribute my technical and creative skills to a dynamic team.<br/>Recently I also learned React.js and Vue.js and put some work samples in my resume.</p>

                        <a href={cv} className='get-cv' download>
                            <span>Download CV</span>
                            <span className='get-cv-icon icon-download'></span>
                        </a>
                    </figcaption>
                </figure>
            </article>
        </main>
    </>
    );
}

export default About;
// Components
import SiteLoader from "../../Components/Site-Loader/Site-Loader";
import Hero from '../../Parts/Hero/Hero';
import SocialMedia from '../../Components/Social-Media/Social-Media';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle';
import useCurrentPage from '../../Hooks/useCurrentPage';
// Css
import './Contact.css';

function Contact() {
    // title
    useTabTitle('Contact');
    // current page
    useCurrentPage();
    
    return (
    <>
        <SiteLoader/>
        <main className='main contact'>
            <Hero title='contact me'/>

            <nav className='social-box container'>
                <SocialMedia url='https://github.com/alirezasamadias/' icon='icon-github' link='alirezasamadias'/>
                <SocialMedia url='https://www.linkedin.com/in/alireza-samadi-83bab6266/' icon='icon-linkedin' link='alireza samadi'/>
                <SocialMedia url='https://wa.me/+989104657178' icon='icon-whatsapp' link='09104657178'/>
                <SocialMedia url='https://t.me/Alirezasa_as/' icon='icon-telegram' link='@Alirezasa_as'/>
                <SocialMedia url='tel:+989104657178' icon='icon-phone' link='09104657178'/>
                <SocialMedia url='mailto:alireza.samadi.as.as@gmail.com/' icon='icon-gmail' link='alireza.samadi.as.as@gmail.com'/>
            </nav>
        </main>
    </>
    );
}

export default Contact;
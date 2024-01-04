// Components
import SocialMedia from '../../Components/Social-Media/Social-Media';
import ScrollUp from '../../Components/Scroll-Up/Scroll-Up';
// Css
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className='container'>
                <p>&copy; 2024 alireza samadi</p>
            
                <nav>
                    <SocialMedia url='https://wa.me/+989104657178' icon='icon-whatsapp' />
                    <SocialMedia url='https://github.com/alirezasamadias/' icon='icon-github' />
                    <SocialMedia url='https://t.me/Alirezasa_as/' icon='icon-telegram' />
                </nav>
            </div>

            {/* scroll up page */}
            <ScrollUp />
        </footer>
    );
}

export default Footer;
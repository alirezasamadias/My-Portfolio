// Components
import SocialMedia from '../../Components/Social-Media/Social-Media';
import ScrollUp from '../../Components/Scroll-Up/Scroll-Up';
// Css
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <p>&copy; 2024 alireza samadi</p>
            
                <nav className='footer-navbar'>
                    <div className='tooltip' data-tooltip='whatsapp'>
                        <SocialMedia url='https://wa.me/+989104657178' icon='icon-whatsapp' />
                    </div>

                    <div className='tooltip' data-tooltip='github'>
                        <SocialMedia url='https://github.com/alirezasamadias/' icon='icon-github' />
                    </div>

                    <div className='tooltip' data-tooltip='telegram'>
                        <SocialMedia url='https://t.me/Alirezasa_as/' icon='icon-telegram' />
                    </div>
                </nav>
            </div>

            {/* scroll up page */}
            <ScrollUp />
        </footer>
    );
}

export default Footer;
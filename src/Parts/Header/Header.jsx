import { Link } from 'react-router-dom';
// Css
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <nav className='navbar'>
                <ul className='menu'>
                    <li className='menu-item'>
                        <Link to='/' className='menu-item-link'>project</Link>
                    </li>
                    <li className='menu-item'>
                        <Link to='/About' className='menu-item-link'>about</Link>
                    </li>
                    <li className='menu-item'>
                        <Link to='/Contact' className='menu-item-link'>contact</Link>
                    </li>
                </ul>

                <div className='menu-hamburger'></div>
            </nav>
        </header>
    );
}

export default Header;
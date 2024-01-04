// Css
import './Social-Media.css';

function SocialMedia(props) {
    const {url,icon,link} = props;

    return (
        <a href={url} target='_blank' className='social-media'>
            <i className={`social-icon ${icon}`}></i>
            <span className='social-id'>{link}</span>
        </a>
    );
}

export default SocialMedia;
// Images
import Portfolio from '../../assets/Images/Portfolio.png';
import PortfolioTest from '../../assets/Images/Portfolio-Test.png';
import Restaurant from '../../assets/Images/Restaurant.png';
import RestaurantTest from '../../assets/Images/Restaurant-Test.png';
import Construction from '../../assets/Images/Construction.png';
import ConstructionTest from '../../assets/Images/Construction-Test.png';
import ConstructionReactTest from '../../assets/Images/Construction-React-Test.png';
import Crypto from '../../assets/Images/Crypto.png';
import CryptoTest from '../../assets/Images/Crypto-Test.png';
import Gallery from '../../assets/Images/Gallery.png';
import GalleryTest from '../../assets/Images/Gallery-Test.png';
import RestApiVue from '../../assets/Images/Rest-Api-Vue.png';
import RestApiVueTest from '../../assets/Images/Rest-Api-Vue-Test.png';
// Components
import Loader from '../../Components/Loader/Loader';
import Hero from '../../Parts/Hero/Hero';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle';
import useCurrentPage from '../../Hooks/useCurrentPage';
// Css
import './Project.css';

// data
const data = [
    {
        id: 1,
        type: 'project',
        projectName: 'portfolio',
        categories: ['html5','css3','javascript'],
        image: Portfolio,
        test: PortfolioTest,
        description: 'This is the first project that I presented at the end of my training course. A one-page website has an interesting banner that attracts the audience and then uses a small gallery to display the portfolio and then gives a description about the person. Finally, you can contact the owner of the portfolio using a form that also has a social network. No other libraries or packages were used to create this website. It was originally a WordPress theme that I customized.',
        link: 'https://portfoliojs2023.netlify.app/',
        github: 'https://github.com/alirezasamadias/Portfolio.git/'
    },

    {
        id: 2,
        type: 'project',
        projectName: 'restaurant',
        categories: ['html5','css3','javascript'],
        image: Restaurant,
        test: RestaurantTest,
        description: 'this single-page website has an animated banner and that a modal to display the menu; Most of the site is about the restaurant menu and finally a section for contacting the restaurant and booking. No other libraries or packages were used to create this website. It was originally a WordPress theme that I customized.',
        link: 'https://restaurentjs2023.netlify.app/',
        github: 'https://github.com/alirezasamadias/Enfoled-Restaurent.git/'
    },
    
    {
        id: 3,
        type: 'project',
        projectName: 'construction',
        categories: ['html5','css3','javascript'],
        image: Construction,
        test: ConstructionTest,
        description: 'this project multi-page website with various section which is about a company active in the construction. No other library or package was used to create this website. No other libraries or packages were used to create this website. It was originally a WordPress theme that I customized.',
        link: 'https://constructionjs2023.netlify.app/',
        github: 'https://github.com/alirezasamadias/Construction.git/'
    },

    {
        id: 4,
        type: 'project',
        projectName: 'construction (react)',
        categories: ['html5','css3','react'],
        image: Construction,
        test: ConstructionReactTest,
        description: 'this project multi-page website with various section which is about a company active in the construction. No other library or package was used to create this website. initially, a wordpress template was prepared, byt I customized. (The only difference is the use of React.js)',
        link: 'https://constructionreact2023.netlify.app/',
        github: 'https://github.com/alirezasamadias/Construction-React.git/'
    },

    {
        id: 5,
        type: 'mini-project',
        projectName: 'gallery',
        categories: ['html5','css3','javascript'],
        image: Gallery,
        test: GalleryTest,
        description: 'a mini project with javascript a bit of design',
        link: 'https://galleryjs2023.netlify.app/',
        github: 'https://github.com/alirezasamadias/Gallery.git/'
    },

    {
        id: 6,
        type: 'mini-project',
        projectName: 'crypto',
        categories: ['html5','css3','react'],
        image: Crypto,
        test: CryptoTest,
        description: 'A small project with React and using axios to get data This project is a cryptocurrency search panel and also has a brief login form.',
        link: 'https://cryptoreact2023.netlify.app/',
        github: 'https://github.com/alirezasamadias/Crypto.git/'
    },

    {
        id: 7,
        type: 'mini-project',
        projectName: 'rest-api (vue)',
        categories: ['html5','css3','vue'],
        image: RestApiVue,
        test: RestApiVueTest,
        description: 'A small project with Vue and using axios to get data This project.',
        link: 'https://restapivue2024.netlify.app/',
        github: 'https://github.com/alirezasamadias/Rest-Api-vue.git/'
    }
];

function Project() {
    // title
    useTabTitle('Project');
    // current page
    useCurrentPage();

    return (
    <>
        <Loader/>
        <main className='main project'>
            <Hero title={<>hi.i'm alireza.<br/>a developer</>}>
                <p>thank you for looking at my projects.</p>
            </Hero>

            <div className='container'>
                <div className='project-items'>
                    {data.filter(item => item.type === 'project').map(item => {
                        const {id,projectName,image,test,categories,link,description,github} = item;
                        return (
                            <article className='article-item' key={id}>
                                <h2 className='title-md'>{projectName}</h2>
                                
                                <figure>
                                    <div className='parent-img-shadow'>
                                        <img src={image} alt={projectName} className='article-img' />
                                        <nav className='img-shadow'>
                                            <a href={link} target='_blank' className='shadow-btn icon-link'></a>
                                        </nav>
                                    </div>
                                    <img src={test} alt='test' className='img-test' />
                                    <figcaption>{description}</figcaption>
                                </figure>
                                
                                <nav className='article-footer'>
                                    <a href={github} target='_blank' className='icon-github'></a>

                                    <div className='category'>
                                        {categories.map((category , index) => {
                                            return <div className={`category-item icon-${category}`} key={index}></div>
                                        })}
                                    </div>
                                </nav>
                            </article>
                        );
                    })}
                </div>

                {/* mini project */}
                <h2 className='title-md subline'>mini project</h2>
                <div className='project-items'>
                    {data.filter(item => item.type === 'mini-project').map(item => {
                        const {id,projectName,image,test,categories,link,description,github} = item;
                        return (
                            <article className='article-item' key={id}>
                                <h2 className='title-md'>{projectName}</h2>
                                
                                <figure>
                                    <div className='parent-img-shadow'>
                                        <img src={image} alt={projectName} className='article-img' />
                                        <nav className='img-shadow'>
                                            <a href={link} target='_blank' className='shadow-btn icon-link'></a>
                                        </nav>
                                    </div>
                                    <img src={test} alt='test' className='img-test' />
                                    <figcaption>{description}</figcaption>
                                </figure>
                                
                                <nav className='article-footer'>
                                    <a href={github} target='_blank' className='icon-github'></a>

                                    <div className='category'>
                                        {categories.map((category , index) => {
                                            return <div className={`category-item icon-${category}`} key={index}></div>
                                        })}
                                    </div>
                                </nav>
                            </article>
                        );
                    })}
                </div>
            </div>
        </main>
    </>
    );
}

export default Project;
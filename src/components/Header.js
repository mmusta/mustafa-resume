import Anchor from './Anchor';
import './styles.scss';

const Header = () => {
    return <header className='header'>
        <h1 className='header__name'>Mustafa Usta</h1>
        <p className='header__contact-info'>Istanbul, TR | 542 299 39 54 | mmustafausta@yahoo.com | Github: <Anchor href={'https://github.com/mmusta'}>@mmusta</Anchor> | Linkedin: <Anchor href={'https://tr.linkedin.com/in/m%C3%BCcahit-mustafa-usta-213515262'}>mustafa usta</Anchor></p>
    </header>
}

export default Header;
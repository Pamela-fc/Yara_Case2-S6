import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './styles/navbar.css';
import Logo from '../components/img/Logo.png';


function NavBar() {
    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (  
        <header className='headNav'>
            <div className='headLogo'>
            <img src={Logo}></img> <h1>Yara</h1>
            
            </div>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Sobre</a>
                <Link to="/Contato"><a>Contatos</a></Link>
                <a href="/#">Inscrição</a>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    );
}

export default NavBar;

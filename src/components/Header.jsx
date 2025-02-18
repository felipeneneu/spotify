import './Header.css';

import logo from '../assets/logo.svg';

import { FaArrowLeft, FaArrowRight, FaHome, FaSearch } from 'react-icons/fa';
const Header = () => {
  return (
    <header>
      <nav className="header__navigation">
        <div className='header__logo'>
          <a href="/"><img src={logo} alt="" /></a>
        </div>
        <div className="navigation">
          <button className="arrow-left">
            <FaArrowLeft color="white" fontSize="1rem" />
            {/* <img src={FaArrowLeft} alt="Seta a Esquerda" /> */}
          </button>
          <button className="arrow-right">
            <FaArrowRight color="white" fontSize="1rem" />
            {/* <img src={FaArrowRight} alt="Seta a Direita" /> */}
          </button>
        </div>

        <div className='header__search_new'>
          <div className='header__search_home'>
            <a href="/" className=''><FaHome /></a>

          </div>
          <div className="header__search">
            <FaSearch color="white" fontSize="1rem" />
            <input id="search-input" type="text" maxLength="800" placeholder="O que você quer ouvir?" />
          </div>
        </div>

        <div className="header__login">
          <button className="subscribe">Inscreva-se</button>
          <button className="login">Entrar</button>
        </div>

      </nav>
    </header >
  )
}

export default Header
import '../assets/styles/Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">Твой психолог</h1>
                <nav className="header__menu">
                    <ul className="menu__item">
                        <li><Link to="/" className="menu__item">О&nbsp;проекте</Link></li>
                        <li><Link to="/" className="menu__item">Чем мы можем помочь</Link></li>
                        <li><Link to="#contact" className="menu__item">Связаться с нами</Link></li>
                        <li><Link to="/chatbot" className="menu__item">Чат</Link></li>
                    </ul>
                </nav>
            </div>
    </header>
    );
}

export default Header;
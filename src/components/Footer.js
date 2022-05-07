import { Link } from 'react-router-dom';
import '../assets/styles/Footer.css';
import footerLogo from '../assets/img/footer-logo.png';
import vk from '../assets/img/vk.png';
import yandex from '../assets/img/yandex.png';
import telegram from '../assets/img/telegram.png';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__container">
                    <img src={footerLogo} alt="Логотип" className="footer__logo" />
                    <div className="footer__socials" id="contact">
                        <span>Мы в соцсетях:</span>
                        <img src={vk} alt="" className="socials" />
                        <img src={yandex} alt="" className="socials" />
                        <img src={telegram} alt="" className="socials" />
                    </div>
                    <nav className="footer__nav">
                        <ul className="nav__item">
                            <li><Link to="#" className="item__link">О&nbsp;проекте</Link></li>
                            <li><Link to="#" className="item__link">Чем мы можем помочь</Link></li>
                        </ul>
                    </nav>
                    <span className="footer__copy">&copy;2022 Твой психолог</span>
                </div>
            </footer>
        </>
    );
}

export default Footer; 
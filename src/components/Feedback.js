import '../assets/styles/Feedback.css';
import julia from '../assets/img/julia.jpeg';
import anna from '../assets/img/anna.jpeg';
import kate from '../assets/img/kate.webp';

const Feedback = () => {
    return (
        <div>
            <h2 className="feedback__title">Отзывы</h2>
            <div className="feedback">
            <div className="container__feedback">
            <img src={julia} alt="Avatar" />
            <p className="feedback__name"><span><b>Юлия</b></span> Тренер</p>
            <p>Приложение чудесное, после общения с психологом - упорядочились мысли в голове, разложилось все по полочкам) Психолог услышал мою проблему и помог ее решить.</p>
        </div>
        <div className="container__feedback">
            <img src={anna} alt="Avatar" />
            <p className="feedback__name"><span ><b>Анна</b></span> Студент</p>
            <p>Одно из крупнейших приложений. Чат удобен в использовании, квалифицированные  специалисты</p>
        </div>
        <div className="container__feedback">
            <img src={kate} alt="Avatar" />
            <p className="feedback__name"><span ><b>Екатерина</b></span> Продавец</p>
            <p>Этот сайт просто находка. Быстрая профессиональная помощь. Понравилось, что специалисты многопрофильные. Очень довольна, что нашла его</p>
        </div>
        </div>
        </div>
    );
}

export default Feedback; 
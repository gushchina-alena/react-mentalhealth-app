import '../assets/styles/Info.css';
import abuse from '../assets/img/info/2.webp';
import anxiety from '../assets/img/info/anxiety.jpg';
import stress from '../assets/img/info/стресс.webp';
import burnout from '../assets/img/info/burnout.webp';
import relationship from '../assets/img/info/4.webp';
import support from '../assets/img/info/support.JPG';
import talk from '../assets/img/info/talk.JPG';
import tell from '../assets/img/info/tell.JPG';
import provide from '../assets/img/info/provide.JPG';

const Info = () => {
    return (
        <>
            <div>
            <div className='help'>
            <div className="help__header">
                Чем мы можем помочь
            </div>
            <div className="help__card">
                <img src={abuse} alt="" />
                <div className="help__card__text-h">
                    Насилие
                </div>
                <div className="help__card__text">
                    Расскажем что делать и куда обращаться при насилии. Куда позвонить и какие организации оказывают помощь
                </div>
            </div>
            <div className="help__card">
                <img src={anxiety} alt="" />
                <div className="help__card__text-h">
                    Тревожность
                </div>
                <div className="help__card__text">
                    Расскажем как быстро помочь себе при тревоге.
                </div>
            </div>
            <div className="help__card">
                <img src={stress} alt="" />
                <div className="help__card__text-h">
                    Стресс
                </div>
                <div className="help__card__text">
                    Поможем справиться со стрессом.
                </div>
            </div>
            <div className="help__card">
                <img src={burnout} alt="" />
                <div className="help__card__text-h">
                    Выгорание
                </div>
                <div className="help__card__text">
                    Расскажем куда двигаться и что делать при выгорании.
                </div>
            </div>
            <div className="help__card">
                <img src={relationship} alt="" />
                <div className="help__card__text-h">
                    Отношения
                </div>
                <div className="help__card__text">
                    Подскажем как наладить гармоничные отношения с собой и окружающими.
                </div>
            </div>
            <div className="help__card">
                <img src={support} alt="" />
                <div className="help__card__text-h">
                    Поддержка
                </div>
                <div className="help__card__text">
                    Окажем поддержку чтобы ни происходило.
                </div>
            </div>
            </div>
            <div className="works">
                <div className="works__header">
                    Как работает наш сервис
                </div>

                <div className="works__card">
                    <div className="works__card__img">
                        <img src={talk} alt="" />
                    </div>
                    <div className="works__card__text_h">
                        Выслушаем и поможем
                    </div>
                    <div className="works__card__text">
                        Наш бот в чате выслушает что тебя тревожит и поможет найти выход из сложившейся ситуации
                    </div>
                </div>
                <div className="works__card">
                    <div className="works__card__img">
                        <img src={tell} />
                    </div>
                    <div className="works__card__text_h">
                        Расскажем
                    </div>
                    <div className="works__card__text">
                        Мы расскажем о дополнительных ресурсах помощи и дадим ссылки на них ссылки, а также при необходимости
                        подскажем где получить помощь оффлайн
                    </div>
                </div>
                <div className="works__card">
                    <div className="works__card__img">
                        <img src={provide} />
                    </div>
                    <div className="works__card__text_h">
                        Предоставим
                    </div>
                    <div className="works__card__text">
                        Предоставим ссылки на дополнительную информацию о волнующих тебя проблемах и расскажем какие книги можно
                        прочесть для самопомщи
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Info; 

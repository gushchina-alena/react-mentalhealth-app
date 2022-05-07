import '../assets/styles/WelcomeScreen.css';

const WelcomeScreen = () => {
    return (
        <div className="container__presentation">
            <h1>Разговор с психологом</h1>
            <div className="text">
                <div className="left">
                    <h2>Твой психолог всегда рядом</h2>
                </div>
                <div className="right">
                    <h3><b>Попробуй <br/>онлайн терапию</b></h3>
                </div>
            </div>
        </div> 
    );
}

export default WelcomeScreen;
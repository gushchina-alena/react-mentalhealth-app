import Info from './Info';
import WelcomeScreen from './WelcomeScreen';
import Feedback from './Feedback';

const LandingScreen = () => {
    return (
        <>
            <WelcomeScreen />
            <Info />
            <Feedback />
        </>
    );
}

export default LandingScreen;
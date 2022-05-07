import './App.css';
import Chatbot from './components/Chatbot';
import LandingScreen from './components/LandingScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
              <Route exact path="/" element={<LandingScreen />}></Route>
              <Route path="/chatbot" element={<Chatbot />}></Route>
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

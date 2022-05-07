import { useState } from "react"; 
import ReactScrollableFeed from "react-scrollable-feed";
import MessageList from "./MessageList";
import EnterMessage from "./EnterMessage";
import chatLogo from "../assets/img/chat-logo.png";
import refreshImg from "../assets/img/refresh.png";
import "../assets/styles/Chatbot.css";

const Chatbot = () => {
    const greeting = "Привет! Как твое самочувствие?";
    const [userMessages, setUserMessages] = useState([])

    const sendMessage = (userInput) => {
        if (userInput) {
            const newMsg = {
                text: userInput
            }
            setUserMessages([...userMessages, newMsg])
        }
    }

    const handleRefresh = () => {
        window.location.reload(false);
    }

    return (
        <div className="chatbot">
            <div className="chatbot__header">
                <div className="chatbot__logo-section">
                <img 
                    src={chatLogo} 
                    alt="chat logo"
                    className="chatbot__logo"
                />
                    <h1>Чат психологической помощи</h1>
                </div>
                <img 
                    className="chatbot__refresh-btn" 
                    src={refreshImg} 
                    onClick={handleRefresh} 
                    alt="button refresh" 
                />
            </div>
            <ReactScrollableFeed>
                <div className="chatbot__main">
                    <MessageList 
                        userMessages={userMessages} 
                        greeting={greeting} 
                    />
                </div>
            </ReactScrollableFeed>
            <div className="chatbot__footer">
                <EnterMessage sendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default Chatbot;

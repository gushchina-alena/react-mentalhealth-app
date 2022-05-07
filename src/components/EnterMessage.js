import { useState } from "react";
import send from "../assets/img/send.png";
import "../assets/styles/EnterMessage.css";

const EnterMessage = ({ sendMessage }) => {
    const [input, setInput] = useState(""); 

    const onSendClick = () => {
        sendMessage(input)
        setInput("");
    }

    return (
        <>
            <input 
                    className="enter-message-textfield" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Введите сообщение...">
            </input>
            {input ? 
                <img 
                    src={send} 
                    className="sendBtn" 
                    onClick={onSendClick} 
                    alt="button send" 
                /> :  
                <img 
                    src={send} 
                    className="sendBtn" 
                    disabled 
                    alt="button send"
                />
            }
        </>
    );
}

export default EnterMessage;
import "../assets/styles/Message.css"; 

const Message = ({ incomingMsg, sentMsg, msg }) => {
    return (
        <div className="message-container">
            {incomingMsg && (<div className="message-container__incoming-box">
                <p className="message-container__incoming-text">
                    {msg}
                </p>
            </div>)}
            {sentMsg && (<div className="message-container__sent-box">
                <p className="message-container__sent-text">
                    {msg}
                </p>
            </div>)}
        </div>
    );
}

export default Message; 
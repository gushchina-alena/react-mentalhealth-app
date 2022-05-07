import Message from "./Message";
import chatData from "../chatData";
import "../assets/styles/MessageList.css";

const MessageList = ({ greeting, userMessages }) => {
    return (
        <div className="messagelist-container">
                <Message 
                    incomingMsg={true} 
                    msg={greeting} 
                />
                {userMessages.map((item) => 
                    <>
                        <Message 
                            sentMsg={true} 
                            msg={item.text} 
                        />
                        <Message 
                            incomingMsg={true} 
                            msg = {
                                item.text === chatData[0].message ? chatData[0].reply :
                                item.text === chatData[1].message ? chatData[1].reply :
                                item.text === chatData[2].message ? chatData[2].reply :
                                item.text === chatData[3].message ? chatData[3].reply :
                                item.text === chatData[4].message ? chatData[4].reply :
                                item.text === chatData[5].message ? chatData[5].reply :
                                "Прости, я такое еще не понимаю ;("
                            }
                        />
                    </>
                )} 
        </div>
    ); 
}

export default MessageList;
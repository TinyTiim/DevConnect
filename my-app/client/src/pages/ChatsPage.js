import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
import "./HomePage.css";
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '78010dcf-ab80-48a2-9842-115d2c628ce4', 
        props.user.username, 
        props.user.secret);
    return  (
        
        <div style={{ height: '89vh' }}>
            hello
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    )
}

export default ChatsPage;
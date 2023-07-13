import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
import "./HomePage.css";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '52a95cce-d78f-4c16-ac34-c48d03d414f4', 
        props.user.username, 
        props.user.secret);
    return  (
        
        <div style={{ height: '89vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    )
}

export default ChatsPage;
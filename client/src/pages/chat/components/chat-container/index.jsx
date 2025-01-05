import ChatHeader from "./components/chat-header"
import MessageContainer from "./components/message-bar"
import MessageBar from "./components/message-container"

const ChatContainer = () => {
  return (
    <div className="fixed top-0 h-[100vh] w-[100vw] bg-[#1c1d25] md:flex flex-col md:static md:flex-1">
        <ChatHeader />
        <MessageContainer />
        <MessageBar />
    </div>
  )
}

export default ChatContainer
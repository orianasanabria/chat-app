import React from "react"
import Input from "./Input"
import { ChatContext } from "../context/ChatProvider"

const Chat = () => {
  const { messages, user } = React.useContext(ChatContext)
  const refChat = React.useRef(null)
  React.useEffect(() => {
    refChat.current.scrollTop = refChat.current.scrollHeight
  }, [messages])

  return (
    <div
      ref={refChat}
      className="mt-3 px-2"
      style={{ height: "83vh", overflowY: "scroll" }}
    >
      {messages.map((item, index) =>
        user.uid === item.uid ? (
          <div key={index} className="d-flex justify-content-end mb-2">
            <span className="badge rounded-pill bg-primary py-2 px-4">
              {item.message}
            </span>
          </div>
        ) : (
          <div key={index} className="d-flex justify-content-start mb-2">
            <span className="badge rounded-pill bg-secondary py-2 px-4">
              {item.message}
            </span>
          </div>
        )
      )}
      <Input />
    </div>
  )
}

export default Chat

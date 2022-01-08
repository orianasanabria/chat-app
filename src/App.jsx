import React from "react"
import NavBar from "./components/NavBar"
import Chat from "./components/Chat"
import { ChatContext } from "./context/ChatProvider"

const App = () => {
  const { user } = React.useContext(ChatContext)
  return user !== null ? (
    <div>
      <NavBar />
      {user.state ? (
        <Chat />
      ) : (
        <div className="lead text-center mt-5">LogIn First</div>
      )}
    </div>
  ) : (
    <div>Loading</div>
  )
}

export default App

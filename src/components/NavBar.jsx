import React from "react"
import { ChatContext } from "../context/ChatProvider"

const NavBar = () => {
  const { user, logIn, logOut } = React.useContext(ChatContext)
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span className="navbar-brand">Chat</span>
      <div>
        {user.state ? (
          <button onClick={logOut} className="btn btn-outline-danger my-2">
            Logout
          </button>
        ) : (
          <button onClick={logIn} className="btn btn-outline-success my-2 me-3">
            Log In
          </button>
        )}
      </div>
    </nav>
  )
}

export default NavBar

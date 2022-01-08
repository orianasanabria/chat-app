import React from "react"
import { ChatContext } from "../context/ChatProvider"

const Input = () => {
  const { user, addMessage } = React.useContext(ChatContext)
	const [message, setMessage] = React.useState('')
	const add = (e) => {
		e.preventDefault()
		if (!message.trim()) return;
		addMessage(user.uid, message)
		setMessage('')
	}
  return (
    <form onSubmit={add} className="fixed-bottom input-group p-3 bg-dark">
      <input value={message} onChange={e => setMessage(e.target.value)} type="text" className="form-control" />
      <div className="input-group-append">
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </div>
    </form>
  )
}

export default Input

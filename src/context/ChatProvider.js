import React from "react"
import { db, auth, provider } from "../config/firebase"
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import { collection, query, onSnapshot, addDoc, orderBy } from "firebase/firestore"
export const ChatContext = React.createContext()

const ChatProvider = (props) => {
  const userData = { uid: null, email: null, state: null }
  const [user, setUser] = React.useState(userData)
  const [messages, setMessages] = React.useState([])

  React.useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ uid: user.uid, email: user.email, state: true })
        loadMessages()
      } else {
        setUser({ uid: null, email: null, state: false })
      }
    })
  }

  const logIn = async () => {
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {}
  }

  const logOut = () => {
    signOut(auth)
  }

  const loadMessages = () => {
    const q = query(collection(db, "chat"), orderBy("date"))
    onSnapshot(q, (querySnapshot) => {
      const messages = []
      querySnapshot.forEach((doc) => {
        messages.push(doc.data())
      })
      setMessages(messages)
    })
  }

	const addMessage = async(uid, message) => {
		try {
			await addDoc(collection(db, "chat"), {
				date: Date.now(),
				message: message,
				uid: uid,
			});
		} catch (error) {
			console.log(error)
		}
	}

  return (
    <ChatContext.Provider value={{ user, logIn, logOut, messages, addMessage }}>
      {props.children}
    </ChatContext.Provider>
  )
}

export default ChatProvider

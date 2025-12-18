import { useState } from 'react'
import './App.css'
import Profile from './Profile'
import { type User, UserContext } from './UserContext'

function App() {
  const [user] = useState<User>({ name: 'John Doe' })

  return (
    <UserContext.Provider value={user}>
      <div>
        <Profile />
      </div>
    </UserContext.Provider>
  )
}

export default App

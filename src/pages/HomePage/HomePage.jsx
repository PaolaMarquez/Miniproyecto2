import React from 'react'
import { logout } from '../../firebase/authentication/authentication'

export function HomePage() {
  return (
    <div>
        HomePage
        <button onClick={logout}>Log out</button>
    </div>
  )
}

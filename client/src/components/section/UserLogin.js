import React,{ useState } from 'react'
import { Avatar } from './Avatar'

export function UserLogin (username) {
const [ logedIn, setLogedIn] = useState(false)

    return (
        <div>
        {logedIn? (
            <Avatar username="Jon Doe"/>
        ):(
            <div>
                <button id="login-btn" className="border-0 rounded-5 px-2 py-1">Log In</button>
                <span className='px-1'> | </span>
                <button id="signup-btn" className="border-0 rounded-5 px-2 py-1">Sign Up</button>
            </div>
        )}
        </div>
    )
}
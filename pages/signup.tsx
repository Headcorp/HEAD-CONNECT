import axios from 'axios'
import React from 'react'

function Signup() {
  return (
    <button onClick={() => {
        axios.post('/api/signup', {
            "login": "vidorashe@gmail.com",
            "password": "test",
            "confirm_password": "test",
            "signup_email": "visorashe@gmail.com",
            "email": "visorashe@gmail.com",
            "activeLocale": "fr_FR",
            "name": "Vidor Ashe"
        })
    }}>Signup</button>
  )
}

export default Signup
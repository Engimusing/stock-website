import React, { useState } from 'react'
import axios from 'axios'

export default function SignUpForm() {
    const [ formInput, setFormInput ] = useState({});

    const changeInput = (e) => {
        setFormInput({...formInput, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formInput)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input onChange={changeInput} type="text" name="username" placeholder="username"/>

                <label htmlFor="password">Password: </label>
                <input onChange={changeInput} type="password" name="password"/>

                <button type="submit">Submit</button>
            </form>        
        </div>
    )
}

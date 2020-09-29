import React from 'react'

export default function SignUpForm() {
    return (
        <div>
            <form>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" placeholder="username"/>

                <label htmlFor="password">Password: </label>
                <input type="password" name="password"/>
            </form>        
        </div>
    )
}

import React from 'react'

export default function LoginForm() {
    const [ formInput, setFormInput ] = useState({});

    const changeInput = (e) => {
        setFormInput({...formInput, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/register', formInput).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
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

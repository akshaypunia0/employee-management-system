import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log("Form submitted");
        // console.log(email, password);

        handleLogin(email, password);

        setEmail("")
        setPassword("")
        
        
    }


    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form 
                className='flex flex-col gap-3 items-center justify-center'
                onSubmit={submitHandler}
                >
                    <input required type="email"
                        placeholder='email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className='text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400'
                        />

                    <input required type="password"
                        placeholder='password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className='text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400'
                        />

                    <button
                        type='submit'
                        className='text-White outline-none bg-emerald-600 rounded-full py-3 px-5 text-xl mt-3'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
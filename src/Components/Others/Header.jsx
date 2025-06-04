import React, { useState } from 'react'

const Header = (data) => {

  console.log(data);
  

  const [username, setUsername] = useState(data.name)

  const logoutUser = () => {
    localStorage.removeItem('loggedInUser')
    window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello, <br /> <span className='text-4xl font-semibold'>{username}</span>
      </h1>
      <button onClick={logoutUser} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded'>Logout</button>
    </div>
  )
}

export default Header
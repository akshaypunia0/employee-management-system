import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage } from '../Utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const {employees, admin} = getLocalStorage()
        setUserData({employees, admin})
    
    }, [])

    // console.log(userData);
    
    


  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
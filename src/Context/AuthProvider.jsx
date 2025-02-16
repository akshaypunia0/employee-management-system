import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage } from '../Utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null)

  const [employeesData, setEmployeesData] = useState()

  useEffect(() => {
    const { employees, admin } = getLocalStorage()
    setUserData({ employees, admin })
    setEmployeesData(employees)

    // console.log('useEffect me', employees, admin);
    

  }, [])

  const updateEmployee = () => {

    const updatedData = JSON.parse(localStorage.getItem('employees'))
    setEmployeesData(updatedData)

  }



  // console.log(userData);




  return (
    <div>
      <AuthContext.Provider value={{userData, employeesData, updateEmployee}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
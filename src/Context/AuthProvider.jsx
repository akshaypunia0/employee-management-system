import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null)

  const [employeesData, setEmployeesData] = useState()

  useEffect(() => {
    const { employees, admin } = getLocalStorage()
    setUserData({ employees, admin })
    setEmployeesData(employees)

    console.log("Auhtprovider Usee effect me run hua");
    

    // console.log('useEffect me', employees, admin);
    

  }, [])

  const updateEmployee = () => {

    const updatedData = JSON.parse(localStorage.getItem('employees'))

    console.log("Update employee function running");
    
    setEmployeesData(updatedData)

  }


  // console.log(employeesData);




  return (
    <div>
      <AuthContext.Provider value={{userData, employeesData, updateEmployee}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
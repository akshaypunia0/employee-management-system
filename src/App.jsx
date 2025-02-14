import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)

  const authData = useContext(AuthContext)

  console.log(authData);

  // useEffect(() => {

  //   if (authData) {
  //     const loggedInUser = localStorage.getItem('loggedInUser')

  //     console.log(loggedInUser);

  //     if(loggedInUser) {
  //       console.log(loggedInUser.role);
        
  //       setUser(loggedInUser.role)
  //     }
  //   }

  // }, [authData])

  console.log(user);
  



  const handleLogin = (email, password) => {

    if (authData && authData.admin.find((admin) => admin.email == email && admin.password == password)) {
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      setUser('admin')
    }
    else if (authData && authData.employees.find((employee) => employee.email == email && employee.password == password)) {
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
      setUser('employee')
    }
    else {
      alert('Wrong crediantials');
    }
  }



  // handleLogin(email, password)


  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()

  // },)


  return (
    <>
      <div>

        {
          !user ? <Login handleLogin={handleLogin} /> :
            user == 'admin' ? <AdminDashboard /> :
              user == 'employee' ? <EmployeeDashboard /> : null
        }


      </div>
    </>
  )
}

export default App

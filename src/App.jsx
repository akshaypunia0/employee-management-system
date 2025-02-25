import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)
  const [loggedInUserData, SetLoggedInUserData] = useState(null)

  const authData = useContext(AuthContext)

  // console.log("ye hai",authData);

  useEffect(() => {

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

      // console.log('loggedInUser',loggedInUser.role);

      if(loggedInUser) {

        // console.log('inside useEffect if');

        // console.log('loggedInUser',loggedInUser.role);
        setUser(loggedInUser.role)
        SetLoggedInUserData(loggedInUser.data)
      }

  },[])

  // console.log(user);




  const handleLogin = (email, password) => {

    if(authData.userData) {

      const admin = authData.userData.admin.find((admin) => admin.email == email && admin.password == password)
      const employee = authData.userData.employees.find((employee) => employee.email == email && employee.password == password)

      if (admin) {

        setUser('admin')
        SetLoggedInUserData(admin)
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin', data: admin}))
  
      }

      else if (employee) {
        setUser('employee')
        SetLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))

      }

      else {
        alert("Wrong crediantials")
      }
    }
  }



  // handleLogin(email, password)


  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()

  // },[])



  return (
    <>
      <div>

        {
          !user ? <Login handleLogin={handleLogin} /> :
            user == 'admin' ? <AdminDashboard data={{loggedInUserData, SetLoggedInUserData}} /> :
              user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null
        }


      </div>
    </>
  )
}

export default App

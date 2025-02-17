import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {

    // const[data, setData] = useState(null)

    const authData = useContext(AuthContext)   

    const [employeesData, setEmployeesData] = useState(authData.employeesData)
    // const [employeeTaskData, setEmployeeTaskData] = useState()
    // console.log(employeesData);


    return (
        <div className='flex flex-col bg-[#1c1c1c] p-5 rounded mt-5 h-80'>

            <div className='bg-blue-400 py-2 px-4 flex justify-between rounded mb-2'>
                <h2 className='text-black font-bold'>Name</h2>
                <h2 className='text-xl font-bold'>New Task</h2>
                <h2 className='text-xl font-bold'>Active Task</h2>
                <h2 className='text-xl font-bold'>Completed Task</h2>
                <h2 className='text-xl font-bold'>Failed Task</h2>
            </div>

            <div className='overflow-auto'>
            {
                employeesData.map((employee, id) => {
                    return (
                        <div key={id} className='py-2 px-4 flex justify-between rounded mb-2 border-2 border-gray-800'>
                            <h2>{employee.name}</h2>
                            <h2>{employee.taskNumbers.newTask}</h2>
                            <h2>{employee.taskNumbers.active}</h2>
                            <h2>{employee.taskNumbers.completed}</h2>
                            <h2>{employee.taskNumbers.failed}</h2>
                        </div>
                    )
                })
            }
            </div>

        </div>
    )
}

export default AllTask
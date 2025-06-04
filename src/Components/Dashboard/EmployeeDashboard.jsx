import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../../TaskList/TaskList'

const EmployeeDashboard = ({ data }) => {

    // console.log("Employee dashboard",data);

    return (
        <>
            <div className='py-10 px-20 bg-[#icicic] h-screen'>
                <div className='border-2 border-gray-800 h-[100%] p-10 bg-gray-900 rounded-3xl'>
                    <Header data={data} />
                    <TaskListNumbers data={data} />
                    <TaskList data={data} />
                </div>

            </div>
        </>
    )
}

export default EmployeeDashboard
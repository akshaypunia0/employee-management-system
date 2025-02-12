import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../../TaskList/TaskList'

const EmployeeDashboard = () => {
    return (
        <>
            <div className='p-10 bg-[#icicic] h-screen'>
                <Header/>
                <TaskListNumbers />
                <TaskList />
            </div>
        </>
    )
}

export default EmployeeDashboard
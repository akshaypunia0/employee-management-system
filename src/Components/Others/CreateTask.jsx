import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const CreateTask = () => {

  const {updateEmployee} = useContext(AuthContext)

  const task = {

    taskTitle: "",
    taskDate: "",
    employeeName: "",
    taskCategory: "",
    taskDescription: "",
    newTask: true,
    active: false,
    completed: false,
    failed: false

  }

  const [newTask, setNewTask] = useState(task)

  function resetTask() {

    setNewTask(task)

  }

  const addTask = () => {

    const loggedinUserData = JSON.parse(localStorage.getItem('employees'))

    loggedinUserData.forEach((element) => {

      if (newTask.employeeName == element.name) {

        element.tasks.push(newTask)
        element.taskNumbers.newTask++

      }

    })

    localStorage.setItem('employees', JSON.stringify(loggedinUserData))
    
    
    updateEmployee();
    

  }


  const handleSubmit = (e) => {
    e.preventDefault()

    // console.log(newTask);

    addTask()

    resetTask()

  }


  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      <form onSubmit={handleSubmit} className='flex flex-wrap w-full items-start justify-between'>

        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input
              type="text"
              placeholder='Make a design'
              value={newTask.taskTitle}
              onChange={(e) => {
                setNewTask((prevTask) => ({
                  ...prevTask, taskTitle: e.target.value

                }))
              }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>date</h3>
            <input
              type="Date"
              value={newTask.taskDate}
              onChange={(e) => {
                setNewTask((prevTask) => ({
                  ...prevTask, taskDate: e.target.value
                }))
              }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assigned to</h3>
            <input
              type="text"
              placeholder='Employee name'
              value={newTask.employeeName}
              onChange={(e) => {
                setNewTask((prevTask) => ({
                  ...prevTask, employeeName: e.target.value
                }))
              }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
              type="text"
              placeholder='Design, dev etc.'
              value={newTask.taskCategory}
              onChange={(e) => {
                setNewTask((prevTask) => ({
                  ...prevTask, taskCategory: e.target.value
                }))
              }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
            />
          </div>
        </div>

        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
          <textarea
            cols="30"
            rows="10"
            placeholder='Description'
            value={newTask.taskDescription}
            onChange={(e) => {
              setNewTask((prevTask) => ({
                ...prevTask, taskDescription: e.target.value
              }))
            }}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' >
          </textarea>
          <button
            type='submit'
            className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create task</button>
        </div>

      </form>
    </div>
  )
}

export default CreateTask
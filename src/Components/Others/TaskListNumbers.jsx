import React from 'react'

const TaskListNumbers = ({data}) => {

    // console.log("Tasklist number",data.taskNumbers.active);


  return (
    <div className='flex m-10 justify-between gap-5 screen h-[20%]'>
        <div className='w-[45%] px-9 py-6 rounded-xl bg-gray-700'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[45%] px-9 py-6 rounded-xl bg-gray-700'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='w-[45%] px-9 py-6 rounded-xl bg-gray-700'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='w-[45%] px-9 py-6 rounded-xl bg-gray-700'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers
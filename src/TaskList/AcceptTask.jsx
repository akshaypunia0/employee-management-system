import React from 'react'

const AcceptTask = ({data}) => {
    return (
        <>
            <div className='flex flex-col flex-shrink-0 h-full w-[350px] p-5 bg-blue-600 rounded-xl '>
                <div className='flex justify-between item-center'>
                    <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
                    <h4 className='text-sm'>{data.taskDate}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>
                {data.taskTitle}
                </h2>
                <p className='text-sm mt-2'>
                {data.taskDescription}
                </p>

                <div className='flex justify-between mt-auto'>
                    <button className='bg-green-700 py-1 px-2 text-sm font-bold rounded'>Mark as complete</button>
                    <button className='bg-red-700 py-1 px-2 text-sm font-bold rounded'>Mark as failed</button>
                </div>
            </div>
        </>
    )
}

export default AcceptTask
import React from 'react'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {

    // console.log(data);


    
  return (
    <div id='taskList' className='flex items-center overflow-x-auto justify-start gap-10 h-[50%] w-full py-5 px-1 my-28 flex-nowrap'>
    

    {
        data.tasks.map((ele, id) => {
            if (ele.newTask) {
                return <NewTask key={id} data={ele}/>
            }

            if (ele.active) {
                return <AcceptTask key={id} data={ele}/>
            }

            if(ele.completed) {
                return <CompleteTask key={id} data={ele}/>
            }

            if(ele.failed) {
                return <FailedTask key={id} data={ele}/>
            }
        })
    }
        
    </div>
  )
}

export default TaskList
import React from 'react'
import { countercontext } from '../context/context'
import { useContext } from 'react'

function Count() {
    let [task]=useContext(countercontext);
  return (
    <div>
       <h2>Number of Tasks</h2>
       <p className='fs-3 text-warning'>No. of tasks : {task.length}</p>
    </div>
  )
}

export default Count
